'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Parameter_locations', // name of Source model
      'ParameterId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Parameters', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Parameter_locations', // name of Source model
      'ParameterId' // key we want to remove
    );
  }
};

