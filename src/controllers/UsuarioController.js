const UsuarioModels = require("../models/UsuarioModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.getUsuarios = async (req, res) => {
  /*#swagger.tags = ['Usuarios']
  #swagger.summary = 'Buscar todos os usuários'
  #swagger.security = [{
    "bearerAuth": []}]*/
  try {
    const Data = await UsuarioModels.findAll();

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
exports.getUsuarioPorID = async (req, res) => {
  /*    #swagger.tags = ['Usuarios']
        #swagger.path = '/usuarios/{id}'
        #swagger.summary = 'Buscar usuários por ID'
        #swagger.parameters['id'] = {
            in: 'path',
            type: 'integer',
            description: 'ID Usuário' } */
  try {
    const { id } = req.params;

    const Data = await UsuarioModels.findByPk(id);

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
exports.postLogin = async (req, res) => {
  //#swagger.tags = ['Usuarios']
  //#swagger.summary = 'Criar um Usuário'
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
  //#swagger.tags = ['Usuarios']
  //#swagger.summary = 'Criar um novo usuário'
  try {
    const { nome, email, senha, telefone } = req.body;

    if (!(nome, email, senha, telefone)) {
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
    });

    return res.status(200).json({ Data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
exports.putUsuario = async (req, res) => {
  //#swagger.tags = ['Usuarios']
  //#swagger.summary = 'Alterar um usuário'
  try {
    let SenhaBcrypt = "";
    let Data = "";
    const ValidaSenha = undefined || "" || null;

    const { nome, email, senha, telefone } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Usuário não informados" });
    }

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
        },
        { where: { email: email } }
      );
    } else {
      Data = await UsuarioModels.update(
        {
          nome,
          email,
          telefone,
        },
        { where: { email: email } }
      );
    }
    return res.status(200).json({ Data: "Alterado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};