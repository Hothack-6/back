import { Types } from "mongoose";
import _ from "lodash";
import { User } from "../models/user";
import type { TypedResolvers } from "../types/GraphQL";
import { usersApi } from "../services/user";

const { ObjectId } = Types;

const userResolvers: TypedResolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    userByID: async (root, { _id }) => {
      return User.findOne({ _id: new ObjectId(_id) });
    },
    userByEmail: async (root, { email }) => {
      return User.findOne({ email });
    },
  },
  Mutation: {
    createUser: (root, { user }) => {
      return usersApi.createUser(user);
    },
    updateUser: (root, { _id, user }) => {
      return usersApi.updateUser(_id, user);
    },
    login: (root, { email, password }) => {
      return usersApi.login(email, password);
    },
  },
};

export default userResolvers;
