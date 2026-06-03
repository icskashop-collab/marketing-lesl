/* ============================================================
   ALEX LESLIE — components.js
   Общий хедер и подвал. Вставляются через innerHTML без fetch.
   Работает с file:// и любым веб-сервером.
   ============================================================ */

(function () {
  'use strict';

  var ROOT = 'https://icskashop-collab.github.io/marketing-lesl/';

  /* Загружаем theme-switcher.js только на веб-сервере */
  if (typeof window !== 'undefined' && window.location && window.location.protocol !== 'file:') {
    try {
      if (!document.querySelector('script[src*="theme-switcher"]')) {
        var ts = document.createElement('script');
        ts.src = ROOT + 'assets/js/theme-switcher.js';
        document.head.appendChild(ts);
      }
    } catch (e) {}
  }

  /* ============================================================
     ХЕДЕР
     ============================================================ */
  var headerHTML = function () {
    var h = '';
    h += '<header class="header">';
    h += '<div class="header__inner">';
    h += '<a href="' + ROOT + 'index.html" class="header__logo">ALEX<span>LESLIE</span></a>';
    h += '<nav class="header__nav" aria-label="Основная навигация">';
    h += '<div class="nav-item"><a href="' + ROOT + 'index.html" class="nav-link">Главная</a></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'alex.html" class="nav-link">Об Алексе</a></div>';
    h += '<div class="nav-item">';
    h += '<a href="' + ROOT + 'women/index.html" class="nav-link nav-link--arrow">Женское</a>';
    h += '<div class="dropdown">';
    h += '<a href="' + ROOT + 'women/index.html" class="dropdown__link">Женский хаб</a>';
    h += '<a href="' + ROOT + 'women/how-to-marry.html" class="dropdown__link">Как выйти замуж</a>';
    h += '<a href="' + ROOT + 'women/huntress.html" class="dropdown__link">Методология Охотницы</a>';
    h += '</div></div>';
    h += '<div class="nav-item">';
    h += '<a href="' + ROOT + 'men/index.html" class="nav-link nav-link--arrow">Мужское</a>';
    h += '<div class="dropdown">';
    h += '<a href="' + ROOT + 'men/index.html" class="dropdown__link">Мужской хаб</a>';
    h += '<a href="' + ROOT + 'men/seduction.html" class="dropdown__link">Стиль соблазнения</a>';
    h += '</div></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'club.html" class="nav-link">Клуб</a></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'books.html" class="nav-link">Книги</a></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'media.html" class="nav-link">Медиа</a></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'blog.html" class="nav-link">Блог</a></div>';
    h += '<div class="nav-item"><a href="' + ROOT + 'contacts.html" class="nav-link">Контакты</a></div>';
    h += '</nav>';
    h += '<div class="header__right">';
    h += '<div class="theme-switcher">';
    h += '<button class="theme-btn" data-theme-btn="dark">Dark</button>';
    h += '<button class="theme-btn" data-theme-btn="white">\u{1F90D} White</button>';
    h += '<button class="theme-btn" data-theme-btn="lesley">\u{1F608}</button>';
    h += '</div>';
    h += '<a href="' + ROOT + 'marketing/index.html" class="header__marketing">\u{1F4CA} Маркетинг</a>';
    h += '<a href="' + ROOT + 'cabinet/index.html" class="btn btn-primary btn-sm">Войти</a>';
    h += '<button class="burger" id="burger-btn" aria-label="Открыть меню" aria-expanded="false">';
    h += '<span></span><span></span><span></span>';
    h += '</button>';
    h += '</div>';
    h += '</div>';
    h += '</header>';
    h += '<nav class="mobile-menu" id="mobile-menu" aria-label="Мобильное меню">';
    h += '<div class="mobile-section-title">Навигация</div>';
    h += '<a href="' + ROOT + 'index.html" class="mobile-nav-link">Главная</a>';
    h += '<a href="' + ROOT + 'alex.html" class="mobile-nav-link">Об Алексе</a>';
    h += '<div class="mobile-section-title">Женское</div>';
    h += '<a href="' + ROOT + 'women/index.html" class="mobile-nav-link">Женский хаб</a>';
    h += '<a href="' + ROOT + 'women/how-to-marry.html" class="mobile-nav-link">Как выйти замуж</a>';
    h += '<a href="' + ROOT + 'women/huntress.html" class="mobile-nav-link">Методология Охотницы</a>';
    h += '<div class="mobile-section-title">Мужское</div>';
    h += '<a href="' + ROOT + 'men/index.html" class="mobile-nav-link">Мужской хаб</a>';
    h += '<a href="' + ROOT + 'men/seduction.html" class="mobile-nav-link">Стиль соблазнения</a>';
    h += '<div class="mobile-section-title">Остальное</div>';
    h += '<a href="' + ROOT + 'club.html" class="mobile-nav-link">Клуб</a>';
    h += '<a href="' + ROOT + 'books.html" class="mobile-nav-link">Книги</a>';
    h += '<a href="' + ROOT + 'products.html" class="mobile-nav-link">Продукты</a>';
    h += '<a href="' + ROOT + 'events.html" class="mobile-nav-link">Мероприятия</a>';
    h += '<a href="' + ROOT + 'media.html" class="mobile-nav-link">Медиа</a>';
    h += '<a href="' + ROOT + 'blog.html" class="mobile-nav-link">Блог</a>';
    h += '<a href="' + ROOT + 'contacts.html" class="mobile-nav-link">Контакты</a>';
    h += '<div class="mobile-section-title">Сервисы</div>';
    h += '<a href="' + ROOT + 'marketing/index.html" class="mobile-nav-link" style="color:var(--color-gold)">\u{1F4CA} Маркетинг</a>';
    h += '<a href="' + ROOT + 'cabinet/index.html" class="mobile-nav-link">\u{1F464} Личный кабинет</a>';
    h += '<div class="theme-switcher theme-switcher--mobile">';
    h += '<button class="theme-btn" data-theme-btn="dark">Dark</button>';
    h += '<button class="theme-btn" data-theme-btn="white">\u{1F90D} White</button>';
    h += '<button class="theme-btn" data-theme-btn="lesley">\u{1F608} Lesley</button>';
    h += '</div>';
    h += '</nav>';
    return h;
  };

  /* ============================================================
     ПОДВАЛ
     ============================================================ */
  var footerHTML = function () {
    var f = '';
    f += '<footer class="footer">';
    f += '<div class="container">';
    f += '<div class="footer__grid">';
    f += '<div>';
    f += '<div class="footer__logo">ALEXLESLIE</div>';
    f += '<p class="footer__slogan">Экосистема личного развития и отношений. Методологии для тех, кто играет в жизнь по своим правилам.</p>';
    f += '<div class="footer__socials">';
    f += '<a href="https://t.me/alexleslie" class="footer__social" target="_blank" rel="noopener" aria-label="Telegram">\u{2708}\u{FE0F}</a>';
    f += '<a href="https://youtube.com/@alexleslie" class="footer__social" target="_blank" rel="noopener" aria-label="YouTube">\u{25B6}\u{FE0F}</a>';
    f += '</div>';
    f += '</div>';
    f += '<div>';
    f += '<div class="footer__title">Направления</div>';
    f += '<div class="footer__links">';
    f += '<a href="' + ROOT + 'women/index.html" class="footer__link">Женское направление</a>';
    f += '<a href="' + ROOT + 'women/how-to-marry.html" class="footer__link">Как выйти замуж</a>';
    f += '<a href="' + ROOT + 'women/huntress.html" class="footer__link">Методология Охотницы</a>';
    f += '<a href="' + ROOT + 'men/index.html" class="footer__link">Мужское направление</a>';
    f += '<a href="' + ROOT + 'men/seduction.html" class="footer__link">Стиль соблазнения</a>';
    f += '</div>';
    f += '</div>';
    f += '<div>';
    f += '<div class="footer__title">О проекте</div>';
    f += '<div class="footer__links">';
    f += '<a href="' + ROOT + 'alex.html" class="footer__link">Об Алексе</a>';
    f += '<a href="' + ROOT + 'about.html" class="footer__link">О проекте</a>';
    f += '<a href="' + ROOT + 'philosophy.html" class="footer__link">Философия</a>';
    f += '<a href="' + ROOT + 'books.html" class="footer__link">Книги</a>';
    f += '<a href="' + ROOT + 'club.html" class="footer__link">Закрытый клуб</a>';
    f += '<a href="' + ROOT + 'events.html" class="footer__link">Мероприятия</a>';
    f += '<a href="' + ROOT + 'cases.html" class="footer__link">Кейсы</a>';
    f += '<a href="' + ROOT + 'media.html" class="footer__link">Медиа</a>';
    f += '<a href="' + ROOT + 'blog.html" class="footer__link">Блог</a>';
    f += '</div>';
    f += '</div>';
    f += '<div>';
    f += '<div class="footer__title">Сервисы</div>';
    f += '<div class="footer__links">';
    f += '<a href="' + ROOT + 'products.html" class="footer__link">Все продукты</a>';
    f += '<a href="' + ROOT + 'app.html" class="footer__link">Приложение Охотница</a>';
    f += '<a href="' + ROOT + 'cabinet/index.html" class="footer__link">Личный кабинет</a>';
    f += '<a href="' + ROOT + 'knowledge.html" class="footer__link">База знаний</a>';
    f += '<a href="' + ROOT + 'contacts.html" class="footer__link">Контакты</a>';
    f += '</div>';
    f += '</div>';
    f += '</div>';
    f += '<div class="footer__bottom">';
    f += '<div class="footer__legal">\u{00A9} ' + new Date().getFullYear() + ' Alex Leslie. Все права защищены.</div>';
    f += '<div class="footer__legal-links">';
    f += '<a href="' + ROOT + 'offer.html" class="footer__legal-link">Публичная оферта</a>';
    f += '<a href="' + ROOT + 'privacy.html" class="footer__legal-link">Политика конфиденциальности</a>';
    f += '<a href="' + ROOT + 'refund.html" class="footer__legal-link">Возврат</a>';
    f += '</div>';
    f += '</div>';
    f += '</div>';
    f += '</footer>';
    return f;
  };

  /* ============================================================
     ПУБЛИЧНЫЕ ФУНКЦИИ
     ============================================================ */
  window.insertComponents = function () {
    var headerEl = document.getElementById('site-header');
    var footerEl  = document.getElementById('site-footer');
    if (headerEl) {
      headerEl.innerHTML = headerHTML();
      initBurger();
      highlightActiveNav();
    }
    if (footerEl) {
      footerEl.innerHTML = footerHTML();
    }
    initScrollReveal();
  };

  function initBurger() {
    var btn  = document.getElementById('burger-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    menu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function highlightActiveNav() {
    try {
      var path = window.location.pathname;
      document.querySelectorAll('.nav-link, .dropdown__link').forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href) return;
        var a = document.createElement('a');
        a.href = href;
        if (a.pathname === path) link.classList.add('active');
      });
    } catch (e) {}
  }

  function initScrollReveal() {
    if (typeof IntersectionObserver === 'undefined') return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  }

  window.initCounters = function () {
    if (typeof IntersectionObserver === 'undefined') return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el       = entry.target;
        var target   = parseFloat(el.dataset.target || el.innerText);
        var suffix   = el.dataset.suffix || '';
        var duration = parseInt(el.dataset.duration || '1800', 10);
        var start    = performance.now();
        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased    = 1 - Math.pow(1 - progress, 3);
          var value    = target * eased;
          el.innerText = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      io.observe(el);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.insertComponents);
  } else {
    window.insertComponents();
  }

}());
