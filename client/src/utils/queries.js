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
query singleUser($userId: ID!) {
    user(userId: $userId) {
        _id
        userName
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