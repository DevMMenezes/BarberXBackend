const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/", UserAuth.VerifyToken, UsuarioController.getUsuarios);
router.get("/:id", UsuarioController.getUsuarioPorID);
router.post("/", UsuarioController.postUsuario);
router.post("/login", UsuarioController.postLogin);
router.put("/", UsuarioController.putUsuario);

module.exports = router;
