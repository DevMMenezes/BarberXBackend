const express = require("express");
const router = express.Router();
const SecaoController = require("../controllers/SecaoController");
const UserAuth = require("../middlewares/UserAuth");

router.post("/", SecaoController.postSecao);

module.exports = router;
