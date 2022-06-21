'use strict';

const bcrypt = require('bcrypt');


// // allows attachment of a method to Users
// Users.beforeCreate = (user) => {
//   console.log(user);
// };

// Create a Sequelize model
const UsersModel = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  users.authenticateBasic = async function (username, password) {
    try {
      const user = await this.findOne({ where: { username } });
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return user;
      }
    } catch (e) {
      console.error(e);
      return e;
    }
  };
  return users;
};

module.exports = UsersModel;