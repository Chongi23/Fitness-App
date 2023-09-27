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

        // Do we NEED to use this since workout BELONGS to THAT user already? KLG 09/27
       // user: {
       //     type: Schema.Types.ObjectId,
       //     ref: 'User',
       //     require: true,
       // },

        exercises: [
            {
              //delete exercise : {} <--- look at 22/activity 23 for reference - KLG 09/27
                   type: Schema.Types.ObjectId,
                    ref: 'Exercise',
                    require: true,
                 //deleted sets reps 
            }
        ]
    });

const Workout = model('Workout', workoutSchema);

module.exports = Workout;