import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($userName: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, firstName: $firstName,lastName: $lastName,email: $email,password: $password) {
        token
        user {
            _id
            userName
        }
    }
}
`;
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            _id
            userName
    }
    }
}
`;

//Will need to add WORKOUT // EXERCISES TO THOSE WORKOUTS
export const ADD_WORKOUT = gql`
  mutation addWorkout($title:String!, $description:String!) {
    addWorkout(title: $title, description: $description) {
      _id
      title
      description
      exercises {
        _id
        name
      }
    }
  }
`;

export const ADD_EXERCISE_TO_WORKOUT = gql`
  mutation addExerciseToWorkout($userId: ID!, $workoutId: ID!, $exercise: ExerciseInput!) {
    addExerciseToWorkout(userId: $userId, workoutId: $workoutId, exercise: $exercise) {
      _id
      title
      description
      exercises {
        _id
        name
      }
    }
  }
`;

export const RECORD_WORKOUT = gql`
  mutation recordWorkout($userId: ID!, $workout: WorkoutInput!) {
    recordWorkout(userId: $userId, workout: $workout) {
      _id
      workoutDate
      exerciseDetails {
        _id
        sets
        reps
        weight
        notes
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;
