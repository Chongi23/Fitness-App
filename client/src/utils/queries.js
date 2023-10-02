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