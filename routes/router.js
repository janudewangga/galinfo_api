const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const mids = require('../mids');
const db = require('../db');
router.get('/', mids.auth(['administrator']), async (req, res) => {
  let routers = await db.Router.findAll();
  res.json(routers);
});
module.exports = router;
