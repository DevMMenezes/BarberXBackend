const express = require("express");
const router = express.Router();
const AgendaController = require("../controllers/AgendaController");
const UserAuth = require("../middlewares/UserAuth");

router.get("/:id_barbearia", AgendaController.getAgenda);
router.get("/user/:id_usuario", AgendaController.getAgendaPorCliente);
router.get(
  "/:id_barbearia/:id_usuario/:data_agendamento",
  AgendaController.getAgendaPorUsuario
);
router.post("/", AgendaController.postAgenda);
router.post("/vincula", AgendaController.postAgendaProcedimentos);

module.exports = router;
