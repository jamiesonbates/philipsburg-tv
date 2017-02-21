'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/philipsburg_tv_dev'
  },
  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  }
};
