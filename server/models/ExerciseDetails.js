const { Schema } = require('mongoose');

const exerciseDetailsSchema = new Schema(
    {
        exercise: 
            {
                type: Schema.Types.ObjectId,
                ref: 'Exercise',
            },

        sets: [
            {
                reps: Number,
                weight: Number,
            }
        ],

        notes: {
            type: String,
            max_length: 500,
        }
    }
);

module.exports = exerciseDetailsSchema;