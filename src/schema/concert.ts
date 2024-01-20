const concertSchema = `
  type Concert {
    _id: ID!
    name: String!
    start: Float
    end: Float
    artist: String!
    description: String!
    price: Float!
    base_image: String!
    available_tickets: Int!
    token_id: Int!
  }

  input CreateConcertInput {
    name: String!
    start: Float
    end: Float
    artist: String!
    description: String!
    price: Float!
    base_image: String!
    available_tickets: Int!
    token_id: Int!
  }

  input UpdateConcertInput {
    name: String
    start: Float
    end: Float
    artist: String
    description: String
    price: Float
    base_image: String
    available_tickets: Int
    token_id: Int
  }

  extend type Query {
    concerts: [Concert]
    concertByID(_id: ID!): Concert
  }

  extend type Mutation {
    createConcert(concert: CreateConcertInput): Concert
    purchaseTicket(ticketInfo: CreateTicketInput): ConcertTicket
    updateAttendance(ticketInfo: UpdateTicketInput): ConcertTicket
  }
`;

export default concertSchema;
