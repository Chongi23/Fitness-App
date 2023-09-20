const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken }  = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        profile: async (parent, { userId }) => {
            return User.findOne({_id: userId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, firstName, lastName, email, password }) => {
            const user = await User.create({ username, firstName, lastName, email, password });
            const token = signToken(user);
            //DON'T FORGET to add TOKEN here below
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found');
             }
         const correctPw = await user.isCorrectPassword(password);
         
         is (!correctPw) {
            throw new AuthenticationError('Incorrect Password!!');
         }

         const token = signToken(user);
         return { token, user };
            },

            removeUser : async (parent, { userId }) => {
                return User.findOneAndDelete({ _is: userId });

                //THIS is where we will later add removeWorkout 

            }
        }
}