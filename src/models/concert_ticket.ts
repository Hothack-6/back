import mongoose, { Schema } from "mongoose";

import { ConcertTicket as ConcertTicketSchemaType } from "../generated/graphql";

const ConcertTicketSchema = new Schema<ConcertTicketSchemaType>(
  {
    user_id: {
      type: String,
      required: true,
    },
    concert_id: {
      type: String,
      required: true,
    },
    attended: {
      type: Boolean,
    },
  },
  { collection: "concert_tickets" }
);

export const ConcertTicket = mongoose.model<ConcertTicketSchemaType>(
  "concert_tickets",
  ConcertTicketSchema
);
