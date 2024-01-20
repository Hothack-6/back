import GraphQLJSON from 'graphql-type-json';

import './models';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './version' or its correspondin... Remove this comment to see the full error message
import version from './version.json';

export const rootResolvers = {
  JSON: GraphQLJSON,
  Query: {
    appVersion: async (obj: any, { app }: any) => version[app],
  },
};
