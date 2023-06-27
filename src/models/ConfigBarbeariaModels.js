const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class ConfigBarbeariaModels extends Model {}

ConfigBarbeariaModels.init(
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
    horario_abertura: {
      type: DataTypes.TIME,
      allowNull: true,
      field: "horario_abertura",
    },
    horario_fechamento: {
      type: DataTypes.TIME,
      allowNull: true,
      field: "horario_fechamento",
    },
    horario_pausa_ini: {
      type: DataTypes.TIME,
      allowNull: true,
      field: "horario_pausa_ini",
    },
    horario_pausa_fin: {
      type: DataTypes.TIME,
      allowNull: true,
      field: "horario_pausa_fin",
    },
    tolerancia: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "tolerancia",
    },
    tempo_montagem_grid: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "tempo_montagem_grid",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "config_barbearia",
  }
);

module.exports = ConfigBarbeariaModels;
