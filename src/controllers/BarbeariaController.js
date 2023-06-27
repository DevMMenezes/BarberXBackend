const { where } = require("sequelize");
const BarbeariaModels = require("../models/BarbeariaModels");
const SecaoModels = require("../models/SecaoModels");
const ProcedimentosModels = require("../models/ProcedimentosModels");
const UsuarioBarbeariaFavoritaModels = require("../models/UsuarioBarbeariaFavoritaModels");
const ConfigBarbeariaModels = require("../models/ConfigBarbeariaModels");
const {
  ValidarHorario,
  SomarHoras,
  SubtrairHoras,
} = require("../utils/ValidarHorario");

exports.getBarbearias = async (req, res) => {
  const { id_usuario, cidade } = req.params;

  if (!id_usuario) {
    return res.status(400).json({ error: "ID do usuário não encontrado" });
  }
  if (!cidade) {
    return res.status(400).json({ error: "ID da cidade não encontrado" });
  }

  try {
    const DataFavor = await UsuarioBarbeariaFavoritaModels.findAll({
      where: { id_usuario: id_usuario },
    });

    // await BarbeariaModels.sync({ alter: true });
    const Data = await BarbeariaModels.findAll({ where: { cidade: cidade } });

    for (x in Data) {
      for (y in DataFavor) {
        if (Data[x].id === DataFavor[y].id_barbearia) {
          Data[x].dataValues["favorito"] = DataFavor[y].favorito;
        }
      }
    }

    return res.status(200).json({ Data: Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.getBarbeariasPorID = async (req, res) => {
  try {
    const { id } = req.params;

    // await ProcedimentosModels.sync({ alter: true });
    const DataProcedimentos = await SecaoModels.findAll({
      include: [
        {
          model: ProcedimentosModels,
        },
      ],
      where: { id_barbearia: id },
    });

    const DataConfigBarbearia = await ConfigBarbeariaModels.findOne({
      where: { id_barbearia: id },
    });

    const Data = await BarbeariaModels.findByPk(id);

    return res.status(200).json({
      Data,
      DataProcedimentos,
      DataConfigBarbearia,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.postBarbearia = async (req, res) => {
  try {
    // await BarbeariaModels.sync({ alter: true });
    const {
      nome_barbearia,
      endereco_barbearia,
      num_barbearia,
      documento,
      bairro_barbearia,
      telefone_barbearia,
      cep,
    } = req.body;

    if (
      (nome_barbearia, documento, telefone_barbearia) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await BarbeariaModels.create({
      nome_barbearia,
      documento,
      telefone_barbearia,
      endereco_barbearia,
      num_barbearia,
      bairro_barbearia,
      cep,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
