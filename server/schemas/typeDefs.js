const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        userName: String!
        firstName: String!
        lastName: String!
        email: String!
        # Changed from "workouts: [String] to workouts: [Workout], do we need exclamation point for [Workout]?
        workouts: [Workout]

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
 # Added workout type def - KLG 09/27/23

    type Workout {
      _id: ID 
      title: String!
      description: String
      exercises: [Exercise]
      }

      type Exercise {
        _id:ID
        name: String
        sets: Int
        reps: Int
        weight: Int
        notes: String
      }

  type Tracker {
    _id: ID
    workoutDate: String
    workoutDetails: [ExerciseDetails]
  }

    ### Create a new exercise for a specific workout.  This will be used in mutations and queries
  

    type Mutation {
        #Set up mutations to handle creating a user or logging into a user profile and return Auth type
          addUser(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
            login(email: String!, password: String!): Auth 

            addWorkout(userId: ID!, workout: String!): User
           removeUser(userId: ID!): User   
           removeWorkout(userId: ID!, workout: String!): User
    }
    `;

module.exports = typeDefs;
