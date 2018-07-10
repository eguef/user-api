'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['single', 'married', 'divorced']],
          msg: 'Use valid marital status'
        }
      }
    },
    deprecatedAt: DataTypes.DATE

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};