'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Columns') 
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Columns', {
      name: {
        type: Sequelize.STRING
    },
    order: {
        type: Sequelize.INTEGER
    }
    })
  }
};
