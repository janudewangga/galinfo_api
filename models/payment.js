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
    slug: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    payment_method: {
      type: DataTypes.ENUM('cash', 'bank_transfer', 'payment_gateway'),
      defaultValue: 'bank_transfer',
      allowNull: false
    },
    paid_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    receipt: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    bank_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: true,
      defaultValue: null
    },
    agent_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: true,
      defaultValue: null
    },
    agent_fee_percentage: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: true,
      defaultValue: 0
    },
    agent_fee: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: true,
      defaultValue: 0
    },
    is_processed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, { sequelize, modelName: 'payment' });
}
