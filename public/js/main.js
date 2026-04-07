'use strict';

// Highlight the current nav link based on the URL pathname
(function highlightNav() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      href === '/' ? path === '/' : path.startsWith(href)
    ) {
      link.style.background = 'var(--color-primary-light)';
      link.style.color = 'var(--color-primary)';
    }
  });
})();

// Auto-expand textarea to fit content
(function autoResizeTextareas() {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(function (ta) {
    ta.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  });
})();

// Smooth scroll to hash anchors
(function smoothScrollToHash() {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
})();
