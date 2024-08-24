'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shares', [{
      symbol: 'AAPL',
      name: 'Epple Inc.',
      currentPrice: 150.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        symbol: 'AMZ',
        name: 'Emezon',
        currentPrice: 320.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      {
        symbol: 'TJY',
        name: 'Tijiy',
        currentPrice: 20.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      currentPrice: 2800.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shares', null, {});
  }
};