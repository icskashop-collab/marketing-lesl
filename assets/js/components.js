/* ============================================================
   ALEX LESLIE — components.js
   Общий хедер и подвал. Вставляются через innerHTML без fetch.
   Работает с file:// и любым веб-сервером.
   ============================================================ */

/* ── ОПРЕДЕЛЯЕМ КОРНЕВОЙ ПУТЬ ── */
(function () {
  'use strict';

  /* Вычисляем относительный путь до корня сайта.
     Нужно для корректной работы ссылок из любой папки.
     BASE_DEPTH = 1 — для GitHub Pages репозитория /marketing-lesl/
     При деплое в корень домена замени BASE_DEPTH на 0. */
  function getRootPath() {
    var BASE_DEPTH = 1; // глубина base path: /marketing-lesl/ = 1 уровень
    var path = window.location.pathname;
    var parts = path.split('/').filter(function (p) { return p !== ''; });
    // Убираем имя файла
    if (parts.length > 0 && parts[parts.length - 1].indexOf('.') !== -1) {
      parts.pop();
    }
    var depth = Math.max(0, parts.length - BASE_DEPTH);
    if (depth === 0) return './';
    return '../'.repeat(depth);
  }

  var ROOT = getRootPath();

  /* ============================================================
     ХЕДЕР
     ============================================================ */
  var headerHTML = function () {
    return '\
<header class="header">\
  <div class="header__inner">\
    <!-- Логотип -->\
    <a href="' + ROOT + 'index.html" class="header__logo">ALEX<span>LESLIE</span></a>\
    <!-- Основная навигация -->\
    <nav class="header__nav" aria-label="Основная навигация">\
      <div class="nav-item">\
        <a href="' + ROOT + 'index.html" class="nav-link">Главная</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'alex.html" class="nav-link">Об Алексе</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'women/index.html" class="nav-link nav-link--arrow">Женское</a>\
        <div class="dropdown">\
          <a href="' + ROOT + 'women/index.html" class="dropdown__link">Женский хаб</a>\
          <a href="' + ROOT + 'women/how-to-marry.html" class="dropdown__link">Как выйти замуж</a>\
          <a href="' + ROOT + 'women/huntress.html" class="dropdown__link">Методология Охотницы</a>\
        </div>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'men/index.html" class="nav-link nav-link--arrow">Мужское</a>\
        <div class="dropdown">\
          <a href="' + ROOT + 'men/index.html" class="dropdown__link">Мужской хаб</a>\
          <a href="' + ROOT + 'men/seduction.html" class="dropdown__link">Стиль соблазнения</a>\
        </div>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'club.html" class="nav-link">Клуб</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'books.html" class="nav-link">Книги</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'media.html" class="nav-link">Медиа</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'blog.html" class="nav-link">Блог</a>\
      </div>\
      <div class="nav-item">\
        <a href="' + ROOT + 'contacts.html" class="nav-link">Контакты</a>\
      </div>\
    </nav>\
    <!-- Правая панель -->\
    <div class="header__right">\
      <a href="' + ROOT + 'marketing/index.html" class="header__marketing">Маркетинг</a>\
      <a href="' + ROOT + 'cabinet/index.html" class="btn btn-primary btn-sm">Войти</a>\
      <!-- Бургер (мобильный) -->\
      <button class="burger" id="burger-btn" aria-label="Открыть меню" aria-expanded="false">\
        <span></span><span></span><span></span>\
      </button>\
    </div>\
  </div>\
</header>\
<!-- Мобильное меню -->\
<nav class="mobile-menu" id="mobile-menu" aria-label="Мобильное меню">\
  <div class="mobile-section-title">Навигация</div>\
  <a href="' + ROOT + 'index.html" class="mobile-nav-link">Главная</a>\
  <a href="' + ROOT + 'alex.html" class="mobile-nav-link">Об Алексе</a>\
  <div class="mobile-section-title">Женское</div>\
  <a href="' + ROOT + 'women/index.html" class="mobile-nav-link">Женский хаб</a>\
  <a href="' + ROOT + 'women/how-to-marry.html" class="mobile-nav-link">Как выйти замуж</a>\
  <a href="' + ROOT + 'women/huntress.html" class="mobile-nav-link">Методология Охотницы</a>\
  <div class="mobile-section-title">Мужское</div>\
  <a href="' + ROOT + 'men/index.html" class="mobile-nav-link">Мужской хаб</a>\
  <a href="' + ROOT + 'men/seduction.html" class="mobile-nav-link">Стиль соблазнения</a>\
  <div class="mobile-section-title">Остальное</div>\
  <a href="' + ROOT + 'club.html" class="mobile-nav-link">Клуб</a>\
  <a href="' + ROOT + 'books.html" class="mobile-nav-link">Книги</a>\
  <a href="' + ROOT + 'products.html" class="mobile-nav-link">Продукты</a>\
  <a href="' + ROOT + 'events.html" class="mobile-nav-link">Мероприятия</a>\
  <a href="' + ROOT + 'media.html" class="mobile-nav-link">Медиа</a>\
  <a href="' + ROOT + 'blog.html" class="mobile-nav-link">Блог</a>\
  <a href="' + ROOT + 'contacts.html" class="mobile-nav-link">Контакты</a>\
  <div class="mobile-section-title">Сервисы</div>\
  <a href="' + ROOT + 'marketing/index.html" class="mobile-nav-link" style="color:var(--color-gold)">📊 Маркетинг</a>\
  <a href="' + ROOT + 'cabinet/index.html" class="mobile-nav-link">👤 Личный кабинет</a>\
</nav>';
  };

  /* ============================================================
     ПОДВАЛ
     ============================================================ */
  var footerHTML = function () {
    return '\
<footer class="footer">\
  <div class="container">\
    <div class="footer__grid">\
      <!-- Колонка 1: Бренд -->\
      <div>\
        <div class="footer__logo">ALEXLESLIE</div>\
        <p class="footer__slogan">Экосистема личного развития и отношений. Методологии для тех, кто играет в жизнь по своим правилам.</p>\
        <div class="footer__socials">\
          <a href="https://t.me/alexleslie" class="footer__social" target="_blank" rel="noopener" aria-label="Telegram">✈️</a>\
          <a href="https://youtube.com/@alexleslie" class="footer__social" target="_blank" rel="noopener" aria-label="YouTube">▶️</a>\
        </div>\
      </div>\
      <!-- Колонка 2: Направления -->\
      <div>\
        <div class="footer__title">Направления</div>\
        <div class="footer__links">\
          <a href="' + ROOT + 'women/index.html" class="footer__link">Женское направление</a>\
          <a href="' + ROOT + 'women/how-to-marry.html" class="footer__link">Как выйти замуж</a>\
          <a href="' + ROOT + 'women/huntress.html" class="footer__link">Методология Охотницы</a>\
          <a href="' + ROOT + 'men/index.html" class="footer__link">Мужское направление</a>\
          <a href="' + ROOT + 'men/seduction.html" class="footer__link">Стиль соблазнения</a>\
        </div>\
      </div>\
      <!-- Колонка 3: О проекте -->\
      <div>\
        <div class="footer__title">О проекте</div>\
        <div class="footer__links">\
          <a href="' + ROOT + 'alex.html" class="footer__link">Об Алексе</a>\
          <a href="' + ROOT + 'about.html" class="footer__link">О проекте</a>\
          <a href="' + ROOT + 'philosophy.html" class="footer__link">Философия</a>\
          <a href="' + ROOT + 'books.html" class="footer__link">Книги</a>\
          <a href="' + ROOT + 'club.html" class="footer__link">Закрытый клуб</a>\
          <a href="' + ROOT + 'events.html" class="footer__link">Мероприятия</a>\
          <a href="' + ROOT + 'cases.html" class="footer__link">Кейсы</a>\
          <a href="' + ROOT + 'media.html" class="footer__link">Медиа</a>\
          <a href="' + ROOT + 'blog.html" class="footer__link">Блог</a>\
        </div>\
      </div>\
      <!-- Колонка 4: Сервисы -->\
      <div>\
        <div class="footer__title">Сервисы</div>\
        <div class="footer__links">\
          <a href="' + ROOT + 'products.html" class="footer__link">Все продукты</a>\
          <a href="' + ROOT + 'app.html" class="footer__link">Приложение Охотница</a>\
          <a href="' + ROOT + 'cabinet/index.html" class="footer__link">Личный кабинет</a>\
          <a href="' + ROOT + 'knowledge.html" class="footer__link">База знаний</a>\
          <a href="' + ROOT + 'contacts.html" class="footer__link">Контакты</a>\
        </div>\
      </div>\
    </div>\
    <!-- Нижняя строка -->\
    <div class="footer__bottom">\
      <div class="footer__legal"><!-- TODO: ИП / ООО, ИНН, ОГРН -->&nbsp;© ' + new Date().getFullYear() + ' Alex Leslie. Все права защищены.</div>\
      <div class="footer__legal-links">\
        <a href="' + ROOT + 'offer.html" class="footer__legal-link">Публичная оферта</a>\
        <a href="' + ROOT + 'privacy.html" class="footer__legal-link">Политика конфиденциальности</a>\
        <a href="' + ROOT + 'refund.html" class="footer__legal-link">Возврат</a>\
      </div>\
    </div>\
  </div>\
</footer>';
  };

  /* ============================================================
     ПУБЛИЧНЫЕ ФУНКЦИИ
     ============================================================ */

  /**
   * Вставляет хедер в #site-header и подвал в #site-footer.
   * Вызывай после загрузки DOM.
   */
  window.insertComponents = function () {
    var headerEl = document.getElementById('site-header');
    var footerEl = document.getElementById('site-footer');

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

  /* ── Бургер-меню ── */
  function initBurger() {
    var btn  = document.getElementById('burger-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Закрывать при клике по ссылке */
    menu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Подсветка активного пункта меню ── */
  function highlightActiveNav() {
    var path = window.location.pathname;
    document.querySelectorAll('.nav-link, .dropdown__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      /* Нормализуем href для сравнения */
      var a = document.createElement('a');
      a.href = href;
      if (a.pathname === path || (path.endsWith('/') && a.pathname === path + 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── Scroll Reveal ── */
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

  /* ── Анимированные счётчики цифр ── */
  window.initCounters = function () {
    if (typeof IntersectionObserver === 'undefined') return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.dataset.target || el.innerText);
        var suffix = el.dataset.suffix || '';
        var duration = parseInt(el.dataset.duration || '1800');
        var start = performance.now();

        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
          var value = target * eased;
          el.innerText = (Number.isInteger(target)
            ? Math.round(value)
            : value.toFixed(1)) + suffix;
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

  /* ── Автоматическая инициализация при загрузке DOM ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.insertComponents);
  } else {
    window.insertComponents();
  }

}());
