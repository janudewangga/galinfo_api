const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const db = require('../db');
const bcrypt = require('bcrypt');
const mids = require('../mids');
router.get('/', mids.auth(), async (req, res) => {
  let dbQuery = {
    limit: 10,
    order: [['id', 'desc']],
    logging: console.log
  };
  if (req.user.role === 'client') {
    dbQuery.where = {
      user_id: req.user.id
    };
    // dbQuery.include = [
    //   // { model: db.User, as: 'user' },
    //   // { model: db.Payment, as: 'payments' }
    // ];
  }
  let invoices = await db.Invoice.findAll(dbQuery);
  res.json(invoices);
});
router.get('/:id', mids.auth(), async (req, res) => {
  let id = req.params.id;
  let invoice = await db.Invoice.findOne({
    where: {
      user_id: req.user.id,
      alias_id: id
    },
    include: [
      { model: db.Payment, as: 'payments' },
      {
        model: db.InvoiceItems, as: 'items', include: [
          { model: db.Product, as: 'product' }
        ]
      },
    ]
  });
  if (invoice) {
    res.json(invoice);
  } else {
    res.status(404).json({ message: i18n.__('Not found.') });
  }
});
module.exports = router;
