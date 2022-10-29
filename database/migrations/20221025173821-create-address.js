'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone: {
        type: new DataTypes.STRING(20),
        unique: false,
        validate: {
          notEmpty: true,
          isNumeric: true,
        }
      },
      notes: {
        type: new DataTypes.STRING,
        unique: false,
        validate: {
          notEmpty: true,
        }
      },
      address: {
        type: new DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      userId: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};