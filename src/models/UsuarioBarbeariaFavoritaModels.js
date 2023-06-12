const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class UsuarioBarbeariaFavoritaModels extends Model {}

UsuarioBarbeariaFavoritaModels.init(
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
    favorito: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N",
      field: "favorito",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "usuario_barber_favor",
  }
);

module.exports = UsuarioBarbeariaFavoritaModels;
