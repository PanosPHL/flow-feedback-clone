'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      { content: 'I pretty much know nothing about League lol', timestamp: 4.666424, flowId: 9 },
      { content: 'Note to fast forward to', timestamp: 123.920479, flowId: 9 },
      { content: 'Note to rewind to', timestamp: 56.716171532846715, flowId: 9}
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes');
  }
};
