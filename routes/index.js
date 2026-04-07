'use strict';

const express = require('express');
const router = express.Router();
const { getRecentThreads } = require('../data/threads');
const { getAllCategories } = require('../data/categories');

router.get('/', (req, res) => {
  const recentThreads = getRecentThreads(5);
  const categories = getAllCategories();
  res.render('index', {
    title: 'Language Learning Forum',
    recentThreads,
    categories,
  });
});

module.exports = router;
