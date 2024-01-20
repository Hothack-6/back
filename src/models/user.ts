import mongoose, { Schema } from "mongoose";

import { User as UserSchemaType } from "../generated/graphql";

const UserSchema = new Schema<UserSchemaType>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

export const User = mongoose.model<UserSchemaType>("User", UserSchema);
