"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("barbearia", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      nome_barbearia: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: "nome_barbearia",
      },
      endereco_barbearia: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: "endereco_barbearia",
      },
      num_barbearia: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "num_barbearia",
      },
      bairro_barbearia: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "bairro_barbearia",
      },
      documento: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "documento",
      },
      telefone_barbearia: {
        type: Sequelize.STRING(30),
        allowNull: true,
        field: "telefone_barbearia",
      },
      ativo: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "N",
        field: "ativo",
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "cep",
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
      img_perfil_barbearia: {
        type: Sequelize.STRING,
        allowNull: true,
        field: "img_perfil_barbearia",
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
    await queryInterface.dropTable("barbearia");
  },
};
