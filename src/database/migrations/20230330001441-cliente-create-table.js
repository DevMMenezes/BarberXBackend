"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cliente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "nome",
      },
      telefone: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "telefone",
      },
      data_ult_corte: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: "data_ult_corte",
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
    await queryInterface.dropTable("cliente");
  },
};
