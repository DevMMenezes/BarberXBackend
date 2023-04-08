const express = require("express");
const router = express.Router();
const ProcedimentoController = require("../controllers/ProcedimentoController");
const UserAuth = require("../middlewares/UserAuth");

router.post("/", ProcedimentoController.postProcedimento);
router.post("/vincula", ProcedimentoController.postProcedimentoBarbearia);

module.exports = router;
