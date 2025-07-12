'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 品種データ
    await queryInterface.bulkInsert('varieties', [
      {
        name: 'Bourbon',
        description: 'ティピカから派生した品種。甘みが強く、バランスの取れた味わいが特徴。',
        image_url: 'https://example.com/bourbon.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Geisha',
        description: 'エチオピア原産の高級品種。花のような香りと独特の風味が特徴。',
        image_url: 'https://example.com/geisha.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Typica',
        description: '最も古い品種の一つ。クリーンで上品な味わいが特徴。',
        image_url: 'https://example.com/typica.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Caturra',
        description: 'ブルボンの突然変異種。コンパクトで収量が多い。',
        image_url: 'https://example.com/caturra.jpg',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // 生産国データ
    await queryInterface.bulkInsert('countries', [
      {
        name: 'Ethiopia',
        region: 'Sidamo',
        description: 'コーヒー発祥の地。多様な品種と独特の風味。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Colombia',
        region: 'Huila',
        description: '高品質なアラビカ種の産地として有名。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Panama',
        region: 'Boquete',
        description: 'ゲイシャ種で世界的に有名になった産地。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Brazil',
        region: 'Minas Gerais',
        description: '世界最大のコーヒー生産国。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jamaica',
        region: 'Blue Mountain',
        description: 'ブルーマウンテンコーヒーで有名。',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // 精製方法データ
    await queryInterface.bulkInsert('processings', [
      {
        name: 'Washed',
        description: '水洗式。クリーンで明るい酸味が特徴。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Natural',
        description: '自然乾燥式。フルーティーで甘みが強い。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Honey',
        description: 'ハニープロセス。甘みとボディのバランスが良い。',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Semi-washed',
        description: 'セミウォッシュド。ウォッシュドとナチュラルの中間。',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('processings', null, {});
    await queryInterface.bulkDelete('countries', null, {});
    await queryInterface.bulkDelete('varieties', null, {});
  }
}; 