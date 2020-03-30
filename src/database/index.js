const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Adress = require('../models/Adress');
const Tech = require('../models/Tech');

const database = new Sequelize(dbConfig);

User.init(database);
Adress.init(database);
Tech.init(database);

Adress.associate(database.models);
User.associate(database.models);
Tech.associate(database.models);

module.exports = database;