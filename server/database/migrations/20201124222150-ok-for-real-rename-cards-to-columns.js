'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Cards', 'Columns')
    await queryInterface.renameTable('Cards_id_seq', 'Columns_id_seq')
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Columns', 'Cards')
    await queryInterface.renameTable('Columns_id_seq', 'Cards_id_seq')
  }
};
