import mongoose, { Types } from "mongoose";
import _ from "lodash";
import { ApolloError } from "apollo-server-express";
import {
  CreateUserInput,
  User as UserModelType,
  UserInput,
  UserStatus,
} from "../generated/graphql";
import { User } from "../models/user";
import bcrypt from "bcryptjs";

const { ObjectId } = Types;

const usersApi = {
  createUser: async (user: CreateUserInput) => {
    const newUser = await User.create({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
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
  // login: async (email: string, password: string) => {
  //   const user: UserModelType | null = await User.findOne({
  //     email,
  //     status: UserStatus.Active,
  //   });
  //   if (!user) {
  //     throw new ApolloError("Invalid email or password");
  //   }

  //   if (user.status !== UserStatus.Active) {
  //     throw new ApolloError("This account has been deactivated");
  //   }

  //   const matchedPassword = await bcrypt.compare(password, user.password || "");
  //   if (!matchedPassword) {
  //     throw new ApolloError("Invalid email or password");
  //   }

  //   return user;
  // },
};

export { usersApi };
