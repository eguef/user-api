'use strict';

require('dotenv').config();

module.exports = {
  development: {
    username: 'eguono',
    password: null,
    database: 'dms',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
  },
  test: {
    use_env_variable: 'DATABASE_TEST_URL'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};