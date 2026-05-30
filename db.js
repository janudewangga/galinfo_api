const { Sequelize, Op } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const User = require('./models/user')(sequelize);
const Invoice = require('./models/invoice')(sequelize);
module.exports = {
  sequelize,
  Op,
  User,
  Invoice
};
