const { Schema, model } = require('mongoose');
const exerciseDetailsSchema = require('./ExerciseDetails');
c

const trackerSchema = new Schema(
    {
        workoutDate: Date,

        workoutDetails: [
            exerciseDetailsSchema
        ],
    },
    {
        timestamps: true
    }, 
)

const Tracker = model('Tracker', trackerSchema);

module.exports = Tracker;