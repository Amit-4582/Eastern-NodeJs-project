'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Suppliers', [
      {
        name: 'John Dow',
        contact_info: '7895643123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samy Fan',
        contact_info: '7895643567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaila Jenny',
        contact_info: '7895643567',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Suppliers', null, {});
  }
};
