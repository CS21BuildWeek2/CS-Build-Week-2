// Router


// Dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Server
const server = express();

// Middleware
server.use(express.json());
server.use(cors());
server.use(logger);


server.get('/', (req, res) => {
    res.send(`<p>Lets get a coin!</p>`);
});

module.exports = server;