const path = require('path');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'coffeeks_dev',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: console.log
  }
}; 