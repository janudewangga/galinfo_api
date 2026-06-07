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
    name: {
      type: DataTypes.STRING(190),
      allowNull: false,
      unique: true
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ros_version: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'v7'
    },
    port: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    default_interface: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { sequelize, modelName: 'router' });
}
