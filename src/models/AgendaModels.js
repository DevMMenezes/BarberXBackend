const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class AgendaModels extends Model {}

AgendaModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    id_barbearia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_barbearia",
    },
    data_agendamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "data_agendamento",
    },
    total_horas: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "total_horas",
    },
    hora_ini: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "hora_ini",
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "hora_fin",
    },
    nome_cliente: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "nome",
    },
    telefone_cliente: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "telefone",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "agenda",
  }
);

module.exports = AgendaModels;