const { Model, DataTypes } = require("sequelize");
const Connection = require("../database");
const ProcedimentosModels = require("../models/ProcedimentosModels");

class SecaoModels extends Model {}

SecaoModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    nome_secao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "nome_secao",
    },
    id_barbearia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_barbeiro",
    },
  },
  {
    sequelize: Connection,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    tableName: "secao",
  }
);

SecaoModels.hasMany(ProcedimentosModels, {
  foreignKey: "id_secao",
});
ProcedimentosModels.belongsTo(SecaoModels, {
  foreignKey: "id_procedimento",
});

module.exports = SecaoModels;
