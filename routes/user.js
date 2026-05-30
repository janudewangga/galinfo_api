const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const db = require('../db');
const bcrypt = require('bcrypt');
const mids = require('../mids');
const { body, validationResult, matchedData } = require('express-validator');
router.get('/', mids.auth(), async (req, res) => {
  let users = await db.User.findAll();
  res.json({ users });
});
router.get('/:id', mids.auth(), async (req, res) => {
  let id = req.params.id;
  let user = await db.User.findOne({
    where: {
      id: id
    }
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: i18n.__('Not found') });
  }
});
router.post('/get_token',
  body('username').notEmpty().withMessage(i18n.__('msg1', { field: i18n.__('Username') })),
  body('password').notEmpty().withMessage(i18n.__('msg1', { field: i18n.__('Password') })),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      const vData = matchedData(req);
      let user = await db.User.findOne({
        where: {
          username: vData.username
        }
      });
      if (user) {
        if (bcrypt.compareSync(vData.password, user.password)) {
          res.json(user);
        } else {
          res.status(403).json({ message: i18n.__('Forbidden') });
        }
      } else {
        res.status(404).json({ message: i18n.__('Not found.') });
      }
    } else {
      res.status(422).json(validationErrors);
    }
  });
module.exports = router;
