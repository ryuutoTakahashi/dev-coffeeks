'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 品種と生産国の関連
    await queryInterface.bulkInsert('variety_country', [
      // Bourbon
      { variety_id: 1, country_id: 2, created_at: new Date(), updated_at: new Date() }, // Colombia
      { variety_id: 1, country_id: 4, created_at: new Date(), updated_at: new Date() }, // Brazil
      
      // Geisha
      { variety_id: 2, country_id: 1, created_at: new Date(), updated_at: new Date() }, // Ethiopia
      { variety_id: 2, country_id: 3, created_at: new Date(), updated_at: new Date() }, // Panama
      { variety_id: 2, country_id: 2, created_at: new Date(), updated_at: new Date() }, // Colombia
      
      // Typica
      { variety_id: 3, country_id: 5, created_at: new Date(), updated_at: new Date() }, // Jamaica
      { variety_id: 3, country_id: 2, created_at: new Date(), updated_at: new Date() }, // Colombia
      
      // Caturra
      { variety_id: 4, country_id: 2, created_at: new Date(), updated_at: new Date() }, // Colombia
      { variety_id: 4, country_id: 4, created_at: new Date(), updated_at: new Date() }  // Brazil
    ], {});

    // 生産国と精製方法の関連
    await queryInterface.bulkInsert('country_processing', [
      // Ethiopia
      { country_id: 1, processing_id: 1, created_at: new Date(), updated_at: new Date() }, // Washed
      { country_id: 1, processing_id: 2, created_at: new Date(), updated_at: new Date() }, // Natural
      
      // Colombia
      { country_id: 2, processing_id: 1, created_at: new Date(), updated_at: new Date() }, // Washed
      { country_id: 2, processing_id: 3, created_at: new Date(), updated_at: new Date() }, // Honey
      
      // Panama
      { country_id: 3, processing_id: 1, created_at: new Date(), updated_at: new Date() }, // Washed
      { country_id: 3, processing_id: 2, created_at: new Date(), updated_at: new Date() }, // Natural
      
      // Brazil
      { country_id: 4, processing_id: 2, created_at: new Date(), updated_at: new Date() }, // Natural
      { country_id: 4, processing_id: 4, created_at: new Date(), updated_at: new Date() }, // Semi-washed
      
      // Jamaica
      { country_id: 5, processing_id: 1, created_at: new Date(), updated_at: new Date() }  // Washed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('country_processing', null, {});
    await queryInterface.bulkDelete('variety_country', null, {});
  }
}; 