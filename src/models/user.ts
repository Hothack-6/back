import mongoose, { Schema } from 'mongoose';

import {
  User as UserSchemaType,
} from '../generated/graphql';

const UserSchema = new Schema<UserSchemaType>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { collection: 'user' },
);

export const User = mongoose.model<UserSchemaType>('User', UserSchema);
