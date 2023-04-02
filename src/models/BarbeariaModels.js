const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class BarbeariaModels extends Model {}

BarbeariaModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    nome_barbearia: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "nome_barbearia",
    },
    endereco_barbearia: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "endereco_barbearia",
    },
    num_barbearia: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "num_barbearia",
    },
    bairro_barbearia: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "bairro_barbearia",
    },
    documento: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "documento",
    },
    telefone_barbearia: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "telefone_barbearia",
    },
    ativo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N",
      field: "ativo",
    },
    cep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "cep",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "barbearia",
  }
);

module.exports = BarbeariaModels;
