'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'Amit',
        lastname: 'Vishwakarma',
        email: 'amit.vishwakarma@gmail.com',
        contact_number: '9892729983',
        postcode: '400070',
        password: 'Amit@4582',
        hobbies: 'cricket',
        gender: 'male',
        role: 'Admin',
        city: 'Mumbai',
        state: "Maharashtra",
        upload_files: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Ravi',
        lastname: 'Singh',
        email: 'ravi.singh@gmail.com',
        contact_number: '9892729965',
        postcode: '400072',
        password: 'Ravi@1234',
        hobbies: 'volleyball',
        gender: 'male',
        role: 'Customer',
        city: 'Mumbai',
        state: "Maharashtra",
        upload_files: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Mehak',
        lastname: 'Shrivastava',
        email: 'mehak@gmail.com',
        contact_number: '8976564381',
        postcode: '400078',
        password: 'Mehak@888',
        hobbies: 'dancing',
        gender: 'female',
        role: 'Agent',
        city: 'Pune',
        state: "Maharashtra",
        upload_files: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
