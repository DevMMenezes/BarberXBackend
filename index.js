/* Imports Modules */
const express = require("express");
const cors = require("cors");
const app = express();
const { INTEGER } = require("sequelize");
require("./src/database");

/* Swagger Config */
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

/* Config */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

/* Import Routers */
const UsuarioRouters = require("./src/routers/UsuarioRouters");
const BarbeariaRouters = require("./src/routers/BarbeariaRouters");

/* Use Routers */
//app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use("/usuarios", UsuarioRouters);
app.use("/barbearia", BarbeariaRouters);

/* Config Port */
const PortNode = INTEGER(process.env.NODE_PORT) | 3005;

/* Start */
app.listen(PortNode, () => {
  return console.log(`Listen Server on port: ${PortNode}  - DB Connectado`);
});
