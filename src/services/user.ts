import mongoose, { Types } from "mongoose";
import _ from "lodash";
import { ApolloError } from "apollo-server-express";
import {
  CreateUserInput,
  User as UserModelType,
  UserInput,
  UserStatus,
  UserType,
} from "../generated/graphql";
import { User } from "../models/user";
import bcrypt from "bcryptjs";

const { ObjectId } = Types;

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
      throw new ApolloError("Email is registered as a specialist");
    }

    // Check if the user is trying to create an account with a different type
    if (
      userExists &&
      userExists.type &&
      [UserType.User, UserType.Company].includes(userExists.type) &&
      user.type === UserType.Specialist
    ) {
      throw new ApolloError("Email is registered as normal a user");
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
      { returnOriginal: false }
    );
    return updatedUser;
  },
  login: async (email: string, password: string) => {
    const user: UserModelType | null = await User.findOne({
      email,
      status: UserStatus.Active,
    });
    if (!user) {
      throw new ApolloError("Invalid email or password");
    }

    if (user.status !== UserStatus.Active) {
      throw new ApolloError("This account has been deactivated");
    }

    const matchedPassword = await bcrypt.compare(password, user.password || "");
    if (!matchedPassword) {
      throw new ApolloError("Invalid email or password");
    }

    return user;
  },
};

export { usersApi };
