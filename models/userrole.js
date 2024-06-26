'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class UserRole extends Model {
    static associate(models) {
    }
  }

  UserRole.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });

  return UserRole;
};
