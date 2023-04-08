const ProcedimentosBarbeariaModels = require("../models/ProcedimentosBarbeariaModels");
const ProcedimentosModels = require("../models/ProcedimentosModels");

exports.postProcedimentoBarbearia = async (req, res) => {
  try {
    const { id_procedimento, id_barbearia } = req.body;

    if ((id_procedimento, id_barbearia) == null || undefined || "") {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await ProcedimentosBarbeariaModels.create({
      id_procedimento,
      id_barbearia,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postProcedimento = async (req, res) => {
  try {
    const { nome_procedimentos, preco_procedimento, tempo_procedimento } =
      req.body;

    if (
      (nome_procedimentos, preco_procedimento, tempo_procedimento) == null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Data = await ProcedimentosModels.create({
      nome_procedimentos,
      preco_procedimento,
      tempo_procedimento,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
