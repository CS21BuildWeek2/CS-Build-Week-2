require('dotenv');

const axios = require('axios');

const authorization = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.replace('Token', '');
    if (!authorization) return res.status(400).json({
        status: 'error',
        error: 'No Authorization',
        message: 'Provide token'
    });

    req.token = token;
}

module.exports = authorization;