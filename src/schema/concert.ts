const concertSchema = `
  type Concert {
    _id: ID!
    name: String!
  }

  extend type Query {
    concerts: [Concert]
  }

  extend type Mutation {
    purchaseTicket(_user_id: ID!, _concert_id: ID!): Concert
  }
`;

export default concertSchema;
