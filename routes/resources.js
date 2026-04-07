'use strict';

const express = require('express');
const router = express.Router();
const { getResources } = require('../data/resources');
const { getAllCategories } = require('../data/categories');

// List all resources, optionally filtered by category
router.get('/', (req, res) => {
  const { category: categoryId } = req.query;
  const resources = getResources(categoryId || undefined);
  const categories = getAllCategories();
  res.render('resources', {
    title: 'Learning Resources — Language Learning Forum',
    resources,
    categories,
    selectedCategory: categoryId || '',
  });
});

module.exports = router;
