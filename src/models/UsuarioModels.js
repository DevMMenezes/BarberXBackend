const { Model, DataTypes, NOW } = require("sequelize");
const Connection = require("../database");
const BarbeariaModels = require("../models/BarbeariaModels");
const UsuarioBarbeariaModels = require("../models/UsuarioBarbeariaModels");

class UsuarioModels extends Model {}

UsuarioModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "nome",
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "email",
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "senha",
    },
    telefone: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "telefone",
    },
    bloqueado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N",
      field: "bloqueado",
    },
    funcionario: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N",
      field: "funcionario",
    },
    demo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S",
      field: "demo",
    },
    data_cadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: NOW,
      field: "data_cadastro",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "usuario",
  }
);

UsuarioModels.belongsToMany(BarbeariaModels, {
  through: UsuarioBarbeariaModels,
  foreignKey: "id_usuario",
  as: "usuario_barberias",
});

BarbeariaModels.belongsToMany(UsuarioModels, {
  through: UsuarioBarbeariaModels,
  foreignKey: "id_barbearia",
  as: "barbearia_usuario",
});

module.exports = UsuarioModels;
