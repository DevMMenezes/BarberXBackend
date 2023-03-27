/* Imports Modules */
const express = require("express");
const cors = require("cors");
const app = express();
const { INTEGER } = require("sequelize");
const https = require("https")
const fs = require("fs")
require("./src/database");

/* Swagger Config */
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

/* Config */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))

/* Config Cors
app.use((req, res, next)=>{
  res.setHeader("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
*/

/* Import Routers */
const UsuarioRouters = require('./src/routers/UsuarioRouters');

/* Use Routers */
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use("/usuarios", UsuarioRouters);

/* Config Port */
const PortNode = INTEGER(process.env.NODE_PORT) | 3005;

/* Start */
app.listen(PortNode, "", () => {
  return console.log(
      `Listen Server on port: ${PortNode}  - DB Connectado`
  );
});