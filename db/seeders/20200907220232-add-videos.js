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
      { id: 'yhI5j-rOy1Y', sideId: 1, url: 'https://www.youtube.com/watch?v=yhI5j-rOy1Y', title: "Immortals vs Evil Geniuses | Week 4 Day 3 S10 LCS Summer 2020 | IMT vs EG W4D3", duration: 3203, thumbnail: 'https://i.ytimg.com/vi/yhI5j-rOy1Y/hqdefault.jpg'},
      { id: '8ykWVR4IsaY', sideId: 1, url: 'https://www.youtube.com/watch?v=8ykWVR4IsaY', title: "Playoffs Round 3A | @LA Gladiators vs @Philadelphia Fusion | Playoffs Week 1 | NA Day 3", duration: 5382, thumbnail: 'https://i.ytimg.com/vi/8ykWVR4IsaY/hqdefault.jpg'},
      { id: 'YPj_4m2Do0k', sideId: 1, url: 'https://www.youtube.com/watch?v=YPj_4m2Do0k', title: "FINALS | Paris Eternal vs Philadelphia Fusion | Summer Showdown | NA Day 3", duration: 12641, thumbnail: 'https://i.ytimg.com/vi/YPj_4m2Do0k/hqdefault.jpg'},
      { id: 'AZr27iqWzWw', sideId: 1, url: 'https://www.youtube.com/watch?v=AZr27iqWzWw', title: "@London Spitfire vs @NYXL | Week 29 | APAC Day 1", duration: 4857, thumbnail: 'https://i.ytimg.com/vi/AZr27iqWzWw/hqdefault.jpg'},
      { id: 'IJwz95WRTM8', sideId: 1, url: 'https://www.youtube.com/watch?v=IJwz95WRTM8', title: "San Francisco Shock vs Vancouver Titans | Week 25 | NA Day 2", duration: 4039, thumbnail: 'https://i.ytimg.com/vi/IJwz95WRTM8/hqdefault.jpg'},
      { id: 'dBKmxcOo9KM', sideId: 1, url: 'https://www.youtube.com/watch?v=dBKmxcOo9KM', title: "Playoffs Round 1A | @Boston Uprising vs Houston@Outlaws | Playoffs Week 1 | NA Day 1", duration: 8012, thumbnail: 'https://i.ytimg.com/vi/dBKmxcOo9KM/hqdefault.jpg'},
      { id: 'S2HnpQ4x0mA', sideId: 1, url: 'https://www.youtube.com/watch?v=S2HnpQ4x0mA', title: "CS:GO - FaZe Clan vs. Fnatic [Mirage] Map 1 - ESL Pro League Season 11 - Stage 2", duration: 2887, thumbnail: 'https://i.ytimg.com/vi/S2HnpQ4x0mA/hqdefault.jpg'},
      { id: 'WCMi0E678qo', sideId: 1, url: 'https://www.youtube.com/watch?v=WCMi0E678qo', title: "ELEAGUE CS:GO Premier 2018 - Faze vs Fnatic - Group Stage", duration: 11411, thumbnail: 'https://i.ytimg.com/vi/WCMi0E678qo/hqdefault.jpg'},
      { id: 'BDPliBa_QqE', sideId: 1, url: 'https://www.youtube.com/watch?v=BDPliBa_QqE', title: "ELEAGUE CS:GO Premier 2018 - MiBR vs. Cloud9 - Group Stage", duration: 11176, thumbnail: 'https://i.ytimg.com/vi/BDPliBa_QqE/hqdefault.jpg'},
      { id: 'issovlFJV-A', sideId: 1, url: 'https://www.youtube.com/watch?v=issovlFJV-A', title: "CS:GO - G2 Esports vs. Team Liquid [Inferno] Map 4 - Final - ESL Pro League Season 9", duration: 6961, thumbnail: 'https://i.ytimg.com/vi/issovlFJV-A/hqdefault.jpg'},
      { id: 'KqF-UugOgp0', sideId: 1, url: 'https://www.youtube.com/watch?v=KqF-UugOgp0', title: "CS:GO - Astralis vs. G2 Esports [Dust2] Map 1 - Group B - ESL Pro League Season 10 Finals", duration: 2104, thumbnail: 'https://i.ytimg.com/vi/KqF-UugOgp0/hqdefault.jpg'}
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos');
  }
};
