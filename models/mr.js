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
    client_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    operator_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    target: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    status: {
      type: DataTypes.ENUM('process', 'added', 'success', 'failed'),
      allowNull: false,
      defaultValue: 'added'
    }
  }, { sequelize, modelName: 'mr' });
}
