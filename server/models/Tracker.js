const { Schema, model } = require('mongoose');
const exerciseDetailsSchema = require('./ExerciseDetail');

const trackerSchema = new Schema(
    {
        
        exerciseDetails: [
            exerciseDetailsSchema
        ],

        workoutDate: Date,
    },
    {
        timestamps: true
    }, 
)

const Tracker = model('Tracker', trackerSchema);

module.exports = Tracker;