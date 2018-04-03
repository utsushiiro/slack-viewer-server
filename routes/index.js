const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const param = { ok: 'true', value: 'sample' };
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;
