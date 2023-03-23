const { Model, DataTypes } = require("sequelize");
const Connection = require("../database")

class UsuarioModels extends Model {}

UsuarioModels.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field:"id"
      },
      nome:{
        type: DataTypes.STRING(100),
        allowNull: false,
        field:"nome"
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field:"email"
      },
      senha:{
        type: DataTypes.STRING(255),
        allowNull: false,
        field:"senha"
      },
      telefone:{
        type: DataTypes.STRING(30),
        allowNull: true,
        field:"telefone"
      },
      bloqueado:{
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: "N",
        field:"bloqueado"
      }

},
{
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "usuario"
})
    
module.exports = UsuarioModels;