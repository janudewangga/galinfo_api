const express = require('express');
const router = express.Router();
const i18n = require('i18n');
const db = require('../db');
const bcrypt = require('bcrypt');
const mids = require('../mids');
const moment = require('moment');
router.get('/', mids.auth(), async (req, res) => {
  let d1 = req.query.d1;
  let d2 = req.query.d2;
  let dbQuery = {
    limit: 10,
    order: [['id', 'desc']],
    where: {
      client_id: req.user.id
    }
  };
  if (['administrator', 'operator', 'technician'].indexOf(req.user.role) > -1) {
    dbQuery.where = {};
  }
  if (d1 && d2) {
    dbQuery.where = {
      created_at: { [db.Op.gte]: d1 },
      created_at: { [db.Op.lte]: d2 },
    };
  }
  let mrs = await db.Mr.findAll(dbQuery);
  res.json(mrs);
});
router.get('/:id', mids.auth(), async (req, res) => {
  let id = req.params.id;
  let dbQuery = {
    where: {
      client_id: req.user.id,
      uid: id
    },
    include: [
      {
        model: db.MrProcesses, as: 'processes', include: [
          { model: db.User, as: 'technician' }
        ]
      },
      { model: db.User, as: 'client' },
      { model: db.User, as: 'operator' },
    ]
  };
  if (['administrator'].indexOf(req.user.role) > -1) {
    dbQuery.where = { uid: id };
  }
  let mr = await db.Mr.findOne(dbQuery);
  if (mr) {
    res.json(mr);
  } else {
    res.status(404).json({ message: i18n.__('Not found.') });
  }
});
module.exports = router;
