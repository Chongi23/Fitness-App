const jwt = require('jsonwebtoken');

//we WILL CHANGE THIS, need to research  a bit
const secret = 'mysecretsshhhhhhh';
const expiration = '2h';

module.exports = {
    signToken: function ({ email, firstName, lastName, _id }) {
        const payload = { email, firstName, lastName, _id};
        return jwt.sign({ data: payload }, secret, { expiresIn :expiration });
    },
};