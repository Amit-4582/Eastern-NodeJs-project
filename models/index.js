const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const User = require('./user')(sequelize);
const Role = require("./role")(sequelize);
const UserRole = require("./userrole")(sequelize);
const Supplier = require("./supplier")(sequelize)
const Customer = require("./customer")(sequelize)

const db = {
  User,
  Role,
  UserRole,
  Supplier,
  Customer,
  sequelize,
  Sequelize
};

if (User.associate) {
  User.associate(db);
}

module.exports = db;
