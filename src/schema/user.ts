const userSchema = `
  enum UserStatus {
    inactive
    active
    not_onboarded
    banned
    deleted
  }

  enum UserType {
    user
    specialist
    company
  }

  type User {
    _id: ID!
    email: String!
    password: String
    status: UserStatus
    type: UserType
    firstname: String
    lastname: String
    phone: String
    birthdate: String
    addresses: [Address]
    created: Float
    updated: Float
    picture: String
    expo_push_token: String
    specialist_information: SpecialistInformation
    wallet: UserWalletType
    Company: [Company]
  }
  type UserWalletType {
    credits: Int
  }

  input UserInput {
    email: String
    password: String
    type: UserType
    status: UserStatus
    firstname: String
    lastname: String
    phone: String
    birthdate: String
    addresses: [AddressInput]
    picture: String
    expo_push_token: String
  }

  input CreateUserInput {
    email: String!
    password: String!
    type: UserType
  }

  extend type Query {
    users: [User]
    userByID(_id: ID!): User
    userByEmail(email: String!): User
    specialists: [User]
    specialistsNearYou(coordinates: [Float]!, location_type: LocationTypes!, _service_category_id: ID, search: String, offset: Int, limit: Int): [User]
    mostPopularSpecialists(location_type: LocationTypes!, _service_category_id: ID, search: String, offset: Int, limit: Int): [User]
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User
    updateUser(_id: ID!, user: UserInput!): User
    finishRegistration(_id: ID!, user: UserInput!): User
    login(email: String!, password: String!): User
    loginAdmin(email: String!, password: String!): User
    forgotPassword(email: String!): User
    changePassword(email: String!, old_password: String!, new_password: String!): User
    deleteAccount(_id: ID!): User
  }
`;

export default userSchema;
