const express = require("express");
const router = express.Router();
const BarbeariaController = require("../controllers/BarbeariaController");
const UsusarioBarbeariaFavorController = require("../controllers/UsuarioBarbeariaFavorController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/id_usuario/:id_usuario", BarbeariaController.getBarbearias);
router.get("/id/:id", BarbeariaController.getBarbeariasPorID);
router.post("/", BarbeariaController.postBarbearia);
router.post(
  "/vinculafavorito",
  UsusarioBarbeariaFavorController.postUsuarioBarbeariaFavor
);

module.exports = router;
