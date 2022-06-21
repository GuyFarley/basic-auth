'use strict';

const { start, sequelize } = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));

start();