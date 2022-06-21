'use strict';

const { start } = require('./src/server');
const { sequelize } = require('./src/auth/models/index');

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    console.log('Connected to DB');
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

start();