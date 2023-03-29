const UsuarioBarbeariaModels = require("../models/UsuarioBarbeariaModels");

exports.getUsuarioBarbearias = async (req, res) => {
  try {
    const Data = await UsuarioBarbeariaModels.findAll();

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postUsuarioBarbearia = async (req, res) => {
  try {
    const { id_usuario, id_barbearia } = req.body;

    if ((id_usuario, id_barbearia) == null || undefined || "") {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await UsuarioBarbeariaModels.create({
      id_usuario,
      id_barbearia,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
