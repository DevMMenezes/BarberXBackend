"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: "nome",
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        field: "email",
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "senha",
      },
      telefone: {
        type: Sequelize.STRING(30),
        allowNull: true,
        field: "telefone",
      },

      tipo: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "tipo",
      },
      cidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "cidade",
      },
      estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "estado",
      },
      bloqueado: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "N",
        field: "bloqueado",
      },
      funcionario: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "N",
        field: "funcionario",
      },
      demo: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "S",
        field: "demo",
      },
      data_cadastro: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        field: "data_cadastro",
      },
      img_perfil: {
        type: Sequelize.STRING,
        allowNull: true,
        field: "img_perfil",
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
    await queryInterface.dropTable("usuario");
  },
};
