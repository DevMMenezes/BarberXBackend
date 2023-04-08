"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("agenda", {
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
      data_agendamento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: "data_agendamento",
      },
      total_horas: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "total_horas",
      },
      hora_ini: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "hora_ini",
      },
      hora_fin: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "hora_fin",
      },
      nome_cliente: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "nome",
      },
      telefone_cliente: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "telefone",
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
    await queryInterface.dropTable("agenda");
  },
};
