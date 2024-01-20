import { Types } from "mongoose";
import _ from "lodash";
import { Concert } from "../models/concert";
import type { TypedResolvers } from "../types/GraphQL";
import { concertApi } from "../services/concert";
import { CreateTicketInput, UpdateTicketInput } from "../generated/graphql";

const { ObjectId } = Types;

const concertResolvers: TypedResolvers = {
  Query: {
    concerts: async () => {
      return Concert.find({});
    },
    concertByID: async(root, { _id }) => {
      return Concert.findOne({_id: new ObjectId(_id)})
    }
  },
  Mutation: {
    createConcert: (root, { concert }) => {
      return concertApi.createConcert(concert)
    },
     
    purchaseTicket: (root, { ticketInfo }: {ticketInfo: CreateTicketInput}) => {
      return concertApi.purchaseTicket(ticketInfo);
    },

    updateAttendance:  (root, { ticketInfo}: {ticketInfo: UpdateTicketInput}) => {
      return concertApi.updateAttendance(ticketInfo)
    }
  },
};

export default concertResolvers;
