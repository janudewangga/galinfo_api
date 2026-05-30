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
    recurring_reference: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: true,
      defaultValue: null
    },
    alias_id: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null
    },
    slug: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    },
    slug2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null
    },
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    date_issued: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    paid: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    payment_token: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    order_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null
    },
    status: {
      type: DataTypes.ENUM('unpaid', 'partly-paid', 'paid'),
      allowNull: false,
      defaultValue: 'unpaid'
    }
  }, { sequelize, modelName: 'invoice' });
}
