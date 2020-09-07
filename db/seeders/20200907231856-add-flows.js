'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flows', [
      // Melee
      { name: 'EMG n0ne (Falcon) vs FOX Mew2King (Sheik) - GOML2016 - Losers Ro12', description: 'A masterclass in holding down', userId: 2, videoId: 'R-T7kOJq92Y', categoryId: 2 },
      { name: 'S@P9 #47 - EMG | n0ne (Falcon) VS G2 | Westballz (Falco) Grand Finals', description: 'Learning to make reads in neutral', userId: 2, videoId: 'JexylT0lULw', categoryId: 2 },
      { name: 'SAP9 #37 - CLG. | SFAT (Fox) VS Tempo | S2J - Grand Finals', description: '', userId: 2, videoId: 'EvBol_RaTwg', categoryId: 2 },
      { name: 'Holiday Bash SSBM - CLG.SFAT (Fox) VS ALG | n0ne (Captain Falcon) - Melee Pools', description: '', userId: 2, videoId: 'gEM8Xt6oYO8', categoryId: 2 },
      { name: "Mang0's Birthday Bash - C9 | Mang0 (Falco) vs n0ne (Captain Falcon) - Winners Quarterfinals", description: 'Close set', userId: 2, videoId: 'Ng83fo7HIr0', categoryId: 2 }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
