const { Router }= require('express');
const db = require('../database');
const { getAllTask, getTask, createTask, deleteTask, updateTask } = require('../controllers/task.controller')


const routes = new Router();

// Add routes

routes.get('/task', getAllTask);


routes.get('/task/:id', getTask);


routes.post('/task', createTask);


routes.delete('/task', deleteTask);


routes.put('/task', updateTask);


module.exports = routes;
