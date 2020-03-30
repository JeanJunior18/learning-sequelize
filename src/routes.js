const express = require('express');
const routes = express.Router();

const User = require('./controller/UserController');
const Adress = require('./controller/AdressController');
const Tech = require('./controller/TechController');



routes.post('/users', User.create);
routes.get('/users', User.index);

routes.get('/users/:user_id/adress', Adress.index)
routes.post('/users/:user_id/adress', Adress.store)

routes.get('/users/:user_id/techs', Tech.index)
routes.post('/users/:user_id/techs', Tech.store)
routes.delete('/users/:user_id/techs', Tech.delete)


module.exports = routes;