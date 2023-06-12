const UsuarioBarbeariaFavoritaModels = require("../models/UsuarioBarbeariaFavoritaModels");

// exports.getUsuarioBarbearias = async (req, res) => {
//   try {
//     const Data = await UsuarioBarbeariaModels.findAll();

//     return res.status(200).json({ Data });
//   } catch (error) {
//     return res.status(400).json({ error: error.message, error: error });
//   }
// };

exports.postUsuarioBarbeariaFavor = async (req, res) => {
  try {
    const { id_usuario, id_barbearia, favorito } = req.body;

    let Data;

    if ((id_usuario, id_barbearia, favorito) == null || undefined || "") {
      return res
        .status(400)
        .json({ error: "Dados necessários não informados" });
    }

    const Validar = await UsuarioBarbeariaFavoritaModels.findOrCreate({
      where: { id_usuario: id_usuario, id_barbearia: id_barbearia },
      defaults: {
        id_usuario,
        id_barbearia,
        favorito,
      },
    });

    if (Validar) {
      Data = await UsuarioBarbeariaFavoritaModels.update(
        {
          id_usuario,
          id_barbearia,
          favorito,
        },
        { where: { id_usuario: id_usuario, id_barbearia: id_barbearia } }
      );
    }

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error.message, error: error });
  }
};
