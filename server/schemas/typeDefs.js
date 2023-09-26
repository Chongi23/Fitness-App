const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        userName: String!
        firstName: String!
        lastName: String!
        email: String!
        # There is now a field to store the user's password
        password: String
    }
    
  # Set up an Auth type to handle returning data from a user creating or user login
   type Auth {
   token: ID!
   user: User
  }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }
    
    type Mutation {
        #Set up mutations to handle creating a user or logging into a user profile and return Auth type
          addUser(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
            login(email: String!, password: String!): Auth 

         removeUser(userId: ID!): User   
    }
    `;

module.exports = typeDefs;
