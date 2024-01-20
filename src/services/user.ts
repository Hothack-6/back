import mongoose, { Types } from 'mongoose';
import _ from 'lodash';
import { ApolloError } from 'apollo-server-express';
import {
  BookingStatus,
  CompanyUserStatus,
  CreateUserInput,
  User as UserModelType,
  UserInput,
  UserStatus,
  UserType,
} from '../generated/graphql';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
import { Company } from '../models/company';
import { getDomain } from '../utils/email-utils';
import { EMAILS_TEMPLATES, SendGrid } from '../lib/sendgrid';
import { Booking } from '../models/booking';
import { slackApi } from '../lib/slack';

const { ObjectId } = Types;
const PasswordChangeRequest = mongoose.model('PasswordChangeRequest');

const usersApi = {
  createUser: async (user: CreateUserInput) => {
    // Check if the user already exists. If it does, it should check if it hasn't been onboarded yet
    const userExists = await User.findOne({
      email: user.email,
      status: UserStatus.Active,
    });

    // Check if the user is trying to create an account with a different type
    if (
      userExists &&
      userExists.type === UserType.Specialist &&
      user.type &&
      [UserType.User, UserType.Company].includes(user.type)
    ) {
      throw new ApolloError('Email is registered as a specialist');
    }

    // Check if the user is trying to create an account with a different type
    if (
      userExists &&
      userExists.type &&
      [UserType.User, UserType.Company].includes(userExists.type) &&
      user.type === UserType.Specialist
    ) {
      throw new ApolloError('Email is registered as normal a user');
    }

    // if (!userExists && user.type === UserType.User) {
    //   throw new ApolloError('You need to be invited by a company to create an account');
    // }

    //  If the user already exists it means that it has been invited from a company
    if (userExists) {
      if (userExists.type === UserType.User && user.type !== UserType.Company) {
        const companyUserBelong = companyUserBelongTo(userExists._id);
        if (!companyUserBelong)
          throw new ApolloError('User is not active within any company');
      }

      if (user.type !== UserType.Company || user.type === userExists.type) {
        const updatedUser = await usersApi.updateUser(userExists._id, {
          password: await bcrypt.hash(user.password, 10),
        });
        return updatedUser;
      }
    }

    const newUser = await User.create({
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
      type: user.type,
      status:
        user.type == UserType.User
          ? UserStatus.NotOnboarded
          : UserStatus.Active,
    });

    return newUser;
  },
  updateUser: async (_id: string, user: UserInput) => {
    const updatedUser = await User.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: user },
      { returnOriginal: false },
    );
    return updatedUser;
  },
  finishRegistration: async (_id: string, user: UserInput) => {
    const updatedUser = await usersApi.updateUser(_id, user);

    if (!updatedUser) return;

    slackApi.newUserNotification(updatedUser);

    SendGrid.sendMail(
      updatedUser.email,
      {
        first_name: _.get(updatedUser, 'firstname') || 'there',
      },
      EMAILS_TEMPLATES[`signup_${updatedUser?.type}`],
    );

    return updatedUser;
  },
  login: async (email: string, password: string) => {
    const user: UserModelType | null = await User.findOne({
      email,
      status: UserStatus.Active,
    });
    if (!user) {
      throw new ApolloError('Invalid email or password');
    }

    if (user.status !== UserStatus.Active) {
      throw new ApolloError('This account has been deactivated');
    }

    const matchedPassword = await bcrypt.compare(password, user.password || '');
    if (!matchedPassword) {
      throw new ApolloError('Invalid email or password');
    }

    // It should check whether the user belongs to some company
    if (user.type === UserType.User) {
      const companyUserBelong = companyUserBelongTo(user._id);
      if (!companyUserBelong)
        throw new ApolloError('User is not active within any company');
    }
    return user;
  },
  loginAdmin: async (email: string, password: string) => {
    const user: UserModelType | null = await User.findOne({
      email,
      status: UserStatus.Active,
    });
    if (!user) {
      throw new ApolloError('Invalid email or password');
    }

    if (user.status !== UserStatus.Active) {
      throw new ApolloError('This account has been deactivated');
    }

    const matchedPassword = await bcrypt.compare(password, user.password || '');
    if (!matchedPassword) {
      throw new ApolloError('Invalid email or password');
    }

    // It should check whether the user belongs to some company
    if (user.type !== UserType.Company) {
      throw new ApolloError('User is not not an Admin user');
    }
    return user;
  },
  forgotPassword: async (email: string) => {
    const user = await User.findOne({ email, status: UserStatus.Active });

    if (user) {
      const request_id = Math.floor(1000 + Math.random() * 9000);

      await PasswordChangeRequest.create({
        request_id,
        email: user.email,
        used: false,
      });

      // Send a reset password email
      SendGrid.sendMail(
        user.email,
        {
          request_id,
          first_name: _.get(user, 'firstname') || 'there',
          reset_password_url: `${getDomain(
            user.type!,
          )}reset-password/${request_id}`,
        },
        EMAILS_TEMPLATES['forgotPassword'],
      );
    }

    return user;
  },
  changePassword: async (
    email: string,
    old_password: string,
    new_password: string,
  ) => {
    const user = await User.findOne({ email, status: UserStatus.Active });
    if (!user) throw new ApolloError('Invalid email or password');

    const matchedPassword = await bcrypt.compare(
      old_password,
      user.password || '',
    );
    if (!matchedPassword) throw new ApolloError('Invalid email or password');

    const updatedUser = await User.findOneAndUpdate(
      { _id: new ObjectId(user._id) },
      {
        $set: {
          password: await bcrypt.hash(new_password, 10),
        },
      },
      { returnOriginal: false },
    );

    return updatedUser;
  },
  deleteAccount: async (_id: string) => {
    // Check whether the user can delete his account
    // 1 - Checks if there are any active bookings
    const activeBookings = await Booking.find({
      $or: [
        { _specialist_id: new ObjectId(_id) },
        { _customer_id: new ObjectId(_id) },
      ],
      status: BookingStatus.Active,
      booking_date: { $gte: new Date() },
    });
    if (activeBookings.length > 0)
      throw new ApolloError(
        'You cannot delete your account while you have active bookings',
      );

    // Update account status to deleted
    const userUpdated = await User.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { status: UserStatus.Deleted } },
      { returnOriginal: false },
    );

    return userUpdated;
  },
};

export const deductCreditsFromWallet = async (_id: string, amount: number) => {
  const user = await User.findOne({ _id: new ObjectId(_id) });
  if (!user) throw new ApolloError('Invalid user to deduct credits from');
  // if ((user.wallet?.credits || 0) < amount) throw new ApolloError('Not enough credits to complete process');

  const updatedUser = await User.findOneAndUpdate(
    { _id: new ObjectId(user._id) },
    {
      $inc: {
        'wallet.credits': -amount,
      },
    },
    { returnOriginal: false },
  );
  return updatedUser;
};

export const addCreditsToWallet = async (_id: string, amount: number) => {
  const user = await User.findOne({ _id: new ObjectId(_id) });
  if (!user) throw new ApolloError('Invalid user to add credits to');

  const updatedUser = await User.findOneAndUpdate(
    { _id: new ObjectId(user._id) },
    {
      $inc: {
        'wallet.credits': amount,
      },
    },
    { returnOriginal: false },
  );
  return updatedUser;
};

export const companyUserBelongTo = async (_id: string) => {
  const companies = await Company.findOne({
    users: {
      $elemMatch: {
        status: CompanyUserStatus.Active,
        _id: new ObjectId(_id),
      },
    },
  });
  return companies;
};

export { usersApi };
