import { Types } from "mongoose";
import _ from "lodash";
import { Concert } from "../models/concert";
import type { TypedResolvers } from "../types/GraphQL";
import { concertApi } from "../services/concert";

const { ObjectId } = Types;

const concertResolvers: TypedResolvers = {
  Query: {
    concerts: async () => {
      return Concert.find({});
    },
  },
  Mutation: {
    purchaseTicket: (root, { _user_id, _concert_id }) => {
      return concertApi.purchaseTicket(_user_id, _concert_id);
    },
  },
};

export default concertResolvers;
