const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");

class ProcedimentosModels extends Model {}

ProcedimentosModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    id_secao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_secao",
    },
    id_barbearia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_barbearia",
    },
    nome_procedimentos: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "nome_procedimentos",
    },
    preco_procedimento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "preco_procedimento",
    },
    tempo_procedimento: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "tempo_procedimento",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "procedimentos",
  }
);



module.exports = ProcedimentosModels;
