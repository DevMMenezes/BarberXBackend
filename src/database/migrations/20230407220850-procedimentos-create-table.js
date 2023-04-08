"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("procedimentos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      nome_procedimentos: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: "nome_procedimentos",
      },
      preco_procedimento: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: "preco_procedimento",
      },
      tempo_procedimento: {
        type: Sequelize.TIME,
        allowNull: false,
        field: "tempo_procedimento",
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
    await queryInterface.dropTable("procedimentos");
  },
};
