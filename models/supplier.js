'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Supplier extends Model {

    static associate(models) {
    }
  }

  Supplier.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Supplier',
  });

  return Supplier;
};