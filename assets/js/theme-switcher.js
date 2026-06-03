/* ============================================================
   ALEX LESLIE — Theme Switcher
   3 режима: dark (default) / white / lesley
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'al_theme';
  var originalTexts = {};

  /* ── Определяем ключ текущей страницы ── */
  function getPageKey() {
    var path = window.location.pathname;
    var base = '/marketing-lesl/';
    if (path.indexOf(base) === 0) path = '/' + path.slice(base.length);
    return path.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  }

  /* ── Применить тему ── */
  function applyTheme(theme) {
    var html = document.documentElement;
    html.removeAttribute('data-theme');
    if (theme === 'white' || theme === 'lesley') {
      html.setAttribute('data-theme', theme);
    }
    /* Обновляем состояние кнопок */
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.classList.toggle('theme-btn--active', btn.getAttribute('data-theme-btn') === theme);
    });
    if (theme === 'lesley') {
      applyLesleyTexts();
    } else {
      restoreTexts();
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  /* ── Текстовые замены ── */
  function applyLesleyTexts() {
    restoreTexts(); /* сначала сброс */
    var pageKey = getPageKey();
    var sets = [LESLEY_GLOBAL, LESLEY_TEXTS[pageKey] || []];
    sets.forEach(function (list) {
      list.forEach(function (item) {
        var els = document.querySelectorAll(item.sel);
        els.forEach(function (el, idx) {
          var key = item.sel + '___' + idx;
          if (!originalTexts[key]) originalTexts[key] = { el: el, orig: el.innerHTML };
          if (item.html !== false) el.innerHTML = item.text;
          else el.textContent = item.text;
        });
      });
    });
  }

  function restoreTexts() {
    Object.keys(originalTexts).forEach(function (k) {
      var o = originalTexts[k];
      if (o && o.el) o.el.innerHTML = o.orig;
    });
    originalTexts = {};
  }

  /* ============================================================
     ГЛОБАЛЬНЫЕ ЗАМЕНЫ — работают на ВСЕХ страницах
     ============================================================ */
  var LESLEY_GLOBAL = [
    /* Кнопки и CTA */
    { sel: '.btn-primary',   text: 'Врываюсь',          html: false },
    { sel: '.btn-secondary', text: 'Хочу подробнее',    html: false },
    /* Подвал */
    { sel: '.footer__slogan', text: 'Экосистема для тех, кто играет по своим правилам. Остальным — налево.' }
  ];

  /* ============================================================
     ТЕКСТЫ ПО СТРАНИЦАМ
     ============================================================ */
  var LESLEY_TEXTS = {

    /* ── ГЛАВНАЯ ── */
    '/': [
      { sel: '.hero__eyebrow',
        text: '★&nbsp;&nbsp;20 лет.&nbsp; 10 книг.&nbsp; Результаты, о которых снимают документалки.' },
      { sel: '.hero__title',
        text: 'Хватит читать чужие<br>истории успеха.<br><em>Пора написать свою.</em>' },
      { sel: '.hero__sub',
        text: 'Методология, которая не обещает «стать лучшей версией себя». Она даёт конкретный результат — замужество, отношения, качество жизни.' },
      { sel: '.hero__path-btn--she .path-label',
        text: 'Охотница — та, которую выбирают' },
      { sel: '.hero__path-btn--he .path-label',
        text: 'Мастер — тот, кого помнят' },
      { sel: '.section-proof h2, .section-about h2',
        text: 'Они не верили. Пока жизнь не изменилась.' },
      { sel: '.paths-section h2',
        text: 'С кем ты сегодня?' },
      { sel: '.ecosystem-section h2',
        text: 'Вся экосистема. Один вход.' },
      { sel: '.cta-section h2',
        text: 'Первый шаг стоит ноль рублей.' }
    ],

    /* ── ОБ АЛЕКСЕ ── */
    '/alex': [
      { sel: '.alex-hero__eyebrow',
        text: '✦ Человек, который переписал правила игры' },
      { sel: '.alex-hero__title',
        text: '<span>Алекс</span><br>Лесли' },
      { sel: '.timeline-section h2',
        text: 'Как один человек создал целое движение' },
      { sel: '.media-section h2, .alex-media h2',
        text: 'Когда про тебя пишут СМИ — это уже не хобби. Это система.' }
    ],

    /* ── О ПРОЕКТЕ ── */
    '/about': [
      { sel: '.about-hero__eyebrow',
        text: '✦ Экосистема, которая меняет правила' },
      { sel: '.about-hero__title',
        text: 'Экосистема<br>Алекса Лесли' },
      { sel: '.pillars-section h2',
        text: 'Пять столпов. Один фундамент. Твой результат.' }
    ],

    /* ── ФИЛОСОФИЯ ── */
    '/philosophy': [
      { sel: '.phil-hero__title',
        text: 'Жизнь без<br>компромиссов' },
      { sel: '.phil-hero__sub, .philosophy-hero__sub',
        text: '«Жизнь без трусов» — это не метафора. Это принцип, которым живут тысячи учеников.' },
      { sel: '.phil-map-title, .phil-section h2',
        text: 'Правила игры, которые никто не объяснял' },
      { sel: '.phil-ideas h2',
        text: '6 идей, которые перевернут твоё мышление' }
    ],

    /* ── ЖЕНСКОЕ НАПРАВЛЕНИЕ ── */
    '/women': [
      { sel: '.women-hero__title',
        text: 'Охотницами не рождаются.<br>Ими становятся — когда решают.' },
      { sel: '.women-hero__sub',
        text: 'Пока другие ждут — Охотница действует. Методология, проверенная тысячами результатов.' },
      { sel: '.women-paths h2',
        text: 'Выбери свой путь к результату' },
      { sel: '.women-cta h2',
        text: 'Готова перестать ждать?' }
    ],

    /* ── КАК ВЫЙТИ ЗАМУЖ ── */
    '/women/how-to-marry': [
      { sel: '.htm-hero__title, .hero h1',
        text: 'Пока другие советуют «просто будь собой» —<br>методология Лесли приводит к загсу' },
      { sel: '.htm-hero__sub, .hero .sub',
        text: 'Единственная программа, где вместо советов — чёткий алгоритм. 90 дней. Один результат.' },
      { sel: '.pain-section h2',
        text: 'Узнаёшь себя? Тогда читай дальше.' },
      { sel: '.program-section h2',
        text: '90 дней. 9 модулей. Одна жизнь — твоя.' },
      { sel: '.final-cta h2',
        text: 'Готова перестать быть главной героиней чужого успеха?' }
    ],

    /* ── ОХОТНИЦА ── */
    '/women/huntress': [
      { sel: '.huntress-hero__title',
        text: '9 шагов.<br>90 дней.<br>Одна жизнь — твоя.' },
      { sel: '.steps-section h2',
        text: '9 шагов полной модели — без купюр' },
      { sel: '.scenarios-section h2',
        text: '6 сценариев. Один правильный.' },
      { sel: '.final-cta h2',
        text: 'Или продолжишь ждать принца на белом коне?' }
    ],

    /* ── МУЖСКОЕ НАПРАВЛЕНИЕ ── */
    '/men': [
      { sel: '.men-hero__title',
        text: 'Перестань быть фоном.<br>Стань легендой.' },
      { sel: '.men-hero__sub',
        text: 'Методология Мастера — для тех, кому надоело объяснять почему нет результата.' },
      { sel: '.levels-section h2',
        text: 'Четыре уровня игрока. На каком ты сейчас?' },
      { sel: '.men-cta h2',
        text: 'Готов перестать извиняться за то, что ты мужчина?' }
    ],

    /* ── СТИЛЬ СОБЛАЗНЕНИЯ ── */
    '/men/seduction': [
      { sel: '.sd-hero__title',
        text: 'Тот самый тренинг.<br>Без соплей. Только результат.' },
      { sel: '.sd-hero__sub',
        text: '3 дня — и ты либо меняешь подход к жизни, либо возвращаешься к старому. Большинство не возвращаются.' },
      { sel: '.pain-section h2',
        text: 'Если хотя бы одно — это про тебя, читай до конца.' },
      { sel: '.program-section h2',
        text: '3 дня. Полная перепрошивка.' },
      { sel: '.sd-final-cta h2',
        text: 'Ты уже принял решение.<br>Теперь нажми кнопку.' }
    ],

    /* ── КЛУБ ── */
    '/club': [
      { sel: '.club-hero__title',
        text: 'Академия Охотниц —<br>за закрытыми дверями' },
      { sel: '.club-inside h2',
        text: 'Что происходит внутри' },
      { sel: '.club-levels h2',
        text: 'Либо ты растёшь, либо деградируешь. Середины нет.' },
      { sel: '.club-cta h2',
        text: 'Твоё место внутри уже ждёт.' }
    ],

    /* ── КНИГИ ── */
    '/books': [
      { sel: '.books-hero__title',
        text: '10 книг,<br>которые не продают иллюзии' },
      { sel: '.books-cta h2',
        text: 'Книга даёт карту. Курс — провожает по ней.' }
    ],

    /* ── ПРОДУКТЫ ── */
    '/products': [
      { sel: '.products-hero__title',
        text: 'Всё что работает —<br>в одном месте' },
      { sel: '.products-hero__sub',
        text: 'Книги, курсы, клуб. Без воды, без лишнего. Только то, что приводит к результату.' }
    ],

    /* ── МЕРОПРИЯТИЯ ── */
    '/events': [
      { sel: '.ev-hero__title',
        text: 'Ближайшие события —<br>живые и настоящие' },
      { sel: '.ev-sub-cta h2',
        text: 'Узнавать первым? Легко.' }
    ],

    /* ── КЕЙСЫ ── */
    '/cases': [
      { sel: '.cases-hero__title',
        text: 'Они сомневались.<br>Они начали.<br>Смотри что вышло.' },
      { sel: '.megacases h2',
        text: 'Истории, которые переписали жизни' },
      { sel: '.cases-grid-section h2',
        text: 'Без фотошопа. Без приукрашивания.' }
    ],

    /* ── ОТЗЫВЫ ── */
    '/reviews': [
      { sel: '.reviews-hero__title',
        text: 'Они всё сказали сами' },
      { sel: '.reviews-sub h2',
        text: 'Написали своими словами. Мы не редактировали.' },
      { sel: '.reviews-cta h2',
        text: 'Станешь следующей историей?' }
    ],

    /* ── МЕДИА ── */
    '/media': [
      { sel: '.media-hero__title',
        text: 'Один канал. Один подкаст.<br>Один человек, который не боится говорить правду.' },
      { sel: '.media-cta h2',
        text: 'Видео — это intro. Курс — это трансформация.' }
    ],

    /* ── БЛОГ ── */
    '/blog': [
      { sel: '.blog-hero__title',
        text: 'Блог, который не советует «пить воду»' },
      { sel: '.blog-hero__sub',
        text: 'Реальные разборы. Реальная психология. Ничего лишнего.' }
    ],

    /* ── БАЗА ЗНАНИЙ ── */
    '/knowledge': [
      { sel: '.kb-hero__title',
        text: 'Словарь методологии:<br>всё как есть' },
      { sel: '.kb-hero__sub',
        text: 'FAQ, термины, разборы. Без воды и мотивационных постеров.' }
    ],

    /* ── ПРИЛОЖЕНИЕ ── */
    '/app': [
      { sel: '.app-hero__title',
        text: '«Охотница» —<br>методология<br>в твоём кармане' },
      { sel: '.app-features h2',
        text: 'Всё что нужно для результата — в одном приложении' },
      { sel: '.app-cta h2',
        text: 'Начни прямо сейчас. Да, прямо сейчас.' }
    ],

    /* ── КОНТАКТЫ ── */
    '/contacts': [
      { sel: '.contacts-hero__title',
        text: 'Есть вопрос?<br>Задавай.' },
      { sel: '.contacts-hero__sub',
        text: 'Не обещаем отвечать мгновенно. Обещаем отвечать честно.' }
    ],

    /* ── МАРКЕТИНГ ДАШБОРД ── */
    '/marketing': [
      { sel: '.marketing-hero__title',
        text: 'Маркетинг-дашборд: всё честно' },
      { sel: '.marketing-hero__sub',
        text: 'Цифры, стратегия, конкуренты. Без иллюзий.' }
    ],

    /* ── ЛИЧНЫЙ КАБИНЕТ ── */
    '/cabinet': [
      { sel: '.cabinet-greeting',
        text: 'Добро пожаловать. Ты уже внутри — это главное.' }
    ]
  };

  /* ============================================================
     ИНИЦИАЛИЗАЦИЯ
     ============================================================ */
  function init() {
    var saved = 'dark';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'dark'; } catch (e) {}
    applyTheme(saved);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-theme-btn]');
      if (!btn) return;
      applyTheme(btn.getAttribute('data-theme-btn'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Экспорт для внешнего использования */
  window.AlTheme = { apply: applyTheme };

}());
