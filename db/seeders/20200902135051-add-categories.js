'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { name: 'League of Legends', cover: '/images/lol-cover.jpg'},
      { name: 'Super Smash Bros. Melee', cover: '/images/ssbm.png'},
      { name: 'Overwatch', cover:'/images/overwatch-cover.jpg'},
      { name: 'Counter Strike: Global Offensive', cover:'/images/csgo-cover.jpg'}
    ], { attributes: ['name', 'cover']})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories');
  }
};
