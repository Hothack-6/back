import mongoose, { Schema } from "mongoose";

import { Concert as ConcertSchemaType } from "../generated/graphql";

const ConcertSchema = new Schema<ConcertSchemaType>(
  {
    name: String,
  },
  { collection: "concerts" }
);

export const Concert = mongoose.model<ConcertSchemaType>(
  "Concert",
  ConcertSchema
);
