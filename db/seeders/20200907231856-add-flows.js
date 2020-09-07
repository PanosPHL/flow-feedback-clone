'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flows', [
      // Melee
      { name: 'EMG n0ne (Falcon) vs FOX Mew2King (Sheik) - GOML2016 - Losers Ro12', description: 'A masterclass in holding down', userId: 2, videoId: 'R-T7kOJq92Y', categoryId: 2 },
      { name: 'S@P9 #47 - EMG | n0ne (Falcon) VS G2 | Westballz (Falco) Grand Finals', description: 'Learning to make reads in neutral', userId: 2, videoId: 'JexylT0lULw', categoryId: 2 },
      { name: 'SAP9 #37 - CLG. | SFAT (Fox) VS Tempo | S2J - Grand Finals', description: '', userId: 2, videoId: 'EvBol_RaTwg', categoryId: 2 },
      { name: 'Holiday Bash SSBM - CLG.SFAT (Fox) VS ALG | n0ne (Captain Falcon) - Melee Pools', description: '', userId: 2, videoId: 'gEM8Xt6oYO8', categoryId: 2 },
      { name: "Mang0's Birthday Bash - C9 | Mang0 (Falco) vs n0ne (Captain Falcon) - Winners Quarterfinals", description: 'Close set', userId: 2, videoId: 'Ng83fo7HIr0', categoryId: 2 },
      // League
      { name: "FlyQuest vs TSM - Game 1 | Grand Final Playoffs S10 LCS Summer 2020 | FLY vs TSM G1", description: 'A great match between two prominent teams', userId: 3, videoId: 'bXFTmt-Pb2M', categoryId: 1 },
      { name: "Cloud 9 vs 100 Thieves | Week 1 Day 3 S10 LCS Summer 2020 | C9 vs 100 W1D3", description: '', userId: 3, videoId: 'roTzaAhQTQM', categoryId: 1 },
      { name: "Fnatic vs G2 Esports (BEST GAME EVER!) - LEC Spring 2019 Week 9 Day 1 - FNC vs G2", description: '', userId: 3, videoId: 'H7xkzrTya9o', categoryId: 1 },
      { name: "CLG vs Golden Guardians | Week 2 Day 1 S10 LCS Summer 2020 | CLG vs GG W2D1", description: '', userId: 3, videoId: 'k2OAqgaZxrU', categoryId: 1 },
      { name: "Immortals vs Evil Geniuses | Week 4 Day 3 S10 LCS Summer 2020 | IMT vs EG W4D3", description: 'EG back in the LCS', userId: 3, videoId: 'yhI5j-rOy1Y', categoryId: 1 },
      // Overwatch
      { name: "Playoffs Round 3A | @LA Gladiators vs @Philadelphia Fusion | Playoffs Week 1 | NA Day 3", description: "Let's go Philly!", userId: 4, videoId: '8ykWVR4IsaY', categoryId: 3 },
      { name: "FINALS | Paris Eternal vs Philadelphia Fusion | Summer Showdown | NA Day 3", description: '', userId: 4, videoId: 'YPj_4m2Do0k', categoryId: 3 },
      { name: "@London Spitfire vs @NYXL | Week 29 | APAC Day 1", description: 'NYXL looking dangerous this year', userId: 4, videoId: 'AZr27iqWzWw', categoryId: 3 },
      { name: "San Francisco Shock vs Vancouver Titans | Week 25 | NA Day 2", description: '', userId: 4, videoId: 'IJwz95WRTM8', categoryId: 3 },
      { name: "Playoffs Round 1A | @Boston Uprising vs Houston@Outlaws | Playoffs Week 1 | NA Day 1", description: '', userId: 4, videoId: 'dBKmxcOo9KM', categoryId: 3 },
      // CS:GO
      { name: "CS:GO - FaZe Clan vs. Fnatic [Mirage] Map 1 - ESL Pro League Season 11 - Stage 2", description: 'Two titans duking it out', userId: 5, videoId: 'S2HnpQ4x0mA', categoryId: 4 },
      { name: "ELEAGUE CS:GO Premier 2018 - Faze vs Fnatic - Group Stage", description: '', userId: 5, videoId: 'WCMi0E678qo', categoryId: 4 },
      { name: "ELEAGUE CS:GO Premier 2018 - MiBR vs. Cloud9 - Group Stage", description: '', userId: 5, videoId: 'BDPliBa_QqE', categoryId: 4 },
      { name: "CS:GO - G2 Esports vs. Team Liquid [Inferno] Map 4 - Final - ESL Pro League Season 9", description: "Let's go Liquid", userId: 5, videoId: 'issovlFJV-A', categoryId: 4 },
      { name: "CS:GO - Astralis vs. G2 Esports [Dust2] Map 1 - Group B - ESL Pro League Season 10 Finals", description: '', userId: 5, videoId: 'KqF-UugOgp0', categoryId: 4 }
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
