import { Types } from "mongoose";
import _ from "lodash";
import { ConcertTicket } from "../models/concert_ticket";
import type { TypedResolvers } from "../types/GraphQL";
import { concertTicketApi } from "../services/concertTicket";

const { ObjectId } = Types;

const concertTicketResolver: TypedResolvers = {
  Query: {
    concertTickets: async () => {
      return ConcertTicket.find({});
    },
    concertTicketsByID: async (root, { _id }) => {
      return ConcertTicket.findOne({id: new ObjectId(_id) });
    },
  },
  Mutation: {
    redeemQRCode: (root, { concert_ID }) => {
      return concertTicketApi.redeemQRCode(concert_ID);
    },
  },
};

export default concertTicketResolver;
