const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class UsuarioBarbeariaModels extends Model {}

UsuarioBarbeariaModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_usuario",
    },
    id_barbearia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_barbearia",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "usuario_barbearia",
  }
);


module.exports = UsuarioBarbeariaModels;
