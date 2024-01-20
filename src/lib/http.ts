import _ from "lodash";
import { ApolloError } from "apollo-server-express";

const graphQLUtils = {
  // Utilitary methods on the GraphQL side
  handleResponse(response: any) {
    if (response.data.code === 200) {
      return response.data.result;
    }
    throw new ApolloError(response.data.error, response.data.code);
  },
};

export { graphQLUtils };
