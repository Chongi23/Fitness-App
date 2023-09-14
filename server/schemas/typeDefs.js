const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
    }
    
    type Query {
        users: [User]!
        user(userId: ID!): User
    }
    
    type Mutation {
        addUser(userName: String!): User
    }
    `;

module.exports = typeDefs;
