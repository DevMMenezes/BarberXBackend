const { where } = require("sequelize");
const BarbeariaModels = require("../models/BarbeariaModels");
const ProcedimentosModels = require("../models/ProcedimentosModels");
const UsuarioBarbeariaFavoritaModels = require("../models/UsuarioBarbeariaFavoritaModels");

exports.getBarbearias = async (req, res) => {
  const { id_usuario } = req.params;

  if (!id_usuario) {
    return res.status(400).json({ error: "ID do usuário não encontrado" });
  }

  try {
    const DataFavor = await UsuarioBarbeariaFavoritaModels.findAll({
      where: { id_usuario: id_usuario },
    });

    const Data = await BarbeariaModels.findAll();
    console.log(typeof Data);

    for (x in Data) {
      for (y in DataFavor) {
        if (Data[x].id === DataFavor[y].id) {
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

    const Data = await BarbeariaModels.findByPk(id, {
      include: {
        model: ProcedimentosModels,
        as: "barbearia_procedimentos",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        through: {
          attributes: {
            exclude: [
              "id",
              "id_procedimento",
              "id_barbearia",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      },
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
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
