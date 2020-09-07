'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert([
      { id: 'R-T7kOJq92Y', siteId: 1, url: 'https://www.youtube.com/watch?v=R-T7kOJq92Y', title: 'EMG n0ne (Falcon) vs FOX Mew2King (Sheik) - GOML2016 - Losers Ro12', duration: 1030, thumbnail: 'https://i.ytimg.com/vi/R-T7kOJq92Y/hqdefault.jpg'},
      { id: 'JexylT0lULw', siteId: 1, url: 'https://www.youtube.com/watch?v=JexylT0lULw', title: 'S@P9 #47 - EMG | n0ne (Falcon) VS G2 | Westballz (Falco) Grand Finals', duration: 1050, thumbnail: 'https://i.ytimg.com/vi/JexylT0lULw/hqdefault.jpg'},
      { id: 'EvBol_RaTwg', siteId: 1, url: 'https://www.youtube.com/watch?v=EvBol_RaTwg', title: 'SAP9 #37 - CLG. | SFAT (Fox) VS Tempo | S2J - Grand Finals', thumbnail: 'https://i.ytimg.com/vi/EvBol_RaTwg/hqdefault.jpg'},
      { id: 'gEM8Xt6oYO8', sideId: 1, url: 'https://www.youtube.com/watch?v=gEM8Xt6oYO8', title: 'Holiday Bash SSBM - CLG.SFAT (Fox) VS ALG | n0ne (Captain Falcon) - Melee Pools', duration: 578, thumbnail: 'https://i.ytimg.com/vi/gEM8Xt6oYO8/hqdefault.jpg'},
      { id: 'Ng83fo7HIr0', sideId: 1, url: 'https://www.youtube.com/watch?v=Ng83fo7HIr0', title: "Mang0's Birthday Bash - C9 | Mang0 (Falco) vs n0ne (Captain Falcon) - Winners Quarterfinals", thumbnail: 'https://i.ytimg.com/vi/Ng83fo7HIr0/hqdefault.jpg'}
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
