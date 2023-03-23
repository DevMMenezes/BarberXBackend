'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("usuario",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field:"id"
      },
      nome:{
        type: Sequelize.STRING(100),
        allowNull: false,
        field:"nome"
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field:"email"
      },
      senha:{
        type: Sequelize.STRING(255),
        allowNull: false,
        field:"senha"
      },
      telefone:{
        type: Sequelize.STRING(30),
        allowNull: true,
        field:"telefone"
      },
      bloqueado:{
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "N",
        field:"bloqueado"
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  }
};


