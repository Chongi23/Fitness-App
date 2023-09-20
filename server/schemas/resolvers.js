const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken, authMiddleware}  = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        profile: async (parent, { userId }) => {
            return User.findOne({_id: userId });
        },
    },

    Mutation: {
        addUser: async (parent, {username,}) => {
            const user = await User.create({ username});
            //const token = signToken(user);
            //DON'T FORGET to add TOKEN here below
            return { user };
        },
        login: async (parent, { username }) => {
            const user = await User.findOne({ email });
        }

    }
}