/* =========================================================
   main.js — Abdullah / AI Agent
   Theme toggle + overlay menu + interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Theme Toggle ───
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    updateIcon(saved);
  }

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }



  // ─── Smooth Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 30,
          behavior: 'smooth'
        });
      }
    });
  });

  // ─── Scroll Reveal ───
  const items = document.querySelectorAll('.anim-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
  items.forEach(item => observer.observe(item));

  // ─── Counter ───
  const counters = document.querySelectorAll('.counter');
  const counted = new Set();
  const ease = t => 1 - Math.pow(1 - t, 4);

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted.has(entry.target)) {
        counted.add(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const start = performance.now();
        const duration = 1800;
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(target * ease(progress));
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        };
        requestAnimationFrame(step);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

});
