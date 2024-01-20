import mongoose, { Schema } from "mongoose";

import { ConcertTicket as ConcertTicketSchemaType } from "../generated/graphql";

const ConcertTicketSchema = new Schema<ConcertTicketSchemaType>(
  {
    user_id: Schema.Types.ObjectId,
    concert_id: Schema.Types.ObjectId,
    attended: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { collection: "concert_tickets" }
);

export const ConcertTicket = mongoose.model<ConcertTicketSchemaType>(
  "concert_tickets",
  ConcertTicketSchema
);
