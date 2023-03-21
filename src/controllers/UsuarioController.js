const UsuarioModels = require("../models/UsuarioModels")


exports.getUsuarios = async (req,res)=>{
    //#swagger.tags = ['Usuarios']
    //#swagger.summary = 'Buscar todos os usuários'
    try {        
        const Data = await UsuarioModels.findAll();

        return res.status(200).json({Data})
    } catch (error) {
     return res.status(400).json({error: error})  
    }
}