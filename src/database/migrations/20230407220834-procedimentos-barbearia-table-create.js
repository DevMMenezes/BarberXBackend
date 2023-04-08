"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("procedimentos_barbearia", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      id_procedimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "id_procedimento",
      },
      id_barbearia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "id_barbearia",
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
    await queryInterface.dropTable("procedimentos_barbearia");
  },
};
