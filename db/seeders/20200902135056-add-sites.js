'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sites', [
      { name: 'YouTube' }
    ], { attributes: ['name']})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Sites');
  }
};
