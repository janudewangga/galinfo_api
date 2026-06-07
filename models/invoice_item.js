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
    invoice_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    alias_id: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null
    },
    product_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DOUBLE(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    discount: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    total: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  }, { sequelize, modelName: 'invoice_item' });
}
