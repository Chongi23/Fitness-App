const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken }  = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({_id: userId });
        },
    },

    Mutation: {
        addUser: async (parent, { userName, firstName, lastName, email, password }) => {
            const user = await User.create({ userName, firstName, lastName, email, password });
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
         
         if (!correctPw) {

            throw new AuthenticationError('Incorrect Password!!');
         }

         const token = signToken(user);
         return { token, user };
            },

            addWorkout : async (parent, { userId, workout  }) => {
                return User.findOneAndUpdate(
                    {_id: userId },
                    {
                        $addToSet: { workouts: workout }
                    },
                    {
                        new: true,
                        runValidators:true,
                    }
                );
            },

            removeUser : async (parent, { userId }) => {
                return User.findOneAndDelete({ _is: userId });
            },

                //THIS is where we will later add removeWorkout 

                removeWorkout: async (parent, { userId, workout }) => {
                    return User.findOneAndUpdate(
                      { _id: userId },
                      { $pull: { workouts: workout } },
                      { new: true }
                    );
                  },
        },
};

module.exports = resolvers; 