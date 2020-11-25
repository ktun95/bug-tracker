'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserProject')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserProject', {
      UserId: Sequelize.INTEGER,
      ProjectId: Sequelize.INTEGER
    })
  }
};
