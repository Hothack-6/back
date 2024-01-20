import "core-js/stable";
import "regenerator-runtime/runtime";
import http from "http";
import express from "express";

import _ from "lodash";
import { ApolloError, ApolloServer } from "apollo-server-express";
import compression from "compression";

import Database from "./lib/db";
import { typeDefs, resolvers } from "./schema";
import { parseToken } from "./utils/token-utils";
import { GQLContext } from "./types/GraphQL";

const { GRAPHQL_PORT } = process.env;

// Create express server
const app = express();

app.use(compression());

// Creates the default route for graphql
app.use("/graphql", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Timing-Allow-Origin', 'DOMAIN');
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, apollographql-client-name, apollographql-client-version, Server-Timing"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// CORS configuration
const corsOptions = {
  origin: (origin: any, callback: any) => callback(null, true),
  credentials: true,
};

// Creates the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }): GQLContext => {
    const token = parseToken(req?.header("authorization") ?? "");

    return {
      headers: req?.headers,
      _user_id: token?.user_id ?? null,
    };
  },
  tracing: false,
  cacheControl: false,
});

export async function startApp() {
  await Database.connect();

  server.applyMiddleware({
    cors: corsOptions,
    app,
    bodyParserConfig: {
      limit: "10mb",
    },
  });

  const httpServer = http.createServer(app);

  httpServer.listen(GRAPHQL_PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${GRAPHQL_PORT}${server.graphqlPath}`
    );
  });
}
