'use strict';

const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById } = require('../data/categories');
const { getThreads } = require('../data/threads');

// List all categories
router.get('/', (req, res) => {
  const categories = getAllCategories();
  res.render('categories', {
    title: 'Browse Categories — Language Learning Forum',
    categories,
  });
});

// Show threads within a specific category
router.get('/:id', (req, res) => {
  const category = getCategoryById(req.params.id);
  if (!category) {
    return res.status(404).render('error', {
      title: 'Category Not Found',
      message: 'This language category does not exist.',
      statusCode: 404,
    });
  }
  const threads = getThreads(category.id);
  res.render('category', {
    title: `${category.name} — Language Learning Forum`,
    category,
    threads,
  });
});

module.exports = router;
