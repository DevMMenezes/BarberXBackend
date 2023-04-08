const express = require("express");
const router = express.Router();
const BarbeariaController = require("../controllers/BarbeariaController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/", BarbeariaController.getBarbearias);
router.get("/id/:id", BarbeariaController.getBarbeariasPorID);
router.post("/", BarbeariaController.postBarbearia);

module.exports = router;
