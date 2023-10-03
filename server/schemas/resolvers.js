const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise, Tracker } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent,args,context) => {
            console.log(context.user)
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'workouts',
                    populate: 'exercises',
                });
                console.log(user)
                return user;
        
            }
            throw new AuthenticationError('Not logged in');
        },

        workouts: async () => {
            return Workout.find();
        },

        workout: async (parent,args,context) => {
            console.log(context.workout)
            if (context.workout) {
                const workout = await Workout.findById(context.workout._id).populate({
                    path: 'exercises',
                    populate: 'exerciseDetails',
                });
                console.log(workout)
                return workout;
            }
        }


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

        addWorkout: async (parent, { title, description }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            try {
                const newWorkout = await Workout.create({
                    title: title ,
                    description: description,
                    exercises: [],
                    user: context.user._id,
                });

                await User.findByIdAndUpdate(context.user._id, {
                    $push: { workouts: newWorkout },
                });

                return newWorkout;
            } catch (error) {
                console.error(error);
                throw new Error('Could not add workout');
            }
        },

        addExerciseToWorkout: async (parent, { userId, workoutId, exercise }) => {
            try {
                const user = await User.findById(userId);

                const currentWorkout = user.currentWorkout;

                const newExercise = await Exercise.create({
                    name: exercise.name,
                    description: exercise.description || '',
                    details: exercise.details || [],
                });

                currentWorkout.exercises.push(newExercise);

                await User.findByIdAndUpdate(userId, {
                    $set: { currentWorkout },
                });
                return currentWorkout;
            } catch (error) {
                throw new Error('Could not add exercise to the current workout');
            }
        },

        recordWorkout: async (parent, { userId, workout }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }
            try {
                const user = await User.findById(userId);
                const newTrackerEntry = await Tracker.create({
                    workoutDate: new Date().toISOString(),
                    exerciseDetails: workout.exercises.map((exercises) => ({
                        sets: exercise.details.sets || 1,
                        reps: exercise.details.reps || 0,
                        weight: exercise.details.weight || 0,
                        notes: exercise.details.notes || '',
                    })),
                });

                user.workoutHistory.push(newTrackerEntry);
                await User.findByIdAndUpdate(userId, {
                    $set: { currentWorkout: null },
                });
                return newTrackerEntry;
            } catch (error) {
                console.error(error);
                throw new Error('Could not record the workout');
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