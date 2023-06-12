
const Sequelize = require("sequelize");
const ConfigDB = require("../config/config");

/* Envioments */
const Connection = new Sequelize(ConfigDB.localdevelopment);


module.exports = Connection;


