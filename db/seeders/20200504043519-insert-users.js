'use strict';

const bcrypt = require('bcryptjs');

function createPassword(password) {
  if (password) {
    return bcrypt.hashSync(password);
  }

  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@example.com', hashedPassword: createPassword() }),
      r({ email: 'yusuke@example.com', hashedPassword: createPassword() }),
      r({ email: 'petra@example.com', hashedPassword: createPassword() }),
      r({ email: 'panosssbm@gmail.com', hashedPassword: createPassword('panosPass') }),
      r({ email: 'faker@t1.com', hashedPassword: createPassword('fakerDaBess')}),
      r({ email: 'carpe@phillyfusion.com', hashedPassword: createPassword('brotherlyLove')}),
      r({ email: 'stewie2k@teamliquid.com', hashedPassword: createPassword('fragger')})
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
