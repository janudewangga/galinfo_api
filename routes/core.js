const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const mids = require('../mids');
router.get('/', async (req, res) => {
  res.json({ message: i18n.__('OK') });
});
router.get('/test', mids.auth(), async (req, res) => {
  res.json({ message: i18n.__('OK') });
});
module.exports = router;
