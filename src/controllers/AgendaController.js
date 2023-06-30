const AgendaModels = require("../models/AgendaModels");
const ConfigBarbeariaModels = require("../models/ConfigBarbeariaModels");
const AgendaProcedimentosModels = require("../models/AgendaProcedimentosModels");
const UsuarioBarbeariaModels = require("../models/UsuarioBarbeariaModels");

const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
const Connection = require("../database/index");
const {
  ValidarHorario,
  SomarHoras,
  SubtrairHoras,
} = require("../utils/ValidarHorario");

exports.getAgendaPorUsuario = async (req, res) => {
  try {
    const { id_barbearia, id_usuario, data_agendamento } = req.params;

    // await AgendaModels.sync({ alter: true });
    const Data = await AgendaModels.findAll({
      where: {
        [Op.and]: [
          { id_barbearia: id_barbearia },
          { id_usuario: id_usuario },
          { data_agendamento: data_agendamento },
        ],
      },
    });

    let AgendaHorariosArray = [];
    for (x in Data) {
      AgendaHorariosArray.push(Data[x].hora_agendada);
    }

    const DataConfigBarbearia = await ConfigBarbeariaModels.findOne({
      where: { id_barbearia: id_barbearia },
    });

    let GridHorariosManha = DataConfigBarbearia.horario_abertura;
    let GridHorariosArray = [];

    GridHorariosArray.push({
      horario: DataConfigBarbearia.horario_abertura,
      status: "Livre",
    });
    while (GridHorariosManha < DataConfigBarbearia.horario_pausa_ini) {
      GridHorariosManha = SomarHoras(
        GridHorariosManha,
        DataConfigBarbearia.tempo_montagem_grid
      );
      GridHorariosArray.push({ horario: GridHorariosManha, status: "Livre" });
    }

    let = GridHorariosTarde = DataConfigBarbearia.horario_pausa_fin;

    GridHorariosArray.push({
      horario: DataConfigBarbearia.horario_pausa_fin,
      status: "Livre",
    });

    while (GridHorariosTarde < DataConfigBarbearia.horario_fechamento) {
      GridHorariosTarde = SomarHoras(
        GridHorariosTarde,
        DataConfigBarbearia.tempo_montagem_grid
      );
      GridHorariosArray.push({ horario: GridHorariosTarde, status: "Livre" });
    }

    for (x in GridHorariosArray) {
      if (AgendaHorariosArray.includes(GridHorariosArray[x].horario)) {
        GridHorariosArray[x].status = "Ocupado";
      }
    }

    return res
      .status(200)
      .json({ Data, GridHorariosArray, AgendaHorariosArray });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getAgenda = async (req, res) => {
  try {
    const { id_barbearia } = req.params;

    // await AgendaModels.sync({ alter: true });
    const Data = await AgendaModels.findAll({
      where: { id_barbearia: id_barbearia },
    });

    let AgendaHorariosArray = [];
    for (x in Data) {
      AgendaHorariosArray.push(Data[x].hora_agendada);
    }

    const DataBarberVinculados = await UsuarioBarbeariaModels.findAll({
      where: {},
    });

    const DataConfigBarbearia = await ConfigBarbeariaModels.findOne({
      where: { id_barbearia: id_barbearia },
    });

    let GridHorariosManha = DataConfigBarbearia.horario_abertura;
    let GridHorariosArray = [];

    GridHorariosArray.push({
      horario: DataConfigBarbearia.horario_abertura,
      status: "Livre",
    });
    while (GridHorariosManha < DataConfigBarbearia.horario_pausa_ini) {
      GridHorariosManha = SomarHoras(
        GridHorariosManha,
        DataConfigBarbearia.tempo_montagem_grid
      );
      GridHorariosArray.push({ horario: GridHorariosManha, status: "Livre" });
    }

    let = GridHorariosTarde = DataConfigBarbearia.horario_pausa_fin;

    GridHorariosArray.push({
      horario: DataConfigBarbearia.horario_pausa_fin,
      status: "Livre",
    });

    while (GridHorariosTarde < DataConfigBarbearia.horario_fechamento) {
      GridHorariosTarde = SomarHoras(
        GridHorariosTarde,
        DataConfigBarbearia.tempo_montagem_grid
      );
      GridHorariosArray.push({ horario: GridHorariosTarde, status: "Livre" });
    }

    for (x in GridHorariosArray) {
      if (AgendaHorariosArray.includes(GridHorariosArray[x].horario)) {
        GridHorariosArray[x].status = "Ocupado";
      }
    }

    return res
      .status(200)
      .json({ Data, GridHorariosArray, AgendaHorariosArray });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postAgenda = async (req, res) => {
  try {
    const {
      id_barbearia,
      data_agendamento,
      hora_agendada,
      nome_cliente,
      telefone_cliente,
      id_usuario,
    } = req.body;

    if (
      (id_barbearia,
      data_agendamento,
      hora_agendada,
      nome_cliente,
      telefone_cliente,
      id_usuario) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await AgendaModels.create({
      id_barbearia,
      data_agendamento,
      hora_agendada,
      nome_cliente,
      telefone_cliente,
      id_usuario,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.postAgendaProcedimentos = async (req, res) => {
  try {
    const { id_procedimento, id_agenda } = req.body;

    if ((id_procedimento, id_agenda) == null || undefined || "") {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await AgendaProcedimentosModels.create({
      id_procedimento,
      id_agenda,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
