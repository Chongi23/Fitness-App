const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat'); We will incorporate at a later date

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            max_lenght: 50,
        }
    }
);

const User = model('user', userSchema);

module.exports = User;