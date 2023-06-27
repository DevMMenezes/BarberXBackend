const SecaoModels = require("../models/SecaoModels");

exports.postSecao = async (req, res) => {
  try {
    const { nome_secao, id_barbearia } = req.body;

    if ((!nome_secao, !id_barbearia)) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await SecaoModels.create({
      nome_secao,
      id_barbearia,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
