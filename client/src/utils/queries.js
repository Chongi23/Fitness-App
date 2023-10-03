import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query allUsers {
    users {
        _id
        userName

    }
}
`;

export const QUERY_SINGLE_USER = gql`
query singleUser {
    user {
        _id
        userName
        workouts {
            _id
            title
            description
            exercises {
                _id
              description
              details {
                _id
                notes
                reps
                sets
                weight
              }
              name
            }
        }
    }
}
`;

export const QUERY_WORKOUTS = gql`
query allWorkouts {
    workouts {
        _id
        title
        description
    }
}`

export const QUERY_SINGLE_WORKOUT = gql`
query singleWorkout {
    workout {
        _id
        title
        description
    }
}`

//What WOULD this do exactly?
// export const QUERY_ME = gql`?

//EXERCISES

export const QUERY_EXERCISES = gql`
query allExercises {
    exercises {
        _id
        exercise

    }
}
`;

export const QUERY_SINGLE_EXERCISE = gql`
query singleExercise($exerciseId: ID!) {
    exercise(exerciseId: $exerciseId) {
        _id
        exercise
    }
}
`;