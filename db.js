const { Sequelize, Op, INET } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false,
  timezone: '+07:00',
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const User = require('./models/user')(sequelize);
const Invoice = require('./models/invoice')(sequelize);
const InvoiceItems = require('./models/invoice_item')(sequelize);
const Log = require('./models/log')(sequelize);
const Payment = require('./models/payment')(sequelize);
const Product = require('./models/product')(sequelize);
const Router = require('./models/router')(sequelize);
Invoice.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Payment.belongsTo(Invoice, { as: 'invoice', foreignKey: 'invoice_id' });
Invoice.hasMany(Payment, { as: 'payments', foreignKey: 'invoice_id' });
User.hasMany(Invoice, { as: 'invoices', foreignKey: 'user_id' });
Invoice.hasMany(InvoiceItems, { as: 'items', foreignKey: 'invoice_id' });
InvoiceItems.belongsTo(Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
InvoiceItems.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
module.exports = {
  sequelize,
  Op,
  User,
  Invoice,
  Log,
  Payment,
  InvoiceItems,
  Product,
  Router
};
