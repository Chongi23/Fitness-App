const {scheme, model} = require('mongoose');


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

const Exercise = model('Exercise', exerciseSchema);
module.exports = Exercise;