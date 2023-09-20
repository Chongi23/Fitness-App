const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat'); We will incorporate at a later date
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            max_length: 50,
        },

        firstName:{
            type: String,
            require: true,
            max_length: 20,
        },

        lastName:{
            type:String,
            require:true ,
            max_length :20
        },
        
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },

        password: {
            type: String,
            require: true,
            minlength: 5,
        }

    }
);
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);

module.exports = User;