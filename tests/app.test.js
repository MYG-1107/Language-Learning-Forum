'use strict';

const request = require('supertest');
const app = require('../server');

describe('Homepage (GET /)', () => {
  test('returns 200 and contains forum title', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Language Learning Forum');
  });

  test('shows recent discussions section', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Recent Discussions');
  });

  test('shows Browse by Language section', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Browse by Language');
  });

  test('shows Start a Discussion link', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Start a Discussion');
  });
});

describe('Categories (GET /categories)', () => {
  test('returns 200', async () => {
    const res = await request(app).get('/categories');
    expect(res.statusCode).toBe(200);
  });

  test('lists Norwegian category', async () => {
    const res = await request(app).get('/categories');
    expect(res.text).toContain('Norwegian');
  });

  test('lists English category', async () => {
    const res = await request(app).get('/categories');
    expect(res.text).toContain('English');
  });

  test('lists Spanish category', async () => {
    const res = await request(app).get('/categories');
    expect(res.text).toContain('Spanish');
  });
});

describe('Individual Category (GET /categories/:id)', () => {
  test('returns 200 for valid category', async () => {
    const res = await request(app).get('/categories/norwegian');
    expect(res.statusCode).toBe(200);
  });

  test('shows category name in page', async () => {
    const res = await request(app).get('/categories/norwegian');
    expect(res.text).toContain('Norwegian');
  });

  test('returns 404 for unknown category', async () => {
    const res = await request(app).get('/categories/klingon');
    expect(res.statusCode).toBe(404);
  });
});

describe('Threads (GET /threads)', () => {
  test('returns 200', async () => {
    const res = await request(app).get('/threads');
    expect(res.statusCode).toBe(200);
  });

  test('shows All Discussions heading', async () => {
    const res = await request(app).get('/threads');
    expect(res.text).toContain('All Discussions');
  });
});

describe('Single Thread (GET /threads/:id)', () => {
  test('returns 200 for existing thread t1', async () => {
    const res = await request(app).get('/threads/t1');
    expect(res.statusCode).toBe(200);
  });

  test('shows thread title', async () => {
    const res = await request(app).get('/threads/t1');
    expect(res.text).toContain('Bokmål');
  });

  test('shows reply form', async () => {
    const res = await request(app).get('/threads/t1');
    expect(res.text).toContain('Leave a Reply');
  });

  test('returns 404 for nonexistent thread', async () => {
    const res = await request(app).get('/threads/t9999');
    expect(res.statusCode).toBe(404);
  });
});

describe('New Thread Form (GET /threads/new)', () => {
  test('returns 200', async () => {
    const res = await request(app).get('/threads/new');
    expect(res.statusCode).toBe(200);
  });

  test('contains form with category select', async () => {
    const res = await request(app).get('/threads/new');
    expect(res.text).toContain('Language Category');
    expect(res.text).toContain('<select');
  });
});

describe('Create Thread (POST /threads/new)', () => {
  test('redirects to new thread on valid submission', async () => {
    const res = await request(app)
      .post('/threads/new')
      .type('form')
      .send({
        categoryId: 'english',
        title: 'A brand new test discussion thread',
        body: 'This is the body of the test thread with enough content to pass validation.',
        author: 'TestUser',
      });
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toMatch(/^\/threads\/t/);
  });

  test('returns 422 when title is too short', async () => {
    const res = await request(app)
      .post('/threads/new')
      .type('form')
      .send({
        categoryId: 'english',
        title: 'Hi',
        body: 'This is the body of the test thread with enough content to pass validation.',
        author: 'TestUser',
      });
    expect(res.statusCode).toBe(422);
    expect(res.text).toContain('Title must be between');
  });

  test('returns 422 when body is too short', async () => {
    const res = await request(app)
      .post('/threads/new')
      .type('form')
      .send({
        categoryId: 'english',
        title: 'A valid title for the discussion',
        body: 'Short',
        author: 'TestUser',
      });
    expect(res.statusCode).toBe(422);
  });

  test('returns 422 when author name is missing', async () => {
    const res = await request(app)
      .post('/threads/new')
      .type('form')
      .send({
        categoryId: 'english',
        title: 'A valid title for the discussion',
        body: 'This is the body of the test thread with enough content to pass validation.',
        author: 'X',
      });
    expect(res.statusCode).toBe(422);
  });
});

describe('Post Reply (POST /threads/:id/reply)', () => {
  test('redirects after valid reply', async () => {
    const res = await request(app)
      .post('/threads/t1/reply')
      .type('form')
      .send({
        author: 'ReplyUser',
        body: 'This is a valid reply with enough content.',
      });
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe('/threads/t1');
  });

  test('returns 422 when reply is too short', async () => {
    const res = await request(app)
      .post('/threads/t1/reply')
      .type('form')
      .send({
        author: 'ReplyUser',
        body: 'Hi',
      });
    expect(res.statusCode).toBe(422);
  });

  test('returns 404 for nonexistent thread', async () => {
    const res = await request(app)
      .post('/threads/t9999/reply')
      .type('form')
      .send({
        author: 'ReplyUser',
        body: 'This is a valid reply with enough content.',
      });
    expect(res.statusCode).toBe(404);
  });
});

describe('Resources (GET /resources)', () => {
  test('returns 200', async () => {
    const res = await request(app).get('/resources');
    expect(res.statusCode).toBe(200);
  });

  test('shows Learning Resources heading', async () => {
    const res = await request(app).get('/resources');
    expect(res.text).toContain('Learning Resources');
  });

  test('shows attribution for resources', async () => {
    const res = await request(app).get('/resources');
    expect(res.text).toContain('Source:');
  });

  test('filters by category', async () => {
    const res = await request(app).get('/resources?category=norwegian');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Norwegian');
    expect(res.text).not.toContain('Jisho');
  });
});

describe('Community Guidelines (GET /guidelines)', () => {
  test('returns 200', async () => {
    const res = await request(app).get('/guidelines');
    expect(res.statusCode).toBe(200);
  });

  test('shows guidelines content', async () => {
    const res = await request(app).get('/guidelines');
    expect(res.text).toContain('Be Respectful');
    expect(res.text).toContain('Attribute Sources');
    expect(res.text).toContain('No Spam');
  });
});

describe('404 handling', () => {
  test('unknown route returns 404', async () => {
    const res = await request(app).get('/nonexistent-path');
    expect(res.statusCode).toBe(404);
    expect(res.text).toContain('Page Not Found');
  });
});
