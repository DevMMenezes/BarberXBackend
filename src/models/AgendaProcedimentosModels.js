const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class AgendaProcedimentosModels extends Model {}

AgendaProcedimentosModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    id_procedimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_procedimento",
    },
    id_agenda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_agenda",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "agenda_procedimentos",
  }
);

module.exports = AgendaProcedimentosModels;
