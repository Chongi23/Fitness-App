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
export const ADD_WORKOUT= gql`
mutation addWorkout($userId: ID!, $workout: String!) {
        addWorkout(userId: $userId, workout: $workout) {
            _id
            name
            workout
        }
}
`;
//Will need to be able to REMOVE Workouts and Exercises
//export const ADD_EXERCISE= gql`
//mutation addExercise($workoutId: ID!, $exercise: String!) {
//        addExercise(workoutId: $workoutId, exercise: $exercise) {
//            _id
//            workout
//        }
//}
//`;