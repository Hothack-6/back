import {
  makeExecutableSchema,
  addResolveFunctionsToSchema,
} from 'apollo-server-express';
import { rootResolvers } from './resolvers';

// Import modular schemas
import userSchema from './schema/user';

// Import modular resolvers
import userResolvers from './resolvers/user';

const rootTypeDefs = `
  type RootSchema {
    status: Boolean
  }
  type Query {
    getStatus: [RootSchema]
    appVersion(app: String!): String
  }
  type Mutation {
    changeStatus: RootSchema
  }
  scalar JSON
`;

const typeDefs = [
  rootTypeDefs,
  userSchema,
];

const resolvers = [
  rootResolvers,
  userResolvers,
];

const schema = makeExecutableSchema({
  typeDefs,
});

addResolveFunctionsToSchema({ schema, resolvers: userResolvers });

export { schema, typeDefs, resolvers };
