const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const mids = require('../mids');
const db = require('../db');
router.get('/', mids.auth(['administrator', 'operator', 'agent', 'technician']), async (req, res) => {
  let dbQuery = {
    order: [['name', 'asc']]
  };
  let products = await db.Product.findAll(dbQuery);
  res.json(products);
});
module.exports = router;
