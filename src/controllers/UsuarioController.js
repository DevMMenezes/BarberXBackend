const UsuarioModels = require("../models/UsuarioModels")


exports.getUsuarios = async (req,res)=>{
    //#swagger.tags = ['Usuarios']
    //#swagger.summary = 'Buscar todos os usuários'
    try {        
        const Data = await UsuarioModels.findAll();

         res.status(200).json({Data})
    } catch (error) {
     return res.status(400).json({error: error})  
    }
}

exports.postUsuario = async (req, res)=>{
    //#swagger.tags = ['Usuarios']
    //#swagger.summary = 'Criar um novo usuário'
    try {      
        const {nome, email, senha, telefone} = req.body;

        const Data = await UsuarioModels.create(
            {nome, email, senha, telefone  }
        );

        res.status(200).json({Data})
    } catch (error) {
     return res.status(400).json({error: error})  
    }
}


exports.putUsuario = async (req, res)=>{
    //#swagger.tags = ['Usuarios']
    //#swagger.summary = 'Alterar um usuário'
    try {      
        const {nome, email, senha, telefone} = req.body;

        const Data = await UsuarioModels.update(
            {nome, email, senha, telefone  },
            {where: {email : email}}
        );

        res.status(200).json({Data})
    } catch (error) {
     return res.status(400).json({error: error})  
    }
}


