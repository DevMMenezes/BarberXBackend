const { Model, DataTypes, NOW } = require("sequelize");
const Connection = require("../database");
const BarbeariaModels = require("../models/BarbeariaModels");
const UsuarioBarbeariaModels = require("../models/UsuarioBarbeariaModels");
const UsuarioBarberiaFavorModels = require("../models/UsuarioBarbeariaFavoritaModels");

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
      unique: true,
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
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "tipo",
    },
    cidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "cidade",
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "estado",
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
    img_perfil: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "img_perfil",
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

UsuarioModels.belongsToMany(BarbeariaModels, {
  through: UsuarioBarberiaFavorModels,
  foreignKey: "id_usuario",
  as: "usuario_barber_favor",
});

BarbeariaModels.belongsToMany(UsuarioModels, {
  through: UsuarioBarberiaFavorModels,
  foreignKey: "id_barbearia",
  as: "barber_usuario_favor",
});



module.exports = UsuarioModels;
