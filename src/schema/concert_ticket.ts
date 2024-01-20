const concertTicketSchema = `
    type ConcertTicket {
        _id: ID!
        user_id: ID!
        concert_id: ID!
        attended: Boolean
    }

    input CreateTicketInput {
        user_id: ID!
        concert_id: ID!
    }

    input UpdateTicketInput {
        attended: Boolean
    }

    extend type Query {
        tickets: [ConcertTicket]
    }

    extend type Mutation {
        createConcertTicket(ticket: CreateTicketInput): ConcertTicket
        updateConcertTicket(ticket: UpdateTicketInput): ConcertTicket
    }
`;

export default concertTicketSchema