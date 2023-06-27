/* Imports Modules */
const express = require("express");
const cors = require("cors");
const app = express();
const { INTEGER } = require("sequelize");
require("./src/database");

/* Swagger Config */
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const JSONInsomnia = require("./Insomnia.json");

/* Config */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

/* Import Routers */
const UsuarioRouters = require("./src/routers/UsuarioRouters");
const BarbeariaRouters = require("./src/routers/BarbeariaRouters");
const ConfigBarbeariaRouters = require("./src/routers/ConfigBarbeariaRouters");
const AgendaRouters = require("./src/routers/AgendaRouters");
const ProcedimentoRouters = require("./src/routers/ProcedimentoRouters");
const uploadIMGRouters = require("./src/routers/uploadIMGRouters");
const SecaoRouters = require("./src/routers/SecaoRouters");

/* Use Routers */
//app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use("/docs", (req, res) => {
  return res.send(JSONInsomnia);
});
app.use("/usuarios", UsuarioRouters);
app.use("/barbearia", BarbeariaRouters);
app.use("/config", ConfigBarbeariaRouters);
app.use("/agenda", AgendaRouters);
app.use("/procedimento", ProcedimentoRouters);
app.use("/img", uploadIMGRouters);
app.use("/imgperfil", express.static("public/usuarios"));
app.use("/imgperfilbarber", express.static("public/barbearias"));
app.use("/secao", SecaoRouters);

/* Config Port */
const PortNode = INTEGER(process.env.NODE_PORT) | 3005;

/* Start */
app.listen(PortNode, () => {
  return console.log(`Listen Server on port: ${PortNode}  - DB Connectado`);
});
