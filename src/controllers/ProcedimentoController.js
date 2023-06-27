const ProcedimentosBarbeariaModels = require("../models/ProcedimentosBarbeariaModels");
const ProcedimentosModels = require("../models/ProcedimentosModels");

exports.postProcedimentoBarbearia = async (req, res) => {
  try {
    const { id_procedimento, id_barbearia, id_secao } = req.body;

    if ((id_procedimento, id_barbearia, id_secao) == null || undefined || "") {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    // await ProcedimentosBarbeariaModels.sync({ alter: true });
    const Data = await ProcedimentosBarbeariaModels.create({
      id_procedimento,
      id_barbearia,
      id_secao,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};

exports.postProcedimento = async (req, res) => {
  try {
    const {
      id_secao,
      id_barbearia,
      nome_procedimentos,
      preco_procedimento,
      tempo_procedimento,
    } = req.body;

    if (
      (id_secao,id_barbearia, nome_procedimentos, preco_procedimento, tempo_procedimento) ==
        null ||
      undefined ||
      ""
    ) {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }
    // await ProcedimentosModels.sync({ alter: true });

    const Data = await ProcedimentosModels.create({
      nome_procedimentos,
      preco_procedimento,
      tempo_procedimento,
      id_secao,
      id_barbearia
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
