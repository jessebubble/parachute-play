// import the gql tagged template function
const { gql } = require('apollo-server-express');

//
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(email: String!): User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser( email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;