
const Sequelize = require("sequelize");
const ConfigDB = require("../config/config");

/* Envioments */
const Connection = new Sequelize(ConfigDB.development);


module.exports = Connection;


