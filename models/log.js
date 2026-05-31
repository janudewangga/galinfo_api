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
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    action: {
      type: DataTypes.ENUM('login', 'logout', 'create', 'read', 'update', 'delete'),
      allowNull: false,
      defaultValue: 'read'
    },
    affected_data: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null
    },
    description: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null
    },
    status: {
      type: DataTypes.ENUM('success', 'failed'),
      allowNull: false,
      defaultValue: 'success'
    }
  }, { sequelize, modelName: 'log' });
}
