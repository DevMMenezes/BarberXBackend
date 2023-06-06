const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const UsuarioBarbeariaController = require("../controllers/UsuarioBarbeariaController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/", UsuarioController.getUsuarios);
router.get("/id/:id", UsuarioController.getUsuarioPorID);
router.post("/", UsuarioController.postUsuario);
router.post("/login", UsuarioController.postLogin);
router.put("/", UsuarioController.putUsuario);

/* Rotas de vinculação de Usuário / Barbearia */
router.get("/barbearias", UsuarioBarbeariaController.getUsuarioBarbearias);
router.post("/vincula", UsuarioBarbeariaController.postUsuarioBarbearia);

module.exports = router;
