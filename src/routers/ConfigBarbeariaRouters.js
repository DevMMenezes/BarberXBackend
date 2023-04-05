const express = require("express");
const router = express.Router();
const ConfigBarbeariaController = require("../controllers/ConfigBarbeariaController");
const UserAuth = require("../middlewares/UserAuth");

router.get(
  "/:id_barbearia",
  ConfigBarbeariaController.getConfigBarbeariaModels
);
router.post("/", ConfigBarbeariaController.postConfigBarbeariaModels);
router.put("/", ConfigBarbeariaController.putConfigBarbeariaModels);

module.exports = router;
