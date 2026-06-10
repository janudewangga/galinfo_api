const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const db = require('../db');
const bcrypt = require('bcrypt');
const mids = require('../mids');
router.get('/', mids.auth(), async (req, res) => {
  let dbQuery = {
    limit: 10,
    order: [['id', 'desc']]
  };
  if (req.user.role === 'client') {
    dbQuery.where = {
      client_id: req.user.id
    };
    // dbQuery.include = [
    //   // { model: db.User, as: 'user' },
    //   // { model: db.Payment, as: 'payments' }
    // ];
  }
  let mrs = await db.Mr.findAll(dbQuery);
  res.json(mrs);
});
router.get('/:id', mids.auth(), async (req, res) => {
  let id = req.params.id;
  let mr = await db.Mr.findOne({
    where: {
      client_id: req.user.id,
      uid: id
    },
    include: [
    ]
  });
  if (mr) {
    res.json(mr);
  } else {
    res.status(404).json({ message: i18n.__('Not found.') });
  }
});
module.exports = router;
