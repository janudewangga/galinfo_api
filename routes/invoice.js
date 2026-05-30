const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const db = require('../db');
const bcrypt = require('bcrypt');
router.get('/', async (req, res) => {
  let dbQuery = {
    limit: 10,
    order: [['id', 'desc']]
  };
  let invoices = await db.Invoice.findAll(dbQuery);
  res.json(invoices);
});
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let user = await db.User.findOne({
    where: {
      id: id
    }
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: i18n.__('Not found.') });
  }
});
module.exports = router;
