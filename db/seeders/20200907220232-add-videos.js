'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert([
      { id: 'R-T7kOJq92Y', siteId: 1, url: 'https://www.youtube.com/watch?v=R-T7kOJq92Y', title: 'EMG n0ne (Falcon) vs FOX Mew2King (Sheik) - GOML2016 - Losers Ro12', duration: 1030, thumbnail: 'https://i.ytimg.com/vi/R-T7kOJq92Y/hqdefault.jpg'},
      { id: 'JexylT0lULw', siteId: 1, url: 'https://www.youtube.com/watch?v=JexylT0lULw', title: 'S@P9 #47 - EMG | n0ne (Falcon) VS G2 | Westballz (Falco) Grand Finals', duration: 1050, thumbnail: 'https://i.ytimg.com/vi/JexylT0lULw/hqdefault.jpg'},
      { id: 'EvBol_RaTwg', siteId: 1, url: 'https://www.youtube.com/watch?v=EvBol_RaTwg', title: 'SAP9 #37 - CLG. | SFAT (Fox) VS Tempo | S2J - Grand Finals', thumbnail: 'https://i.ytimg.com/vi/EvBol_RaTwg/hqdefault.jpg'},
      { id: 'gEM8Xt6oYO8', sideId: 1, url: 'https://www.youtube.com/watch?v=gEM8Xt6oYO8', title: 'Holiday Bash SSBM - CLG.SFAT (Fox) VS ALG | n0ne (Captain Falcon) - Melee Pools', duration: 578, thumbnail: 'https://i.ytimg.com/vi/gEM8Xt6oYO8/hqdefault.jpg'},
      { id: 'Ng83fo7HIr0', sideId: 1, url: 'https://www.youtube.com/watch?v=Ng83fo7HIr0', title: "Mang0's Birthday Bash - C9 | Mang0 (Falco) vs n0ne (Captain Falcon) - Winners Quarterfinals", duration: 621, thumbnail: 'https://i.ytimg.com/vi/Ng83fo7HIr0/hqdefault.jpg'},
      { id: 'bXFTmt-Pb2M', sideId: 1, url: 'https://www.youtube.com/watch?v=bXFTmt-Pb2M', title: "FlyQuest vs TSM - Game 1 | Grand Final Playoffs S10 LCS Summer 2020 | FLY vs TSM G1", duration: 2375, thumbnail: 'https://i.ytimg.com/vi/bXFTmt-Pb2M/hqdefault.jpg'},
      { id: 'roTzaAhQTQM', sideId: 1, url: 'https://www.youtube.com/watch?v=roTzaAhQTQM', title: "Cloud 9 vs 100 Thieves | Week 1 Day 3 S10 LCS Summer 2020 | C9 vs 100 W1D3", duration: 1759, thumbnail: 'https://i.ytimg.com/vi/roTzaAhQTQM/hqdefault.jpg'},
      { id: 'H7xkzrTya9o', sideId: 1, url: 'https://www.youtube.com/watch?v=H7xkzrTya9o', title: "Fnatic vs G2 Esports (BEST GAME EVER!) - LEC Spring 2019 Week 9 Day 1 - FNC vs G2", duration: 3376, thumbnail: 'https://i.ytimg.com/vi/H7xkzrTya9o/hqdefault.jpg'},
      { id: 'k2OAqgaZxrU', sideId: 1, url: 'https://www.youtube.com/watch?v=k2OAqgaZxrU', title: "CLG vs Golden Guardians | Week 2 Day 1 S10 LCS Summer 2020 | CLG vs GG W2D1", duration: 2221, thumbnail: 'https://i.ytimg.com/vi/k2OAqgaZxrU/hqdefault.jpg'},
      { id: 'yhI5j-rOy1Y', sideId: 1, url: 'https://www.youtube.com/watch?v=yhI5j-rOy1Y', title: "Immortals vs Evil Geniuses | Week 4 Day 3 S10 LCS Summer 2020 | IMT vs EG W4D3", duration: 3203, thumbnail: 'https://i.ytimg.com/vi/yhI5j-rOy1Y/hqdefault.jpg'}
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos');
  }
};
