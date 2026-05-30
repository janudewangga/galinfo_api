const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class TableSchema extends Model { }
  return TableSchema.init({
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.ENUM('M', 'F', 'Other'),
      allowNull: true,
      defaultValue: null
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    username: {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: null
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    role: {
      type: DataTypes.ENUM('administrator', 'operator', 'finance', 'technician', 'client'),
      allowNull: false,
      defaultValue: 'client'
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'inactive'
    }
  }, { sequelize, modelName: 'user' });
}
