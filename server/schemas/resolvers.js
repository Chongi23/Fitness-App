const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
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

        addWorkout: async (parent, { userId, workout }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            try {
                const createdWorkout = await Workout.create({
                    title: workout.title,
                    description: workout.description,
                    exercises: workout.exercises || [],
                    user: context.user._id,
                });

                await User.findByIdAndUpdate(userId, {
                    $push: { workouts: createdWorkout },
                });

                return createdWorkout;
            } catch (error) {
                console.error(error);
                throw new Error('Could not add workout');
            }
        },

        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _is: userId });
        },

        //THIS is where we will later add removeWorkout 

        removeWorkout: async (parent, { userId, workoutId }, context) => {
            // Ensure the user is authenticated
            if (!context.user) {
              throw new AuthenticationError('Not logged in');
            }
      
            try {
              // Remove the workout from the user's workouts
              const updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                  $pull: { workouts: workoutId },
                },
                { new: true }
              );
      
              if (!updatedUser) {
                throw new Error('User not found');
              }
              
              await Workout.findByIdAndDelete(workoutId);
      
              return updatedUser;
            } catch (error) {
              console.error(error);
              throw new Error('Could not remove workout');
            }
          },
    },
};

module.exports = resolvers; 