"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("config_barbearia", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      id_barbearia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "id_barbearia",
      },
      horario_abertura: {
        type: Sequelize.TIME,
        allowNull: true,
        field: "horario_abertura",
      },
      horario_fechamento: {
        type: Sequelize.TIME,
        allowNull: true,
        field: "horario_fechamento",
      },
      horario_pausa_ini: {
        type: Sequelize.TIME,
        allowNull: true,
        field: "horario_pausa_ini",
      },
      horario_pausa_fin: {
        type: Sequelize.TIME,
        allowNull: true,
        field: "horario_pausa_fin",
      },
      tolerancia: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "tolerancia",
      },
      tempo_montagem_grid: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "tempo_montagem_grid",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("config_barbearia");
  },
};
