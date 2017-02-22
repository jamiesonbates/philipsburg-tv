'use strict';

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/philipsburg_tv_dev'
  }
};
