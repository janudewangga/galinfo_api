require('dotenv').config({ quiet: true });
const express = require('express');
const app = express();
const i18n = require('i18n');
i18n.configure({
  locales: ['en'],
  directory: __dirname + '/locales',
  defaultLocale: 'en'
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/core'));
app.use('/invoice', require('./routes/invoice'));
app.use('/user', require('./routes/user'));
app.use('/router', require('./routes/router'));
app.use('/product', require('./routes/product'));
app.use('/mr', require('./routes/mr'));
app.use((req, res, next) => {
  res.status(404).json({ message: i18n.__('Not found.') });
});
app.listen(7070);
