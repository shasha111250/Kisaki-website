/* ================================================================
   Kisaki Official Website — JavaScript
   ================================================================ */

// --- Character Data ---
const characters = [
  {
    id: 'kisaki',
    name: 'Kisaki',
    description: '元气满满的女高中生，校服和常服两种装扮，表情丰富多变。',
    poses: '侧立 / 正立',
    costumes: '校服 / 常服',
    emotions: ['待机', '开心', '害羞', '惊讶', '坏笑', '欣慰'],
    voice: 'ja-JP',
    textLang: 'zh-CN',
    gradient: 'linear-gradient(135deg, #f9a8d4, #c084fc)',
    emoji: '🌸',
  },
];

// --- Render Characters ---
function renderCharacters() {
  const grid = document.getElementById('charactersGrid');
  if (!grid) return;

  grid.innerHTML = characters
    .map(
      (c) => `
    <div class="character-card reveal">
      <div class="character-card-image" style="background: ${c.gradient};">
        <span class="character-card-avatar">${c.emoji}</span>
      </div>
      <div class="character-card-body">
        <h3>${c.name}</h3>
        <p class="character-card-id">id: ${c.id}</p>
        <p style="font-size:.88rem;color:var(--gray-600);line-height:1.6;margin-bottom:8px;">${c.description}</p>
        <div class="character-card-tags">
          <span class="character-tag">${c.poses}</span>
          <span class="character-tag">${c.costumes}</span>
          <span class="character-tag lang">🎤 ${c.voice}</span>
          <span class="character-tag lang">🌐 ${c.textLang}</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  // trigger reveal animation
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible');
    });
  });
}

// --- Scroll Reveal Observer ---
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

// --- Navigation Scroll Effect ---
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let lastScroll = 0;
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// --- Mobile Nav Toggle ---
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close nav on link click
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --- Observe feature cards for staggered animation ---
function initFeatureReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.feature-card.reveal').forEach((el, i) => {
    observer.observe(el);
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderCharacters();
  initNavScroll();
  initMobileNav();
  initSmoothScroll();
  initScrollReveal();

  // Add reveal class to feature cards and other elements
  document.querySelectorAll('.feature-card').forEach((el) => el.classList.add('reveal'));
  document.querySelectorAll('.download-card').forEach((el) => el.classList.add('reveal'));
  document.querySelectorAll('.pack-card').forEach((el) => el.classList.add('reveal'));
  document.querySelectorAll('.guide-step').forEach((el) => el.classList.add('reveal'));
  document.querySelectorAll('.tech-item').forEach((el) => el.classList.add('reveal'));
});
