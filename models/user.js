const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: 'userId',
        otherKey: 'roleId'
      });
    }
  }

  User.init({
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
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
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isMobilePhone: true
      }
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100]
      }
    },
    hobbies: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('hobbies');
        return rawValue ? rawValue.split(',') : [];
      },
      set(value) {
        if (Array.isArray(value)) {
          this.setDataValue('hobbies', value.join(','));
        } else {
          this.setDataValue('hobbies', value);
        }
      }
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });

  return User;
};
