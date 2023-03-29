const express = require("express");
const router = express.Router();
const BarbeariaController = require("../controllers/BarbeariaController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/", BarbeariaController.getBarbearias);
router.post("/", BarbeariaController.postBarbearia);

module.exports = router;
