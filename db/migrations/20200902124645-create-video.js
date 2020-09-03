'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(256)
      },
      siteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sites'
        }
      },
      url: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isUrl: true
        }
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          min: 4
        }
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Videos');
  }
};