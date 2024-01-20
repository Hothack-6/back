import http from 'http';
import { Maybe, Resolvers } from '../generated/graphql';

export type GQLContext = {
  headers: http.IncomingHttpHeaders;
  _user_id: Maybe<string>;
};

export type TypedResolvers = Resolvers<GQLContext>;
