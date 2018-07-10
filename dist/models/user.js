'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    marital_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['single', 'married', 'divorced']],
          msg: 'Use valid marital status'
        }
      }
    },
    deprecated_at: {
      type: DataTypes.Date
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};