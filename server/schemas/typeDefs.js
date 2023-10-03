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
        currentWorkout: Workout
        password: String
    }

    type Workout {
      _id: ID 
      title: String!
      description: String
      exercises: [Exercise]
    }
  
    type Exercise {
      _id: ID
      name: String
      description: String
      details: [ExerciseDetail]
    }
  
    type ExerciseDetail {
      _id: ID
      sets: Int
      reps: Int
      weight: Int
      notes: String
    }
    
    type Tracker {
      _id: ID
      workoutDate: String
      exerciseDetails: [ExerciseDetail]
    }
    
  # Set up an Auth type to handle returning data from a user creating or user login
  
   type Auth {
   token: ID!
   user: User
  }
  input ExerciseDetailInput {
    sets: Int
    reps: Int
    weight: Int
    notes: String
  }

  input ExerciseInput {
    name: String!
    description: String
    details: [ExerciseDetailInput]
  }

  input WorkoutInput {
    title: String!
    description: String
    exercises: [ExerciseInput]
  }
    type Query {
        users: [User]!
        user: User
        userWorkoutHistory(userId: ID!): [Tracker]
        workouts: [Workout]!
        workout: Workout
        singleWorkout (workoutId: ID!): Workout 
    }

    type Mutation {
        #Set up mutations to handle creating a user or logging into a user profile and return Auth type
          addUser(userName: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
          login(email: String!, password: String!): Auth 
          addWorkout(title:String,description:String): Workout
          addExerciseToWorkout(userId: ID!, workoutId: ID!, exercise: ExerciseInput!): Workout
          removeUser(userId: ID!): User   
          removeWorkout(workoutId: ID!): User
          createExerciseForWorkout(workoutId: ID!, exercise: ExerciseInput!): Exercise
          recordWorkout(userId: ID!, workout: WorkoutInput!): Tracker
    }
    `;

module.exports = typeDefs;