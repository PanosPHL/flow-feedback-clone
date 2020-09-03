'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          min: 4
        }
      },
      cover: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isImage(value) {
            const imageRegex = /\.jpg$|\.png$/i;

            if (!value.test(imageRegex)) {
              throw new Error('Cover field must be a valid image path')
            }
          }
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
    return queryInterface.dropTable('Categories');
  }
};