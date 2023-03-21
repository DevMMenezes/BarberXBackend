require("dotenv").config();

module.exports = {
  development: {
    dialect: 'mysql',
    host: "localhost",
    username: "root",
    password: "masterkey",
    database: "navapp",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
  production: {
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
