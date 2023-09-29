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
  
    type ExerciseDetails {
      _id: ID!
      sets: Int
      reps: Int
      weight: Int
      notes: String
    }
    
    type Tracker {
      _id: ID!
      workoutDate: String
      exerciseDetails: [ExerciseDetails]
    }
    
  # Set up an Auth type to handle returning data from a user creating or user login
  
   type Auth {
   token: ID!
   user: User
  }

    type Query {
        users: [User]!
        user(userId: ID!): User
        userWorkoutHistory(userId: ID!): [Tracker]
    }
 # Added workout type def - KLG 09/27/23





    ### Create a new exercise for a specific workout.  This will be used in mutations and queries
  

    type Mutation {
        #Set up mutations to handle creating a user or logging into a user profile and return Auth type
          addUser(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
          login(email: String!, password: String!): Auth 
          addWorkout(userId: ID!, workout: WorkoutInput!): User
          removeUser(userId: ID!): User   
          removeWorkout(userId: ID!, workout: String!): User
          createExerciseForWorkout(workoutId: ID!, exercise: ExerciseInput!): Exercise
          recordWorkout(userId: ID!, workout: WorkoutInput!): Tracker
    }

    input ExerciseInput {
      name: String!
      sets: Int
      reps: Int
      weight: Int
      notes: String
    }

    input WorkoutInput {
      title: String!
      description: String
      exercises: [ExerciseInput]
    }
    `;

module.exports = typeDefs;