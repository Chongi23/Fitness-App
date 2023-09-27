const {Schema, model} = require('mongoose');


const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    sets: {
      type: Number,
      required: true,
      max_length: 50,
    },
    reps: {
      type: Number,
      required: true,
      max_length: 50,
    },
    weight: {
      type: Number,
      required: true,
      max_length: 50,
    },
    notes: {
      type: String,
      required: true,
      max_length: 50,
    },
      
    },


);

//does adding mongoose.model here help or break, or should it just stay model('Exercise', exercise schema)?
const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;