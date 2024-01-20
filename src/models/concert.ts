import mongoose, { Schema } from "mongoose";

import { Concert as ConcertSchemaType } from "../generated/graphql";

const ConcertSchema = new Schema<ConcertSchemaType>(
  {
    name: {
      type: String,
      required: true
    },
    start: Schema.Types.Date,
    end: Schema.Types.Date,
    artist: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    base_image: {
      type: String,
      required: true
    },
    available_tickets: {
      type: Number,
      required: true
    },
    token_id: {
      type: Number,
      required: true
    }
  },
  { collection: "concerts" }
);

export const Concert = mongoose.model<ConcertSchemaType>(
  "Concert",
  ConcertSchema
);
