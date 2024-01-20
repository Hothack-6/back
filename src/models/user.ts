import mongoose, { Schema } from "mongoose";

import { User as UserSchemaType } from "../generated/graphql";

const UserSchema = new Schema<UserSchemaType>(
  {
    email: {
      type: String,
      required: true,
    },
    wallet_address: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    bio: {
      type: String,
    },
    traits: {
      type: [String],
    },
  },
  { collection: "users" }
);

export const User = mongoose.model<UserSchemaType>("User", UserSchema);
