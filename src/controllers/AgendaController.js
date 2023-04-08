const AgendaModels = require("../models/AgendaModels");
const ConfigBarbeariaModels = require("../models/ConfigBarbeariaModels");
const AgendaProcedimentosModels = require("../models/AgendaProcedimentosModels");
const { QueryTypes } = require("sequelize");
const Connection = require("../database/index");
const {
  ValidarHorario,
  SomarHoras,
  SubtrairHoras,
} = require("../utils/ValidarHorario");

exports.getAgenda = async (req, res) => {
  try {
    const { id_barbearia } = req.params;

    const Data = await AgendaModels.findAll({
      where: { id_barbearia: id_barbearia },
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postAgenda = async (req, res) => {
  try {
    const {
      id_barbearia,
      data_agendamento,
      hora_ini,
      total_horas,
      nome_cliente,
      telefone_cliente,
    } = req.body;

    if (
      (id_barbearia,
      data_agendamento,
      hora_ini,
      total_horas,
      nome_cliente,
      telefone_cliente) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    /* Verifico as configurações da barbearia */

    const ConfigBarbearia = await ConfigBarbeariaModels.findOne({
      where: { id_barbearia: id_barbearia },
    });

    /* Calculo a tolerancia no agendamento*/

    const hora_fechamento_tolerancia = await SomarHoras(
      ConfigBarbearia.dataValues.tolerancia,
      ConfigBarbearia.dataValues.horario_fechamento
    );

    const horario_pausa_ini_tolerancia = await SomarHoras(
      ConfigBarbearia.dataValues.horario_pausa_ini,
      ConfigBarbearia.dataValues.tolerancia
    );
    const horario_pausa_fin_tolerancia = await SomarHoras(
      ConfigBarbearia.dataValues.horario_pausa_fin,
      ConfigBarbearia.dataValues.tolerancia
    );

    /* Somo as horas informadas dos procedimentos*/
    const hora_fin = await SomarHoras(hora_ini, total_horas);

    /* Validações para verificar se a barbearia está aberta*/
    if (
      hora_ini < ConfigBarbearia.dataValues.horario_abertura ||
      hora_ini > hora_fechamento_tolerancia
    ) {
      return res.status(200).json({ Data: "Barbearia está fechada!" });
    }
    if (
      hora_ini >= horario_pausa_ini_tolerancia &&
      hora_ini <= horario_pausa_fin_tolerancia
    ) {
      return res.status(200).json({ Data: "Barbearia está fechada!" });
    }
    if (
      hora_fin > horario_pausa_ini_tolerancia &&
      hora_fin < horario_pausa_fin_tolerancia
    ) {
      return res.status(200).json({ Data: "Barbearia está fechada!" });
    }

    /* Verifico se existe agendamento naquele período informado*/
    const VerificaAgenda = await Connection.query(
      "select * from agenda where data_agendamento = :data_agendamento",
      {
        replacements: {
          data_agendamento: data_agendamento,
        },
        type: QueryTypes.SELECT,
      }
    );

    let bHoraIniOcupada = false;
    let bHorafinOcupada = false;

    for (x in VerificaAgenda) {
      if (VerificaAgenda[x].hora_ini === hora_ini) {
        bHoraIniOcupada = true;
      }
      if (VerificaAgenda[x].hora_fin === hora_fin || VerificaAgenda[x].hora_fin > hora_ini) {
        bHorafinOcupada = true;
      }
    }

    /* Valido se está ocupado antes de iniciar o agendamento*/

    if (!bHoraIniOcupada && !bHorafinOcupada) {
      let Data = await AgendaModels.create({
        id_barbearia,
        data_agendamento,
        total_horas,
        hora_ini,
        hora_fin,
        nome_cliente,
        telefone_cliente,
      });

      return res.status(200).json({
        Data: Data,
      });
    }
    return res.status(200).json({
      Data: "Horário indisponível",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
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
