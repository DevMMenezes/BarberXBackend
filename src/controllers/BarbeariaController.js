const BarbeariaModels = require("../models/BarbeariaModels");

exports.getBarbearias = async (req, res) => {
  try {
    const Data = await BarbeariaModels.findAll();

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postBarbearia = async (req, res) => {
  try {
    const { nome_barbearia, documento, telefone_barbearia } = req.body;

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
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
