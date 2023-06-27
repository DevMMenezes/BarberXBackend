const UsuarioModels = require("../models/UsuarioModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BarbeariaModels = require("../models/BarbeariaModels");

exports.getUsuarios = async (req, res) => {
  try {
    const Data = await UsuarioModels.findAll({
      attributes: {
        exclude: ["senha"],
      },
      include: {
        model: BarbeariaModels,
        as: "usuario_barberias",

        through: {
          attributes: {
            exclude: [
              "id",
              "id_usuario",
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
    return res.status(400).json({ error: error });
  }
};
exports.getUsuarioPorID = async (req, res) => {
  try {
    const { id } = req.params;
    const Data = await UsuarioModels.findByPk(id, {
      // attributes: {
      //   exclude: ["senha"],
      // },
      include: [
        {
          model: BarbeariaModels,
          as: "usuario_barberias",

          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },

        {
          model: BarbeariaModels,
          as: "usuario_barber_favor",
          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },
      ],
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
exports.postVerificaSenha = async (req, res) => {
  try {
    const { id, senhaStore } = req.body;

    if (!(id, senhaStore)) {
      return res.status(400).json({ error: "Usuário ou Senha não informados" });
    }

    const Data = await UsuarioModels.findByPk(id, {
      include: [
        {
          model: BarbeariaModels,
          as: "usuario_barberias",

          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },

        {
          model: BarbeariaModels,
          as: "usuario_barber_favor",
          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },
      ],
    });

    if (senhaStore === Data.senha) {
      return res.status(200).json({ login: true, Data: Data });
    } else {
      return res.status(403).json({ login: false });
    }
  } catch (error) {
    return res.status(400).json({ error: error, error2: error.message });
  }
};
exports.postLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!(email, senha)) {
      return res.status(400).json({ error: "Usuário ou Senha não informados" });
    }

    const Data = await UsuarioModels.findOne({
      where: { email: email },
    });

    if (Data) {
      const PassCompared = await bcrypt.compareSync(senha, Data.senha);

      if (PassCompared) {
        const IDUsuario = Data.id;
        const TokenUser = jwt.sign({ IDUsuario }, process.env.JWTTOKEN, {
          expiresIn: "48h",
        });
        return res
          .status(200)
          .json({ IDUsuario: IDUsuario, TokenUser: TokenUser });
      } else {
        return res.status(403).json({ error: "Credenciais inválidas" });
      }
    } else {
      return res.status(403).json({ error: "Credenciais inválidas" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
exports.postUsuario = async (req, res) => {
  try {
    // await UsuarioModels.sync({ alter: true });
    const { nome, email, senha, telefone, tipo, cidade, estado } = req.body;

    if (!(nome, email, senha, telefone, tipo, cidade, estado)) {
      return res
        .status(400)
        .json({ error: "Dados obrigatórios não informados" });
    }

    const ValidaEmail = await UsuarioModels.findOne({
      where: { email: email },
    });

    if (ValidaEmail) {
      return res.status(302).json({ error: "Usuário já cadastrado" });
    }

    const SenhaBcrypt = await bcrypt.hash(senha, 10);

    const Data = await UsuarioModels.create({
      nome,
      email,
      senha: SenhaBcrypt,
      telefone,
      tipo,
      cidade,
      estado,
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
exports.putUsuario = async (req, res) => {
  try {
    let SenhaBcrypt = "";
    let Data = "";
    const ValidaSenha = undefined || "" || null;

    const { id, nome, email, senha, telefone, tipo, cidade, estado } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Usuário não informados" });
    }

    if (!id) {
      return res.status(400).json({ error: "ID Usuário não informados" });
    }

    const ValidaEmail = await UsuarioModels.findByPk(id, {
      include: [
        {
          model: BarbeariaModels,
          as: "usuario_barberias",

          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },

        {
          model: BarbeariaModels,
          as: "usuario_barber_favor",
          through: {
            attributes: {
              exclude: [
                "id",
                "id_usuario",
                "id_barbearia",
                "createdAt",
                "updatedAt",
              ],
            },
          },
        },
      ],
    });

    if (senha != ValidaSenha) {
      SenhaBcrypt = await bcrypt.hash(senha, 10);
    }

    if (SenhaBcrypt) {
      Data = await UsuarioModels.update(
        {
          nome,
          email,
          senha: SenhaBcrypt,
          telefone,
          tipo,
          cidade,
          estado,
        },
        { where: { id: id } }
      );
    } else {
      Data = await UsuarioModels.update(
        {
          nome,
          email,
          telefone,
          tipo,
          cidade,
          estado,
        },
        { where: { id: id } }
      );
    }

    if (ValidaEmail.dataValues.id > 0) {
      const Data = ValidaEmail;
      return res.status(200).json({ Data: Data });
    } else {
      return res.status(200).json({ Data: "Email não encontrado" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
