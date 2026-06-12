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
    mr_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    technician_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    processed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  }, { sequelize, modelName: 'mr_process' });
}
