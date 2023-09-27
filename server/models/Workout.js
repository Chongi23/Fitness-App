const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            max_length: 100,
        },

        description: {
            type: String,
            max_length: 500,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },

        exercises: [
            {
                excercise: {
                    type: Schema.Types.ObjectId,
                    ref: 'Exercise',
                    require: true,
                },
                sets: Number,
                weight: Number,
                reps: Number,
                notes: String,
            },
        ],
    },
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;