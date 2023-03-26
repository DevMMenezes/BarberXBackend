const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController")

router.get("/", UsuarioController.getUsuarios)
router.post("/", UsuarioController.postUsuario)
router.put("/", UsuarioController.putUsuario)

module.exports = router;
