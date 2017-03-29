const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const port = 3000;


server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => console.log(`Server is running in port ${port}`));

module.exports = server;