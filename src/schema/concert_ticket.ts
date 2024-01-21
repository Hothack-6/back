const concertTicketSchema = `
    type ConcertTicket {
        _id: ID!
        user_id: ID
        concert_id: ID
        attended: Boolean!
    }

    input CreateTicketInput {
        user_id: ID!
        concert_id: ID!
    }

    input UpdateTicketInput {
        user_id: ID!
        concert_id: ID!
        attended: Boolean!
    }

    extend type Query {
        concertTickets: [ConcertTicket]
        concertTicketsByID(_id: ID!): ConcertTicket
    }

    extend type Mutation {
        redeemQRCode(concert_ID: ID!): ConcertTicket
    }
`;

export default concertTicketSchema