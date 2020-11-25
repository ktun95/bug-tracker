'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Issues', 'CardId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cards',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Issues', 'CardId')
  }
};
