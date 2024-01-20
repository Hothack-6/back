const userSchema = `
  enum UserStatus {
    inactive
    active
  }

  type User {
    _id: ID!
    email: String!
    password: String
    status: UserStatus
  }

  input UserInput {
    email: String
    password: String
    status: UserStatus
  }

  input CreateUserInput {
    email: String!
    password: String!
  }

  extend type Query {
    users: [User]
    userByID(_id: ID!): User
    userByEmail(email: String!): User
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User
    updateUser(_id: ID!, user: UserInput!): User
    login(email: String!, password: String!): User
  }
`;

export default userSchema;
