/* global LF */
'use strict';

(function () {
  // ─── STATE ────────────────────────────────────────────────────────────────
  var state = {
    page: 'home',
    categoryId: null,
    threadId: null,
    searchQuery: '',
    resourceFilter: '',
  };

  // ─── DOM REFERENCES ───────────────────────────────────────────────────────
  var pageContainer   = document.getElementById('page-container');
  var searchToggle    = document.getElementById('search-toggle');
  var searchBarWrap   = document.getElementById('search-bar-wrap');
  var globalSearch    = document.getElementById('global-search');
  var themeToggle     = document.getElementById('theme-toggle');
  var mobileMenuBtn   = document.getElementById('mobile-menu-btn');
  var mobileNavOverlay= document.getElementById('mobile-nav-overlay');
  var mobileNavClose  = document.getElementById('mobile-nav-close');
  var scrollTopBtn    = document.getElementById('scroll-top');
  var newThreadModal  = document.getElementById('new-thread-modal');
  var modalClose      = document.getElementById('modal-close');
  var newThreadForm   = document.getElementById('new-thread-form');
  var modalErrors     = document.getElementById('modal-errors');
  var toastContainer  = document.getElementById('toast-container');
  var threadCategory  = document.getElementById('thread-category');
  var threadTitle     = document.getElementById('thread-title');
  var threadBody      = document.getElementById('thread-body');
  var threadAuthor    = document.getElementById('thread-author');
  var titleCount      = document.getElementById('title-count');
  var bodyCount       = document.getElementById('body-count');

  // ─── THEME ────────────────────────────────────────────────────────────────
  function initTheme() {
    var saved = localStorage.getItem('lf_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('lf_theme', next);
    showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on', 'info');
  }

  // ─── ROUTER ───────────────────────────────────────────────────────────────
  function navigate(page, params) {
    state.page = page;
    state.categoryId = (params && params.categoryId) || null;
    state.threadId   = (params && params.threadId)   || null;
    state.searchQuery= (params && params.query)       || '';
    state.resourceFilter = (params && params.category) || '';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function render() {
    updateNav();
    pageContainer.classList.remove('fade-in');
    // Force reflow to restart animation
    void pageContainer.offsetWidth;
    pageContainer.classList.add('fade-in');

    switch (state.page) {
      case 'home':        renderHome();        break;
      case 'categories':  renderCategories();  break;
      case 'category':    renderCategory();    break;
      case 'threads':     renderThreads();     break;
      case 'thread':      renderThread();      break;
      case 'resources':   renderResources();   break;
      case 'guidelines':  renderGuidelines();  break;
      case 'search':      renderSearch();      break;
      default:            renderNotFound();    break;
    }
  }

  function updateNav() {
    var topPage = state.page === 'category' ? 'categories'
                : state.page === 'thread'   ? 'threads'
                : state.page === 'search'   ? ''
                : state.page;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
      link.classList.toggle('active', link.dataset.page === topPage);
    });
  }

  // ─── HOME PAGE ────────────────────────────────────────────────────────────
  function renderHome() {
    var recentThreads = LF.getRecentThreads(5);
    var totalThreads  = LF.getThreads().length;
    var totalReplies  = LF.getThreads().reduce(function (s, t) { return s + t.replies.length; }, 0);

    pageContainer.innerHTML = [
      '<div class="hero">',
        '<span class="hero-float">🇳🇴</span>',
        '<span class="hero-float">🇯🇵</span>',
        '<span class="hero-float">🇪🇸</span>',
        '<span class="hero-float">🇫🇷</span>',
        '<div style="position:relative;z-index:1;">',
          '<div class="hero-badge">✨ Community-driven Language Learning</div>',
          '<h1>Learn Languages<br>Together</h1>',
          '<p class="hero-sub">A vibrant community for language learners to discuss, discover, and grow. Explore curated resources, join discussions, and connect with fellow learners worldwide.</p>',
          '<div class="hero-actions">',
            '<button class="btn btn-primary btn-lg" id="hero-new-post">✏️ Start a Discussion</button>',
            '<button class="btn btn-secondary btn-lg" data-page="categories">🗂 Browse Categories</button>',
          '</div>',
          '<div class="hero-stats">',
            '<div class="hero-stat"><span class="hero-stat-num">' + LF.categories.length + '</span><span class="hero-stat-lbl">Languages</span></div>',
            '<div class="hero-stat"><span class="hero-stat-num">' + totalThreads + '</span><span class="hero-stat-lbl">Discussions</span></div>',
            '<div class="hero-stat"><span class="hero-stat-num">' + totalReplies + '</span><span class="hero-stat-lbl">Replies</span></div>',
            '<div class="hero-stat"><span class="hero-stat-num">' + LF.resources.length + '</span><span class="hero-stat-lbl">Resources</span></div>',
          '</div>',
        '</div>',
      '</div>',

      '<div class="home-grid">',
        // Left — recent threads
        '<section>',
          '<h2 class="section-heading">💬 Recent Discussions</h2>',
          recentThreads.length
            ? '<ul class="thread-list">' + recentThreads.map(threadCardHTML).join('') + '</ul>'
            : emptyState('No discussions yet', 'Be the first to start a conversation!', '💬'),
          '<a href="#" class="view-all" data-page="threads">View all discussions →</a>',
        '</section>',

        // Right — category sidebar
        '<aside>',
          '<div class="sidebar-card">',
            '<h2 class="section-heading">🗂 Browse by Language</h2>',
            '<ul class="category-mini-list">',
              LF.categories.map(function (cat) {
                return '<li>' +
                  '<a href="#" class="category-mini-item" data-page="category" data-cat="' + cat.id + '" style="--cat-color:' + cat.color + '">' +
                    '<span class="cat-flag">' + cat.flag + '</span>' +
                    '<div class="cat-mini-info">' +
                      '<strong>' + LF.escapeHtml(cat.name) + '</strong>' +
                      '<small>' + LF.getThreadCount(cat.id) + ' discussions</small>' +
                    '</div>' +
                  '</a>' +
                '</li>';
              }).join(''),
            '</ul>',
            '<a href="#" class="view-all" data-page="categories">All categories →</a>',
          '</div>',
        '</aside>',
      '</div>',

      // Quick links bar
      '<div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;padding:2.5rem 0 0;">',
        quickLink('📚', 'Learning Resources', 'resources'),
        quickLink('📋', 'Community Guidelines', 'guidelines'),
        quickLink('✏️', 'Start a Discussion', 'new-thread'),
      '</div>',
    ].join('');

    bindNavigationLinks();
    document.getElementById('hero-new-post').addEventListener('click', openNewThreadModal);
  }

  function quickLink(icon, label, page) {
    return '<a href="#" class="quick-link-card" data-page="' + page + '">' +
      '<span style="font-size:1.8rem;">' + icon + '</span>' +
      '<span style="font-size:.9rem;font-weight:600;color:var(--clr-text);">' + label + '</span>' +
    '</a>';
  }

  // ─── CATEGORIES PAGE ──────────────────────────────────────────────────────
  function renderCategories() {
    pageContainer.innerHTML = [
      '<div class="page-header">',
        '<h1 class="page-title">Browse Categories</h1>',
        '<p class="page-subtitle">Choose a language to explore discussions, resources, and learning materials from our community.</p>',
      '</div>',
      '<ul class="categories-grid">',
        LF.categories.map(function (cat) {
          var count = LF.getThreadCount(cat.id);
          return '<li>' +
            '<div class="category-card" data-page="category" data-cat="' + cat.id + '" style="--cat-color:' + cat.color + '" role="button" tabindex="0" aria-label="View ' + LF.escapeHtml(cat.name) + ' discussions">' +
              '<div class="category-card-header">' +
                '<div class="cat-flag-lg">' + cat.flag + '</div>' +
                '<div>' +
                  '<div class="cat-name">' + LF.escapeHtml(cat.name) + '</div>' +
                  '<div class="cat-thread-count">' +
                    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
                    count + ' discussion' + (count !== 1 ? 's' : '') +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<p class="cat-desc">' + LF.escapeHtml(cat.description) + '</p>' +
              '<div class="cat-actions">' +
                '<span class="btn btn-sm btn-primary">View Discussions</span>' +
                '<span class="btn btn-sm btn-ghost">Resources</span>' +
              '</div>' +
            '</div>' +
          '</li>';
        }).join(''),
      '</ul>',
    ].join('');

    // Category cards navigation
    pageContainer.querySelectorAll('.category-card').forEach(function (card) {
      function activate() { navigate('category', { categoryId: card.dataset.cat }); }
      card.addEventListener('click', activate);
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
    });
    bindNavigationLinks();
  }

  // ─── CATEGORY DETAIL PAGE ─────────────────────────────────────────────────
  function renderCategory() {
    var cat = LF.getCategory(state.categoryId);
    if (!cat) { renderNotFound(); return; }
    var threads = LF.getThreadsByCategory(cat.id);

    pageContainer.innerHTML = [
      breadcrumb([{ label: 'Categories', page: 'categories' }, { label: cat.flag + ' ' + cat.name }]),
      '<div class="category-hero" style="--cat-color:' + cat.color + '">',
        '<div class="category-hero-accent"></div>',
        '<div class="category-hero-content">',
          '<div class="category-hero-flag">' + cat.flag + '</div>',
          '<div>',
            '<h1 class="page-title" style="margin-bottom:.5rem;">' + cat.flag + ' ' + LF.escapeHtml(cat.name) + '</h1>',
            '<p class="page-subtitle" style="margin-bottom:1rem;">' + LF.escapeHtml(cat.description) + '</p>',
            '<div class="page-header-actions">',
              '<button class="btn btn-primary" id="cat-new-thread">✏️ Start a Discussion</button>',
              '<button class="btn btn-ghost" data-page="resources" data-res-cat="' + cat.id + '">📚 Resources</button>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',

      threads.length
        ? '<ul class="thread-list">' + threads.slice().reverse().map(threadCardHTML).join('') + '</ul>'
        : emptyState('No discussions yet in ' + cat.name, 'Start the first conversation in this category!', cat.flag),
    ].join('');

    document.getElementById('cat-new-thread').addEventListener('click', function () {
      openNewThreadModal(cat.id);
    });
    bindNavigationLinks();
  }

  // ─── ALL THREADS PAGE ─────────────────────────────────────────────────────
  function renderThreads() {
    var threads = LF.getThreads().slice().reverse();

    pageContainer.innerHTML = [
      '<div class="page-header">',
        '<h1 class="page-title">All Discussions</h1>',
        '<p class="page-subtitle">Browse all community threads across every language category.</p>',
        '<div class="page-header-actions">',
          '<button class="btn btn-primary" id="all-new-thread">✏️ Start a Discussion</button>',
        '</div>',
      '</div>',
      threads.length
        ? '<ul class="thread-list">' + threads.map(threadCardHTML).join('') + '</ul>'
        : emptyState('No discussions yet', 'Be the first to start a conversation!', '💬'),
    ].join('');

    document.getElementById('all-new-thread').addEventListener('click', function () { openNewThreadModal(); });
    bindNavigationLinks();
  }

  // ─── SINGLE THREAD PAGE ───────────────────────────────────────────────────
  function renderThread() {
    var thread = LF.getThread(state.threadId);
    if (!thread) { renderNotFound(); return; }
    var cat = LF.getCategory(thread.categoryId);
    var badgeHTML = cat ? categoryBadge(cat) : '';

    pageContainer.innerHTML = [
      '<div class="thread-detail-layout">',
        breadcrumb([
          { label: 'Discussions', page: 'threads' },
          cat ? { label: cat.flag + ' ' + cat.name, page: 'category', cat: cat.id } : null,
          { label: 'Discussion' },
        ].filter(Boolean)),

        // Thread title & meta
        '<div class="page-header">',
          '<h1 class="page-title" style="font-size:1.6rem;">' + LF.escapeHtml(thread.title) + '</h1>',
          '<div class="thread-footer" style="margin-top:.5rem;">',
            badgeHTML,
            '<span class="thread-author">by <strong>' + LF.escapeHtml(thread.author) + '</strong></span>',
            '<span class="thread-date">' + LF.formatDate(thread.date) + '</span>',
          '</div>',
        '</div>',

        // Original post
        '<article class="post post--original">',
          '<div class="post-header">',
            '<div class="post-avatar">' + LF.avatarLetter(thread.author) + '</div>',
            '<div>',
              '<div class="post-author-name">' + LF.escapeHtml(thread.author) + '</div>',
              '<div class="post-meta">Original post · ' + LF.formatDate(thread.date) + '</div>',
            '</div>',
          '</div>',
          '<div class="post-body">' + LF.escapeHtml(thread.body) + '</div>',
        '</article>',

        // Replies
        thread.replies.length > 0
          ? '<h2 class="replies-heading"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' + thread.replies.length + ' ' + (thread.replies.length === 1 ? 'Reply' : 'Replies') + '</h2>'
          : '<h2 class="replies-heading">No replies yet — be the first!</h2>',

        '<div id="replies-list">',
          thread.replies.map(replyHTML).join(''),
        '</div>',

        // Reply form
        '<div class="reply-form-card">',
          '<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:1.25rem;">💬 Leave a Reply</h3>',
          '<div id="reply-errors" class="error-banner" hidden></div>',
          '<form id="reply-form" novalidate>',
            '<input type="hidden" name="threadId" value="' + LF.escapeHtml(thread.id) + '" />',
            '<div class="form-group">',
              '<label for="reply-author">Display Name <span class="required">*</span></label>',
              '<input type="text" id="reply-author" name="author" placeholder="e.g. LinguistLearner" maxlength="50" required />',
            '</div>',
            '<div class="form-group" style="position:relative;">',
              '<label for="reply-body">Your Reply <span class="required">*</span></label>',
              '<textarea id="reply-body" name="body" rows="5" placeholder="Share your thoughts, tips, or resources…" maxlength="2000" required></textarea>',
              '<span class="char-count" id="reply-body-count">0 / 2000</span>',
            '</div>',
            '<div class="form-actions">',
              '<button type="submit" class="btn btn-primary">Post Reply</button>',
              '<span class="form-note" style="margin-top:0;margin-left:.5rem;">Please follow the <a href="#" data-page="guidelines">Community Guidelines</a>.</span>',
            '</div>',
          '</form>',
        '</div>',
      '</div>',
    ].join('');

    // Wire up reply form
    var replyForm = document.getElementById('reply-form');
    var replyBodyTA = document.getElementById('reply-body');
    var replyBodyCount = document.getElementById('reply-body-count');

    replyBodyTA.addEventListener('input', function () {
      replyBodyCount.textContent = replyBodyTA.value.length + ' / 2000';
      autoResize(replyBodyTA);
    });

    replyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var author = document.getElementById('reply-author').value.trim();
      var body   = replyBodyTA.value.trim();
      var errs   = [];
      if (author.length < 2 || author.length > 50) errs.push('Display name must be 2–50 characters.');
      if (body.length < 5 || body.length > 2000) errs.push('Reply must be 5–2000 characters.');
      var errBanner = document.getElementById('reply-errors');
      if (errs.length) {
        errBanner.innerHTML = '<ul>' + errs.map(function (e) { return '<li>' + LF.escapeHtml(e) + '</li>'; }).join('') + '</ul>';
        errBanner.hidden = false;
        errBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      errBanner.hidden = true;
      LF.addReply(thread.id, author, body);
      showToast('✅ Reply posted!', 'success');
      navigate('thread', { threadId: thread.id });
    });

    bindNavigationLinks();
  }

  // ─── RESOURCES PAGE ───────────────────────────────────────────────────────
  function renderResources() {
    var filter = state.resourceFilter;
    var resources = filter ? LF.resources.filter(function (r) { return r.categoryId === filter; }) : LF.resources.slice();

    pageContainer.innerHTML = [
      '<div class="page-header">',
        '<h1 class="page-title">📚 Learning Resources</h1>',
        '<p class="page-subtitle">Curated, properly attributed resources — dictionaries, courses, literary archives, and more.</p>',
      '</div>',

      // Filter bar
      '<div class="filter-bar">',
        '<label for="res-filter">Filter by language:</label>',
        '<select id="res-filter">',
          '<option value="">All Languages</option>',
          LF.categories.map(function (cat) {
            return '<option value="' + cat.id + '"' + (filter === cat.id ? ' selected' : '') + '>' + cat.flag + ' ' + LF.escapeHtml(cat.name) + '</option>';
          }).join(''),
        '</select>',
        filter ? '<button class="btn btn-sm btn-ghost" id="clear-filter">✕ Clear</button>' : '',
      '</div>',

      resources.length
        ? '<ul class="resource-grid">' + resources.map(resourceCardHTML).join('') + '</ul>'
        : emptyState('No resources for this language yet', 'Try a different filter or check back later.', '📚'),
    ].join('');

    document.getElementById('res-filter').addEventListener('change', function () {
      state.resourceFilter = this.value;
      renderResources();
    });

    var clearBtn = document.getElementById('clear-filter');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        state.resourceFilter = '';
        renderResources();
      });
    }

    bindNavigationLinks();
  }

  // ─── GUIDELINES PAGE ──────────────────────────────────────────────────────
  function renderGuidelines() {
    pageContainer.innerHTML = [
      '<div class="guidelines-layout">',
        '<div class="page-header">',
          '<h1 class="page-title">📋 Community Guidelines</h1>',
          '<p class="page-subtitle">Our shared rules for a respectful, helpful, and inclusive language-learning community.</p>',
        '</div>',

        '<div class="guidelines-card">',
          LF.guidelines.map(function (g) {
            return '<div class="guideline-item">' +
              '<div class="guideline-num" title="Rule ' + g.num + '">' + g.emoji + '</div>' +
              '<div>' +
                '<div class="guideline-title">' + g.num + '. ' + LF.escapeHtml(g.title) + '</div>' +
                '<p class="guideline-body">' + LF.escapeHtml(g.body) + '</p>' +
              '</div>' +
            '</div>';
          }).join(''),
        '</div>',

        '<div class="guidelines-callout">',
          '<h2>🌍 A Note on Language and Culture</h2>',
          '<p>Languages are living expressions of culture, history, and identity. Approach discussions with curiosity and humility. There are no "better" or "worse" languages — only different ones, each with its own richness.</p>',
          '<div class="page-header-actions" style="justify-content:center;">',
            '<button class="btn btn-primary" data-page="threads">💬 Browse Discussions</button>',
            '<button class="btn btn-secondary" data-page="categories">🗂 Explore Categories</button>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');

    bindNavigationLinks();
  }

  // ─── SEARCH RESULTS PAGE ──────────────────────────────────────────────────
  function renderSearch() {
    var results = LF.search(state.searchQuery);
    var total   = results.threads.length + results.resources.length;

    pageContainer.innerHTML = [
      '<div class="search-results-wrap">',
        '<div class="page-header">',
          '<h1 class="page-title">Search Results</h1>',
          '<p class="search-results-meta">',
            total + ' result' + (total !== 1 ? 's' : '') + ' for <strong>"' + LF.escapeHtml(state.searchQuery) + '"</strong>',
          '</p>',
        '</div>',

        total === 0
          ? '<div class="no-results"><div class="no-results-icon">🔍</div><p>No results found. Try a different search term.</p></div>'
          : [
              results.threads.length
                ? '<h2 class="section-heading">💬 Discussions (' + results.threads.length + ')</h2>' +
                  '<ul class="thread-list">' + results.threads.map(threadCardHTML).join('') + '</ul>'
                : '',
              results.resources.length
                ? '<h2 class="section-heading" style="margin-top:2rem;">📚 Resources (' + results.resources.length + ')</h2>' +
                  '<ul class="resource-grid">' + results.resources.map(resourceCardHTML).join('') + '</ul>'
                : '',
            ].join(''),
      '</div>',
    ].join('');

    bindNavigationLinks();
  }

  // ─── NOT FOUND ────────────────────────────────────────────────────────────
  function renderNotFound() {
    pageContainer.innerHTML = [
      '<div class="error-page">',
        '<div class="error-code">404</div>',
        '<h1>Page Not Found</h1>',
        '<p>The page you are looking for does not exist.</p>',
        '<button class="btn btn-primary" data-page="home">🏠 Return Home</button>',
      '</div>',
    ].join('');
    bindNavigationLinks();
  }

  // ─── HTML HELPERS ─────────────────────────────────────────────────────────
  function threadCardHTML(thread) {
    var cat = LF.getCategory(thread.categoryId);
    return '<li class="thread-card" data-page="thread" data-tid="' + thread.id + '" role="button" tabindex="0">' +
      '<div class="thread-card-top">' +
        (cat ? categoryBadge(cat) : '') +
        '<span class="thread-date">' + LF.formatDate(thread.date) + '</span>' +
      '</div>' +
      '<a href="#" class="thread-title-link" data-page="thread" data-tid="' + thread.id + '">' + LF.escapeHtml(thread.title) + '</a>' +
      '<p class="thread-excerpt">' + LF.escapeHtml(thread.body) + '</p>' +
      '<div class="thread-footer">' +
        '<span class="thread-author">by ' + LF.escapeHtml(thread.author) + '</span>' +
        '<span class="reply-pill">' +
          '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
          thread.replies.length + ' ' + (thread.replies.length === 1 ? 'reply' : 'replies') +
        '</span>' +
      '</div>' +
    '</li>';
  }

  function replyHTML(reply) {
    return '<article class="post post--reply" id="reply-' + reply.id + '">' +
      '<div class="post-header">' +
        '<div class="post-avatar" style="width:32px;height:32px;font-size:.85rem;">' + LF.avatarLetter(reply.author) + '</div>' +
        '<div>' +
          '<div class="post-author-name">' + LF.escapeHtml(reply.author) + '</div>' +
          '<div class="post-meta">' + LF.formatDate(reply.date) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="post-body">' + LF.escapeHtml(reply.body) + '</div>' +
    '</article>';
  }

  function resourceCardHTML(res) {
    var cat = LF.getCategory(res.categoryId);
    return '<li class="resource-card">' +
      '<div class="resource-card-header">' +
        '<div class="resource-icon">' + (res.icon || '🔗') + '</div>' +
        '<div>' +
          '<div class="resource-title"><a href="' + LF.escapeHtml(res.url) + '" target="_blank" rel="noopener noreferrer">' + LF.escapeHtml(res.title) + ' ↗</a></div>' +
          '<div class="resource-meta">' +
            (cat ? categoryBadge(cat) : '') +
            '<span class="resource-type-pill">' + LF.escapeHtml(res.type) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<p class="resource-desc">' + LF.escapeHtml(res.description) + '</p>' +
      '<div class="resource-attr"><strong>Source:</strong> ' + LF.escapeHtml(res.attribution) + '</div>' +
    '</li>';
  }

  function categoryBadge(cat) {
    return '<span class="badge" style="background-color:' + cat.color + '18;color:' + cat.color + ';border-color:' + cat.color + '40;" data-page="category" data-cat="' + cat.id + '">' +
      cat.flag + ' ' + LF.escapeHtml(cat.name) +
    '</span>';
  }

  function breadcrumb(items) {
    return '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      items.map(function (item, idx) {
        var isLast = idx === items.length - 1;
        var content = isLast
          ? '<span>' + item.label + '</span>'
          : '<a href="#" data-page="' + item.page + '"' + (item.cat ? ' data-cat="' + item.cat + '"' : '') + '>' + item.label + '</a>';
        return content + (isLast ? '' : '<span class="breadcrumb-sep">›</span>');
      }).join('') +
    '</nav>';
  }

  function emptyState(title, sub, icon) {
    return '<div class="empty-state">' +
      '<div class="empty-state-icon">' + icon + '</div>' +
      '<h3>' + LF.escapeHtml(title) + '</h3>' +
      '<p>' + LF.escapeHtml(sub) + '</p>' +
      '<button class="btn btn-primary" id="empty-new-thread">✏️ Start a Discussion</button>' +
    '</div>';
  }

  // ─── NAVIGATION BINDING ───────────────────────────────────────────────────
  function bindNavigationLinks() {
    pageContainer.querySelectorAll('[data-page]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        handleDataPage(el);
      });
    });

    // Thread cards (whole card clickable)
    pageContainer.querySelectorAll('.thread-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        // Don't double-fire if inner link was clicked
        if (e.target.closest('.badge')) return;
        navigate('thread', { threadId: card.dataset.tid });
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('thread', { threadId: card.dataset.tid }); }
      });
    });

    // Empty state new thread button
    var emptyBtn = document.getElementById('empty-new-thread');
    if (emptyBtn) emptyBtn.addEventListener('click', openNewThreadModal);

    // Quick link cards
    pageContainer.querySelectorAll('.quick-link-card').forEach(function (el) {
      el.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:.6rem;padding:1.5rem 2rem;background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-xl);cursor:pointer;transition:box-shadow var(--ease-normal),transform var(--ease-fast);text-decoration:none;';
      el.addEventListener('mouseenter', function () { el.style.boxShadow = 'var(--shadow-md)'; el.style.transform = 'translateY(-2px)'; });
      el.addEventListener('mouseleave', function () { el.style.boxShadow = ''; el.style.transform = ''; });
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var p = el.dataset.page;
        if (p === 'new-thread') { openNewThreadModal(); } else { navigate(p); }
      });
    });
  }

  function handleDataPage(el) {
    var page = el.dataset.page;
    if (page === 'category') {
      navigate('category', { categoryId: el.dataset.cat });
    } else if (page === 'thread') {
      navigate('thread', { threadId: el.dataset.tid });
    } else if (page === 'resources' && el.dataset.resCat) {
      navigate('resources', { category: el.dataset.resCat });
    } else if (page === 'new-thread') {
      openNewThreadModal();
    } else {
      navigate(page);
    }
  }

  // ─── HEADER DELEGATION ────────────────────────────────────────────────────
  document.querySelector('.site-header').addEventListener('click', function (e) {
    var el = e.target.closest('[data-page]');
    if (el) { e.preventDefault(); handleDataPage(el); }
  });

  document.querySelector('.site-footer').addEventListener('click', function (e) {
    var el = e.target.closest('[data-page]');
    if (el) { e.preventDefault(); handleDataPage(el); }
  });

  document.querySelector('.mobile-nav').addEventListener('click', function (e) {
    var el = e.target.closest('[data-page]');
    if (el) {
      e.preventDefault();
      closeMobileNav();
      handleDataPage(el);
    }
  });

  // ─── NEW THREAD MODAL ─────────────────────────────────────────────────────
  function openNewThreadModal(preselectCatId) {
    // Populate category select
    threadCategory.innerHTML = '<option value="">— Select a category —</option>' +
      LF.categories.map(function (cat) {
        return '<option value="' + cat.id + '"' + (preselectCatId === cat.id ? ' selected' : '') + '>' + cat.flag + ' ' + cat.name + '</option>';
      }).join('');

    newThreadModal.classList.add('open');
    newThreadModal.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { threadCategory.focus(); }, 100);
  }

  function closeNewThreadModal() {
    newThreadModal.classList.remove('open');
    newThreadModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    newThreadForm.reset();
    titleCount.textContent = '0 / 200';
    bodyCount.textContent  = '0 / 5000';
    modalErrors.hidden = true;
  }

  document.getElementById('new-thread-header-btn').addEventListener('click', function () { openNewThreadModal(); });
  document.getElementById('mobile-new-thread-btn').addEventListener('click', function () { closeMobileNav(); openNewThreadModal(); });
  modalClose.addEventListener('click', closeNewThreadModal);
  newThreadModal.addEventListener('click', function (e) { if (e.target === newThreadModal) closeNewThreadModal(); });
  document.querySelectorAll('.modal-cancel, .modal-cancel-link').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); closeNewThreadModal(); });
  });

  // Char counts
  threadTitle.addEventListener('input', function () { titleCount.textContent = threadTitle.value.length + ' / 200'; });
  threadBody.addEventListener('input',  function () { bodyCount.textContent  = threadBody.value.length  + ' / 5000'; autoResize(threadBody); });

  newThreadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var catId  = threadCategory.value;
    var title  = threadTitle.value.trim();
    var body   = threadBody.value.trim();
    var author = threadAuthor.value.trim();
    var errs   = [];
    if (!catId)                              errs.push('Please select a language category.');
    if (title.length < 5 || title.length > 200) errs.push('Title must be 5–200 characters.');
    if (body.length < 20 || body.length > 5000) errs.push('Post body must be 20–5000 characters.');
    if (author.length < 2 || author.length > 50) errs.push('Display name must be 2–50 characters.');

    if (errs.length) {
      modalErrors.innerHTML = '<ul>' + errs.map(function (e) { return '<li>' + LF.escapeHtml(e) + '</li>'; }).join('') + '</ul>';
      modalErrors.hidden = false;
      return;
    }
    modalErrors.hidden = true;
    var thread = LF.createThread(catId, title, body, author);
    closeNewThreadModal();
    showToast('🎉 Discussion posted!', 'success');
    navigate('thread', { threadId: thread.id });
  });

  // ─── SEARCH ───────────────────────────────────────────────────────────────
  searchToggle.addEventListener('click', function () {
    var isOpen = searchBarWrap.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));
    searchBarWrap.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) { globalSearch.focus(); }
  });

  globalSearch.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchBarWrap.classList.remove('open');
      searchToggle.setAttribute('aria-expanded', 'false');
      searchBarWrap.setAttribute('aria-hidden', 'true');
    }
    if (e.key === 'Enter' && globalSearch.value.trim()) {
      searchBarWrap.classList.remove('open');
      searchToggle.setAttribute('aria-expanded', 'false');
      searchBarWrap.setAttribute('aria-hidden', 'true');
      navigate('search', { query: globalSearch.value.trim() });
      globalSearch.value = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchBarWrap.classList.remove('open');
      closeMobileNav();
    }
  });

  // ─── MOBILE NAV ───────────────────────────────────────────────────────────
  function closeMobileNav() {
    mobileNavOverlay.classList.remove('open');
    mobileNavOverlay.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  mobileMenuBtn.addEventListener('click', function () {
    var isOpen = mobileNavOverlay.classList.toggle('open');
    mobileNavOverlay.setAttribute('aria-hidden', String(!isOpen));
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  });

  mobileNavClose.addEventListener('click', closeMobileNav);
  mobileNavOverlay.addEventListener('click', function (e) {
    if (e.target === mobileNavOverlay) closeMobileNav();
  });

  // ─── THEME TOGGLE ─────────────────────────────────────────────────────────
  themeToggle.addEventListener('click', toggleTheme);

  // ─── SCROLL TO TOP ────────────────────────────────────────────────────────
  window.addEventListener('scroll', function () {
    var shouldShow = window.scrollY > 300;
    scrollTopBtn.hidden = !shouldShow;

    // Scrolled header shadow
    document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── TOAST ────────────────────────────────────────────────────────────────
  function showToast(message, type) {
    var toast = document.createElement('div');
    toast.className = 'toast ' + (type || '');
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(function () {
      toast.classList.add('removing');
      setTimeout(function () { toast.remove(); }, 350);
    }, 3000);
  }

  // ─── UTILS ────────────────────────────────────────────────────────────────
  function autoResize(ta) {
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────
  function init() {
    initTheme();

    // Seed localStorage with seed threads if empty
    if (!localStorage.getItem(LF.STORAGE_KEY)) {
      LF.saveThreads(LF.seedThreads.slice());
    }

    // Handle hash-based routing for GitHub Pages
    function routeFromHash() {
      var hash = window.location.hash.replace('#', '') || '';
      if (!hash || hash === '/') { navigate('home'); return; }
      var parts = hash.split('/').filter(Boolean);
      if (parts[0] === 'categories' && parts[1]) { navigate('category', { categoryId: parts[1] }); }
      else if (parts[0] === 'threads' && parts[1]) { navigate('thread', { threadId: parts[1] }); }
      else if (parts[0] === 'resources') { navigate('resources', { category: parts[1] || '' }); }
      else if (LF.categories.some(function (c) { return c.id === parts[0]; })) { navigate('category', { categoryId: parts[0] }); }
      else { navigate(parts[0] || 'home'); }
    }

    routeFromHash();
  }

  init();
})();
