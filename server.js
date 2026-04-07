'use strict';

const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const categoriesRouter = require('./routes/categories');
const threadsRouter = require('./routes/threads');
const resourcesRouter = require('./routes/resources');
const guidelinesRouter = require('./routes/guidelines');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/threads', threadsRouter);
app.use('/resources', resourcesRouter);
app.use('/guidelines', guidelinesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.',
    statusCode: 404,
  });
});

// General error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Server Error',
    message: 'Something went wrong. Please try again later.',
    statusCode: 500,
  });
});

// Only listen when run directly (not during tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Language Learning Forum running at http://localhost:${PORT}`);
  });
}

module.exports = app;
