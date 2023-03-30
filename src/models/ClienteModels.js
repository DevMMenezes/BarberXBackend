const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class ClienteModels extends Model {}

ClienteModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "nome",
    },
    telefone: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "telefone",
    },
    data_ult_corte: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "data_ult_corte",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "cliente",
  }
);

module.exports = ClienteModels;
