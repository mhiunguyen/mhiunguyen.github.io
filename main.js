// =====================
// LANG TOGGLE
// =====================
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset['en'];
  });
}

// =====================
// SCROLL FADE-IN
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

// =====================
// SMOOTH NAV ACTIVE
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#0a0a0a' : '';
  });
});

// =====================
// SKILL BAR ANIMATE ON SCROLL
// =====================
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.animation = 'none';
        void bar.offsetWidth; // reflow
        bar.style.animation = 'fillBar 1.2s ease-out forwards';
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid') .forEach(el => skillObserver.observe(el));

// Init: show hero section immediately
document.querySelector('.hero') && document.querySelector('.hero').classList.add('visible');
