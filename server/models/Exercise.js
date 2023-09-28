const {Schema, model} = require('mongoose');


const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 100,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    notes: {
      type: String,
      max_length: 500,
    },
      
    },


);

//does adding mongoose.model here help or break, or should it just stay model('Exercise', exercise schema)?
const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;