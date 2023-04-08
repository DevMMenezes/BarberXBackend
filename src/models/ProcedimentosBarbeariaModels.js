const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class ProcedimentosBarbeariaModels extends Model {}

ProcedimentosBarbeariaModels.init(
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
    tableName: "procedimentos_barbearia",
  }
);

module.exports = ProcedimentosBarbeariaModels;
