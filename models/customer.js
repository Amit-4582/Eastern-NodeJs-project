'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Customer extends Model {

    static associate(models) {
    }
  }

  Customer.init({
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
    modelName: 'Customer',
  });

  return Customer;
};