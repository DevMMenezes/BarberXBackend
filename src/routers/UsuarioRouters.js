const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController")

router.get("/", UsuarioController.getUsuarios)
router.get("/test", UsuarioController.getUsuarios)

module.exports = router;
