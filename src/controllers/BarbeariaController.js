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
   // await BarbeariaModels.sync({ alter: true });
    const {
      nome_barbearia,
      endereco_barbearia,
      num_barbearia,
      documento,
      bairro_barbearia,
      telefone_barbearia,
      cep
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
      cep
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
