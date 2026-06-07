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
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    agent_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    subscribable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ppob: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'active'
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    product_series: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    in_stock: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
      defaultValue: 0
    },
    related_ppp_profile: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: true,
      defaultValue: null
    }
  }, { sequelize, modelName: 'product' });
}
