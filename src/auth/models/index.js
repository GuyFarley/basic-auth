'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const UsersModel = require('./users');

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize('sqlite:memory');

module.exports = {
  sequelize,
  Users: UsersModel(sequelize, DataTypes),
};