const express = require('express');

module.exports = function(server){

    //API Routes
    const routes = express.Router();
    server.use('/api' , routes);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(routes , '/todos');
}