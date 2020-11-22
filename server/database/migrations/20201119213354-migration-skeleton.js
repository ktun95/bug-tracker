'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Issue', {
      subject: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.STRING,
      resolved: Sequelize.DataTypes.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Issue');
  }
};
