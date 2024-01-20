const userSchema = `
  enum UserStatus {
    inactive
    active
  }

  type User {
    _id: ID!
    email: String!
    wallet_address: String
    first_name: String
    last_name: String
    bio: String
    traits: [String]
  }

  input UserInput {
    email: String
    wallet_address: String
    first_name: String
    last_name: String
    bio: String
    traits: [String]
  }

  input CreateUserInput {
    email: String!
    first_name: String
    last_name: String
  }

  extend type Query {
    users: [User]
    userByID(_id: ID!): User
    userByEmail(email: String!): User
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User
    updateUser(_id: ID!, user: UserInput!): User
  }
`;

export default userSchema;
