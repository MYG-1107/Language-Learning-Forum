'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('guidelines', {
    title: 'Community Guidelines — Language Learning Forum',
  });
});

module.exports = router;
