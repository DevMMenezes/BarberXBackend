require("dotenv").config();

module.exports = {
  localdevelopment: {
    dialect: "mysql",
    host: "localhost",
    username: "dev",
    password: "navapp!@#",
    database: "navapp",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
  development: {
    dialect: "mysql",
    host: "200.98.200.58",
    username: "dev",
    password: "navapp!@#",
    database: "navapp",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
  // production: {
  //   dialect: "mysql",
  //   host: process.env.MYSQL_HOST,
  //   username: process.env.MYSQL_USER,
  //   password: process.env.MYSQL_PASSWORD,
  //   database: process.env.MYSQL_DATABASE,
  //   define: {
  //     timestamp: true,
  //     underscored: true,
  //   },
  // },
  production: {
    dialect: "mysql",
    host: "localhost",
    username: "dev",
    password: "navapp!@#",
    database: "navapp",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
