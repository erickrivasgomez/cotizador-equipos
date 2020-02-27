'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resource_location_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Resource_location_types');
  }
};