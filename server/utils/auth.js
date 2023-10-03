const jwt = require('jsonwebtoken');

//we WILL CHANGE THIS, need to research  a bit
const secret = 'mysecretsshhhhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    
    signToken: function ({ email, firstName, lastName, _id }) {
        const payload = { email, firstName, lastName, _id};
        return jwt.sign({ data: payload }, secret, { expiresIn :expiration });
    },
};