const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'Sam@0709',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;