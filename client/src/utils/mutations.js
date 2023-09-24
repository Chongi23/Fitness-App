import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    mutation addUser(username: $username, firstName: $firstName,lastName: $lastName,email: $email,password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

//Will need to add WORKOUT // EXERCISES TO THOSE WORKOUTS

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            _id
            username
    }
    }
}
`;

//Will need to be able to REMOVE Workouts and Exercises