const ConfigBarbeariaModels = require("../models/ConfigBarbeariaModels");

exports.getConfigBarbeariaModels = async (req, res) => {
  try {
    const { id_barbearia } = req.params;
    const Data = await ConfigBarbeariaModels.findOne({
      where: { id_barbearia: id_barbearia },
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postConfigBarbeariaModels = async (req, res) => {
  try {
    // await ConfigBarbeariaModels.sync({ alter: true });
    const {
      id_barbearia,
      horario_abertura,
      horario_fechamento,
      horario_pausa_ini,
      horario_pausa_fin,
      tolerancia,
      tempo_montagem_grid,
    } = req.body;

    if (
      !(id_barbearia,
      horario_abertura,
      horario_fechamento,
      horario_pausa_ini,
      horario_pausa_fin,
      tolerancia,
      tempo_montagem_grid) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await ConfigBarbeariaModels.create({
      id_barbearia,
      horario_abertura,
      horario_fechamento,
      horario_pausa_ini,
      horario_pausa_fin,
      tolerancia,
      tempo_montagem_grid,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.putConfigBarbeariaModels = async (req, res) => {
  try {
    // await ConfigBarbeariaModels.sync({ alter: true });
    const {
      id_barbearia,
      horario_abertura,
      horario_fechamento,
      horario_pausa_ini,
      horario_pausa_fin,
      tolerancia,
      tempo_montagem_grid,
    } = req.body;

    if (
      !(id_barbearia,
      horario_abertura,
      horario_fechamento,
      horario_pausa_ini,
      horario_pausa_fin,
      tolerancia,
      tempo_montagem_grid) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await ConfigBarbeariaModels.update(
      {
        id_barbearia,
        horario_abertura,
        horario_fechamento,
        horario_pausa_ini,
        horario_pausa_fin,
        tolerancia,
        tempo_montagem_grid,
      },
      { where: { id_barbearia: id_barbearia } }
    );

    return res.status(200).json({ Data: "Config alterada com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
