'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Hennry Jonny',
        contact_info: '7895647653',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Furry Saint',
        contact_info: '9805643567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Faixal Kahn',
        contact_info: '8995643567',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
