import {
  makeExecutableSchema,
  addResolveFunctionsToSchema,
} from "apollo-server-express";
import { rootResolvers } from "./resolvers";

// Import modular schemas
import userSchema from "./schema/user";
import concertSchema from "./schema/concert";

// Import modular resolvers
import userResolvers from "./resolvers/user";
import concertResolvers from "./resolvers/concert";
import concertTicketSchema from "./schema/concert_ticket";

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

const typeDefs = [rootTypeDefs, userSchema, concertSchema, concertTicketSchema];
const resolvers = [rootResolvers, userResolvers, concertResolvers];

const schema = makeExecutableSchema({
  typeDefs,
});

addResolveFunctionsToSchema({ schema, resolvers: userResolvers });
addResolveFunctionsToSchema({ schema, resolvers: concertResolvers });

export { schema, typeDefs, resolvers };
