'use strict';

const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { getThreadById, createThread, addReply, getThreads } = require('../data/threads');
const { getCategoryById, getAllCategories } = require('../data/categories');

// List all threads (recent first)
router.get('/', (req, res) => {
  const threads = getThreads().reverse();
  res.render('threads', {
    title: 'All Discussions — Language Learning Forum',
    threads,
    categories: getAllCategories(),
  });
});

// Show new-thread form
router.get('/new', (req, res) => {
  const categories = getAllCategories();
  res.render('new-thread', {
    title: 'Start a New Discussion — Language Learning Forum',
    categories,
    errors: [],
    values: {},
  });
});

// Handle new-thread submission
router.post(
  '/new',
  [
    body('categoryId').notEmpty().withMessage('Please select a category.'),
    body('title')
      .trim()
      .isLength({ min: 5, max: 200 })
      .withMessage('Title must be between 5 and 200 characters.'),
    body('body')
      .trim()
      .isLength({ min: 20, max: 5000 })
      .withMessage('Post body must be between 20 and 5000 characters.'),
    body('author')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Display name must be between 2 and 50 characters.'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render('new-thread', {
        title: 'Start a New Discussion — Language Learning Forum',
        categories: getAllCategories(),
        errors: errors.array(),
        values: req.body,
      });
    }

    const { categoryId, title, body: postBody, author } = req.body;
    const category = getCategoryById(categoryId);
    if (!category) {
      return res.status(422).render('new-thread', {
        title: 'Start a New Discussion — Language Learning Forum',
        categories: getAllCategories(),
        errors: [{ msg: 'Invalid category selected.' }],
        values: req.body,
      });
    }

    const thread = createThread(categoryId, title, postBody, author);
    res.redirect(`/threads/${thread.id}`);
  }
);

// Show a single thread with replies
router.get('/:id', (req, res) => {
  const thread = getThreadById(req.params.id);
  if (!thread) {
    return res.status(404).render('error', {
      title: 'Thread Not Found',
      message: 'This discussion thread does not exist.',
      statusCode: 404,
    });
  }
  const category = getCategoryById(thread.categoryId);
  res.render('thread', {
    title: `${thread.title} — Language Learning Forum`,
    thread,
    category,
    errors: [],
    values: {},
  });
});

// Handle reply submission
router.post(
  '/:id/reply',
  [
    body('author')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Display name must be between 2 and 50 characters.'),
    body('body')
      .trim()
      .isLength({ min: 5, max: 2000 })
      .withMessage('Reply must be between 5 and 2000 characters.'),
  ],
  (req, res) => {
    const thread = getThreadById(req.params.id);
    if (!thread) {
      return res.status(404).render('error', {
        title: 'Thread Not Found',
        message: 'This discussion thread does not exist.',
        statusCode: 404,
      });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const category = getCategoryById(thread.categoryId);
      return res.status(422).render('thread', {
        title: `${thread.title} — Language Learning Forum`,
        thread,
        category,
        errors: errors.array(),
        values: req.body,
      });
    }

    const { author, body: replyBody } = req.body;
    addReply(thread.id, author, replyBody);
    res.redirect(`/threads/${thread.id}`);
  }
);

module.exports = router;
