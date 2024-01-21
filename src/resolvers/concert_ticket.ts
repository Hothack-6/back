import { Types } from "mongoose";
import _ from "lodash";
import { ConcertTicket } from "../models/concert_ticket";
import type { TypedResolvers } from "../types/GraphQL";
import { concertTicketApi } from "../services/concertTicket";
import { User } from "../models/user";
import { Concert } from "../models/concert";

const { ObjectId } = Types;

const concertTicketResolver: TypedResolvers = {
  Query: {
    concertTickets: async () => {
      return ConcertTicket.find({});
    },
    concertTicketsByID: async (root, { _id }) => {
      return ConcertTicket.findOne({_id: new ObjectId(_id) });
    },
  },
  ConcertTicket: {
    User: async ({ user_id }) => {
      // Return all the companies the user belong to and are active
      return User.findOne({
        _id: new ObjectId(user_id),
      });
    },
    Concert: async ({ concert_id }) => {
      // Return all the companies the user belong to and are active
      return Concert.findOne({
        _id: new ObjectId(concert_id),
      });
    },
  },
  Mutation: {
    redeemQRCode: (root, { concert_ID }) => {
      return concertTicketApi.redeemQRCode(concert_ID);
    },
  },
};

export default concertTicketResolver;
