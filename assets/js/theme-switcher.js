/* ============================================================
   ALEX LESLIE — Theme Switcher v3
   3 темы: dark / white / lesley. nth-таргетинг.
   ============================================================ */
(function () {
  'use strict';
  var STORAGE_KEY = 'al_theme';
  var originalTexts = {};

  function getPageKey() {
    var path = window.location.pathname;
    var bases = ['/marketing-lesl/', '/lesl-dash/'];
    for (var i = 0; i < bases.length; i++) {
      if (path.indexOf(bases[i]) === 0) { path = '/' + path.slice(bases[i].length); break; }
    }
    return path.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  }

  function applyTheme(theme) {
    var html = document.documentElement;
    html.removeAttribute('data-theme');
    if (theme === 'white' || theme === 'lesley') html.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.classList.toggle('theme-btn--active', btn.getAttribute('data-theme-btn') === theme);
    });
    if (theme === 'lesley') applyLesleyTexts();
    else restoreTexts();
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  function applyLesleyTexts() {
    restoreTexts();
    var pageKey = getPageKey();
    [LESLEY_GLOBAL, LESLEY_TEXTS[pageKey] || []].forEach(function (list) {
      list.forEach(function (item) {
        var els = document.querySelectorAll(item.sel);
        if (item.nth !== undefined) {
          var el = els[item.nth]; if (!el) return;
          var key = item.sel + '__n' + item.nth;
          if (!originalTexts[key]) originalTexts[key] = { el: el, orig: el.innerHTML };
          if (item.html === false) el.textContent = item.text; else el.innerHTML = item.text;
        } else {
          els.forEach(function (el, idx) {
            var key = item.sel + '__' + idx;
            if (!originalTexts[key]) originalTexts[key] = { el: el, orig: el.innerHTML };
            if (item.html === false) el.textContent = item.text; else el.innerHTML = item.text;
          });
        }
      });
    });
  }

  function restoreTexts() {
    Object.keys(originalTexts).forEach(function (k) {
      var o = originalTexts[k]; if (o && o.el) o.el.innerHTML = o.orig;
    });
    originalTexts = {};
  }

  var LESLEY_GLOBAL = [
    { sel: '.btn-primary',    text: 'Врываюсь',       html: false },
    { sel: '.btn-secondary',  text: 'Хочу подробнее', html: false },
    { sel: '.footer__slogan', text: 'Экосистема для тех, кто играет по своим правилам. Остальным — налево.' }
  ];


  var LESLEY_TEXTS = {
    '/': [
      { sel: '.hero__eyebrow', text: '★ 20 лет. 15 книг. 700 000+ экз. Тренинги на 4 континентах.' },
      { sel: '.hero__title', text: 'Методология, которая<br>изменила жизнь.<br><em>Твоя — следующая.</em>' },
      { sel: '.hero__sub', text: 'Алекс Лесли — основатель системы отношений. Не теория — рабочий алгоритм. 20 лет. 440+ тренингов. Forbes, Comedy Club, Daily Mail.' },
      { sel: '.section-title', nth: 0, text: 'Кейсы. Не обещания. Жизни.' },
      { sel: '.section-title', nth: 1, text: '20 лет. 15 книг. Один — целая система.' },
      { sel: '.section-title', nth: 2, text: 'Выбери, куда идти' },
      { sel: '.section-title', nth: 3, text: 'Экосистема — всё в одном месте' },
      { sel: '.section-title', nth: 4, text: '15 книг. 700 000+ экз. Читай.' },
      { sel: '.section-title', nth: 5, text: 'Клуб MAX. Тут не советуют — тут меняются.' },
      { sel: '.section-title', nth: 6, text: 'Ближайшие точки входа' },
      { sel: '.section-title', nth: 7, text: 'Лесли говорит. Читай.' },
      { sel: '.section-title', nth: 8, text: '440+ тренингов. 20 лет. Это не хобби.' },
      { sel: '.section-title', nth: 9, text: '500+ человек — которые решились.' },
      { sel: '.section-title', nth: 10, text: 'Готов? Пиши.' },
      { sel: '.section-subtitle', nth: 0, text: 'Сава, Рыбка, Comedy Club, Forbes. Не маркетинг — факты.' },
      { sel: '.section-subtitle', nth: 1, text: 'Офлайн, онлайн, один на один. Три способа начать.' },
      { sel: '.section-subtitle', nth: 2, text: 'Миллион читателей. Не случайно.' },
      { sel: '.section-subtitle', nth: 3, text: 'Контент каждый день. Пока ты думаешь — другие делают.' },
      { sel: '.section-subtitle', nth: 4, text: 'С 12 до 21 МСК — ежедневно. Без дней тишины.' },
      { sel: '.section-subtitle', nth: 5, text: 'Москва. Варшава. Ибица. Не откладывай.' },
      { sel: '.section-subtitle', nth: 6, text: 'Влоги, кейсы, разборы — без купюр.' },
      { sel: '.section-subtitle', nth: 7, text: '20 лет в залах. Не в Instagram.' },
      { sel: '.section-subtitle', nth: 8, text: 'Реальные слова. Реальные люди. Не редактировали.' },
      { sel: '.path-block__text', nth: 0, text: 'Не советы — система. 9 шагов, по которым Сава вышла замуж за мультимиллионера. Forbes. Daily Mail.' },
      { sel: '.path-block__text', nth: 1, text: '43 уникальных упражнения. 20 лет отбора. Система для тех, кто хочет уровня Мастера — а не советов по флирту.' },
      { sel: '.case-card__text', nth: 0, text: 'Выпускница курса вышла замуж за мультимиллионера. Forbes. Daily Mail. Один из самых громких кейсов русскоязычного инфобизнеса.' },
      { sel: '.case-card__text', nth: 1, text: 'До тренинга — официант. После — Comedy Club снимает шоу по его сценарию.' },
      { sel: '.case-card__text', nth: 2, text: 'Показал упражнение из Мастерского тренинга на кастинге — попал в «Каникулы в Мексике».' },
      { sel: '.eco-card__desc', nth: 0, text: '700 000+ экземпляров. Переведены. Лучший первый шаг.' },
      { sel: '.eco-card__desc', nth: 1, text: '90 дней. 9 модулей. Методология Охотницы — та самая, по которой Сава вышла замуж.' },
      { sel: '.eco-card__desc', nth: 2, text: '3 дня. Москва. Уверенность на реальных технологиях — без воды.' },
      { sel: '.eco-card__desc', nth: 3, text: '23 дня. Мастерский стиль и кодекс жизни. Для тех, кто не согласен на среднее.' },
      { sel: '.eco-card__desc', nth: 4, text: '3 дня. От простого к сложному. Результат — сразу.' },
      { sel: '.eco-card__desc', nth: 5, text: 'Максимальная конверсия. Только для прошедших базовый уровень.' }
    ],
    '/alex': [
      { sel: '.alex-hero__eyebrow', text: '✦ Человек, который переписал правила игры' },
      { sel: '.alex-hero__name', text: 'Алекс<br>Лесли' },
      { sel: '.alex-hero__tagline', text: 'Мех-мат МГУ. Бросил. Создал методологию, по которой тысячи людей изменили жизнь. Не вдохновляет — доказывает.' },
      { sel: '.section-title', nth: 0, text: 'О нём пишут не потому что он просит' },
      { sel: '.section-title', nth: 1, text: 'История одного решения — и 20 лет системы' },
      { sel: '.section-title', nth: 2, text: '15 книг. Прочитай хотя бы одну.' },
      { sel: '.section-title', nth: 3, text: 'Посмотри сам' }
    ],
    '/about': [
      { sel: '.about-hero__eyebrow', text: '✦ Экосистема без корпоративного пафоса' },
      { sel: '.about-hero__title', text: 'Экосистема<br>Лесли' },
      { sel: '.about-hero__subtitle', text: 'Единственная методология, которая приводит к измеримым результатам в личной жизни. Не к "росту над собой". К конкретному — замужеству, отношениям, уровню.' },
      { sel: '.section-title', nth: 0, text: 'Пять столпов. Один фундамент.' },
      { sel: '.section-subtitle', nth: 0, text: 'Каждый элемент работает сам — и усиливает остальные.' },
      { sel: '.pillar-desc', nth: 0, text: 'Лесли — не тренер. Основатель методологии, вокруг которой выросла экосистема. 20 лет. 15 книг. 440+ тренингов.' },
      { sel: '.pillar-desc', nth: 1, text: '«Жизнь без трусов» — не провокация. Свобода от навязанных ограничений. Снять трусы — значит жить своими правилами.' },
      { sel: '.pillar-desc', nth: 2, text: 'От бесплатной книги до VIP-наставничества. Воронка, в которую заходят за советом — и остаются на годы.' },
      { sel: '.pillar-desc', nth: 3, text: 'Комьюнити для тех, кто серьёзен. Задания, эфиры с Алексом, разборы. Не чат — рабочая группа.' },
      { sel: '.pillar-desc', nth: 4, text: 'YouTube, Telegram, подкасты. Ежедневный контент, который доказывает экспертность — а не рассказывает о ней.' },
      { sel: '.section-title', nth: 1, text: 'Как работает: от первого контакта до результата' },
      { sel: '.section-title', nth: 2, text: 'Кейсы, о которых пишут СМИ' },
      { sel: '.section-subtitle', nth: 1, text: 'Ни у одного конкурента нет ничего близкого.' }
    ],
    '/philosophy': [
      { sel: '.phil-hero__title', text: 'Жизнь<br>без трусов' },
      { sel: '.phil-hero__sub', text: '«Снять трусы — значит снять ограничения»' },
      { sel: '.phil-hero__desc', text: 'Философия Лесли — не набор техник. Это система мировоззрения: свобода — не дана, она берётся.' },
      { sel: '.section-title', nth: 0, text: 'Карта: как одна идея стала системой' },
      { sel: '.section-subtitle', nth: 0, text: 'Все 10 книг Лесли — одна философская архитектура. Вот она.' },
      { sel: '.flow-node__title', nth: 0, text: 'Жизнь без трусов — центральная идея' },
      { sel: '.flow-node__desc', nth: 0, text: '«Трусы» — психологические ограничения, навязанная мораль, страхи. Снять их — значит жить своими правилами.' },
      { sel: '.flow-node__title', nth: 1, text: 'Отношения = Игра' },
      { sel: '.flow-node__desc', nth: 1, text: 'Мужчина и женщина — игроки. Есть правила, уровни, победители. Лучшие отношения — когда оба играют осознанно.' },
      { sel: '.flow-node__title', nth: 2, text: 'Иерархия уровней' },
      { sel: '.flow-node__desc', nth: 2, text: 'Четыре уровня: от серой массы до Мастера. Геймификация встроена в философию — люди платят, чтобы подняться.' },
      { sel: '.flow-node__desc', nth: 3, text: 'Конечная цель — не флирт. Измеримый результат: влюблённость → отношения → замужество.' },
      { sel: '.section-title', nth: 1, text: '6 идей, которые перевернут мышление' },
      { sel: '.section-subtitle', nth: 1, text: 'Повторяются во всех 10 книгах. Это фундамент — его нельзя обойти.' },
      { sel: '.principle__title', nth: 0, text: 'Разрешение — главный продукт' },
      { sel: '.principle__text', nth: 0, text: 'Аудитория покупает разрешение — быть собой без стыда, хотеть без оправданий.' },
      { sel: '.principle__title', nth: 1, text: 'Активная позиция — для обоих' },
      { sel: '.principle__text', nth: 1, text: 'Мужчинам: не ждать — действовать. Женщинам: не ждать принца — охотиться.' },
      { sel: '.principle__title', nth: 2, text: 'Эмоции — инструмент, не стихия' },
      { sel: '.principle__text', nth: 2, text: '«Раскачка эмоций» — ключевой механизм. Монотонность убивает интерес. Управляй амплитудой — управляешь отношением.' },
      { sel: '.principle__title', nth: 3, text: 'Конкретика. Никакой воды.' },
      { sel: '.principle__text', nth: 3, text: 'Никакого «работай над собой». Конкретные техники, фразы, алгоритмы. Это и есть конкурентное преимущество.' },
      { sel: '.section-title', nth: 2, text: 'Психологический архетип: «Мятежный наставник»' },
      { sel: '.section-title', nth: 3, text: 'Как менялась философия: три эпохи' }
    ],
    '/women': [
      { sel: '.w-hero__sub', text: 'Единственная доказанная методология: от первого знакомства до загса. Не советы — система. 9 шагов. Кейсы в Forbes.' },
      { sel: '.section-title', nth: 0, text: 'Три входа. Один результат.' },
      { sel: '.section-subtitle', nth: 0, text: 'Выбери своё — каждый путь ведёт туда, куда ты идёшь.' },
      { sel: '.w-path-card__desc', nth: 0, text: '9 шагов доказанной системы. Поймёшь механику мужской психологии — научишься создавать условия, при которых он сам делает выбор.' },
      { sel: '.w-path-card__desc', nth: 1, text: '90-дневная программа. 9 модулей. Практика, наставник. Реальные результаты — Сава, Forbes, Daily Mail.' },
      { sel: '.w-path-card__desc', nth: 2, text: 'Еженедельные задания, закрытый чат, эфиры с Алексом, трекер прогресса. Женщины, которые идут к результату — и доходят.' },
      { sel: '.section-title', nth: 1, text: 'Они уже получили результат' },
      { sel: '.section-subtitle', nth: 1, text: 'Реальные истории. Не редактировались.' },
      { sel: '.w-case-card__text', nth: 0, text: '«2 года встречались, никакого замужества. После 3-го модуля применила технику — через месяц он сам заговорил. Загс через полгода.»' },
      { sel: '.w-case-card__text', nth: 1, text: '«Думала, в 29 поезд ушёл. Алекс объяснил: это мышление жертвы. Через 2 месяца — познакомилась. Через год — замужем.»' },
      { sel: '.w-case-card__text', nth: 2, text: '«Все говорили — поздно. Методология доказала обратное. Встретила в 37, замужем в 38.»' },
      { sel: '.section-title', nth: 2, text: 'Твой путь к результату — пошагово' }
    ],
    '/women/how-to-marry': [
      { sel: '.htw-hero__sub', text: '90 дней. Не советы — конкретный алгоритм с доказанным результатом. Сава. Forbes. Не случайность — метод.' },
      { sel: '.section-subtitle', nth: 0, text: 'Если хотя бы один пункт отзывается — этот курс закроет вопрос.' },
      { sel: '.section-title', nth: 0, text: '90 дней. 9 модулей. Один исход.' },
      { sel: '.section-title', nth: 1, text: 'Выбери формат — три тарифа' },
      { sel: '.htw-pricing__note', text: 'Рассрочка доступна · Самый полный тариф — самый полный результат' },
      { sel: '.section-title', nth: 2, text: 'Они уже получили результат' },
      { sel: '.htw-review-card__text', nth: 0, text: '«2 года встречались — никакого предложения. После 3-го модуля применила технику. Он сам заговорил о загсе.»' },
      { sel: '.htw-review-card__text', nth: 1, text: '«В 29 думала — поезд ушёл. Алекс объяснил: это мышление жертвы. Через 2 месяца после курса — замужем.»' },
      { sel: '.htw-review-card__text', nth: 2, text: '«Скептически относилась к "техникам". Охотница — это понимание того, как принимается решение о браке.»' },
      { sel: '.htw-author__bio', text: 'Основатель единственной доказанной системы женской психологии в отношениях. Автор 10 книг. Кейсы в Forbes и Daily Mail.' }
    ],
    '/women/huntress': [
      { sel: '.hn-hero__sub', text: '9 шагов. Без воды. По этой системе Сава вышла замуж за мультимиллионера. Forbes. Это называется результат.' },
      { sel: '.section-title', nth: 0, text: '9 шагов модели — без купюр' },
      { sel: '.section-title', nth: 1, text: '6 сценариев 2026 года' },
      { sel: '.section-title', nth: 2, text: '20 техник — по уровням воронки продуктов' }
    ],
    '/men': [
      { sel: '.m-hero__sub', text: 'Методология Мастера — для тех, кому надоело объяснять почему нет результата. 43 упражнения. 20 лет отбора.' },
      { sel: '.section-h2', nth: 0, text: 'Четыре уровня игрока. На каком ты сейчас?' },
      { sel: '.section-h2', nth: 1, text: 'Программы — выбери формат' },
      { sel: '.section-h2', nth: 2, text: 'Результаты мужского направления' }
    ],
    '/men/seduction': [
      { sel: '.sd-hero__eyebrow', text: '✦ Тот самый тренинг. Без соплей.' },
      { sel: '.sd-hero__sub', text: '3 дня — и ты либо меняешь подход к жизни, либо возвращаешься к старому. Большинство не возвращаются.' },
      { sel: '.section-h2', nth: 0, text: 'Это про тебя? Тогда читай до конца.' },
      { sel: '.section-h2', nth: 1, text: '3 дня. Полная перепрошивка.' },
      { sel: '.section-h2', nth: 2, text: 'Они прошли — вот что говорят' }
    ],
    '/club': [
      { sel: '.club-hero__title', text: 'Академия Охотниц —<br>за закрытыми дверями' },
      { sel: '.club-hero__sub', text: 'Не форум. Не группа поддержки. Комьюнити женщин, которые идут к результату — и доходят.' },
      { sel: '.section-title', nth: 0, text: 'Что происходит внутри' },
      { sel: '.section-title', nth: 1, text: 'Выбери уровень доступа' },
      { sel: '.section-title', nth: 2, text: 'Результаты участниц' }
    ],
    '/books': [
      { sel: '.books-hero__title', text: '15 книг,<br>которые не продают иллюзии' }
    ],
    '/media': [
      { sel: '.media-hero__title', text: 'Один канал. Один человек.<br>Который не боится говорить правду.' },
      { sel: '.media-hero__subtitle', text: 'Смотришь — или меняешься, или злишься. Оба варианта работают.' },
      { sel: '.media-section__title', nth: 0, text: 'YouTube — без сценаристов и цензоров' },
      { sel: '.media-section__title', nth: 1, text: 'Telegram — каждый день, по-настоящему' }
    ],
    '/blog': [
      { sel: '.blog-hero__title', text: 'Блог, который не советует «пить воду»' },
      { sel: '.blog-hero__sub', text: 'Разборы. Кейсы. Психология без глянца.' }
    ],
    '/events': [
      { sel: '.ev-hero__title', text: 'Ближайшие события — живые и настоящие' },
      { sel: '.ev-hero__sub', text: 'Онлайн — это хорошо. Офлайн — когда жизнь меняется за выходные. Москва. Варшава. Ибица.' }
    ],
    '/contacts': [
      { sel: '.contacts-hero__title', text: 'Есть вопрос? Задавай.' },
      { sel: '.contacts-hero__sub', text: 'Не мгновенно. Но честно. Ежедневно с 12 до 21 МСК.' }
    ],
    '/products': [
      { sel: '.p-hero__sub', text: 'Книги, курсы, клуб — воронка от 0 до VIP. Без воды. Только то, что приводит к результату.' }
    ],
    '/cabinet': [
      { sel: '.cabinet-greeting', text: 'Ты уже внутри. Это главное.' }
    ],
    '/marketing': [
      { sel: '.marketing-hero__title', text: 'Командный пункт. Без цензуры.' },
      { sel: '.marketing-hero__sub', text: '17,7 млрд ₽ в нише. Явного лидера нет. Аудитория 5–9 млн. Средний чек ~50 000 ₽. Цель — 1 млрд ₽. 9 модулей показывают путь.' },
      { sel: '.modules-section__title', text: '9 модулей — 9 орудий' }
    ],
    '/marketing/m1-filosofiya': [
      { sel: '.mod-header__title', text: 'Философия: продаётся не техника — продаётся разрешение' },
      { sel: '.mod-header__sub', text: '19 терминов. 1 центральная идея — «Жизнь без трусов». Психологический профиль бренда, который бьёт точнее таргета.' },
      { sel: '.section__title', nth: 0, text: 'Карта философии — архитектура системы' },
      { sel: '.section__title', nth: 1, text: 'Словарь: 19 терминов с маркетинговым зарядом' },
      { sel: '.section__title', nth: 2, text: 'Психологический профиль бренда' }
    ],
    '/marketing/m2-auditoriya': [
      { sel: '.mod-header__title', text: 'Аудитория: 5–9 млн женщин. 14 болей. 3 приоритета.' },
      { sel: '.mod-header__sub', text: '20 сегментов под хирургическим микроскопом. Топ-3: карьеристки 27–35, женщины 35+ без детей, мамы после развода. У каждой своя рана — у нас свой инструмент.' },
      { sel: '.section__title', nth: 0, text: '14 болей: глубина и готовность платить' },
      { sel: '.section__title', nth: 1, text: '20 сегментов — кто они и как с ними говорить' },
      { sel: '.section__title', nth: 2, text: 'Спрос по Wordstat: где деньги ищут нас' }
    ],
    '/marketing/m3-zhenskoe': [
      { sel: '.mod-header__title', text: 'Охотница. 9 шагов. Загс в конце.' },
      { sel: '.mod-header__sub', text: 'Это не теория — Сава вышла замуж за мультимиллионера. 6 сценариев. 20 техник с разбивкой по уровням продукта.' },
      { sel: '.section__title', nth: 0, text: '9 шагов модели — без купюр' },
      { sel: '.section__title', nth: 1, text: 'Что работает в 2026 — таблица актуальности' },
      { sel: '.section__title', nth: 2, text: '6 сценариев — под каждый боль сегмента' },
      { sel: '.section__title', nth: 3, text: '20 техник — по уровням воронки продуктов' }
    ],
    '/marketing/m4-produkty': [
      { sel: '.mod-header__title', text: 'Линейка: от 0 ₽ до 250 000 ₽. 17 продуктов. Один маршрут.' },
      { sel: '.mod-header__sub', text: '20 лидмагнитов тянут, 20 трипваеров отсекают зевак, 5 схем воронок закрывают. LTV — 90 000–120 000 ₽. Математика без уговоров.' },
      { sel: '.section__title', nth: 0, text: 'Воронка снизу вверх: от бесплатного до 250 000 ₽' },
      { sel: '.section__title', nth: 1, text: 'Клуб «Академия Охотниц»: 4 тарифа, LTV до 420 000 ₽' },
      { sel: '.section__title', nth: 2, text: '20 лидмагнитов — с конверсиями' },
      { sel: '.section__title', nth: 3, text: '20 трипваеров — с апселлами' },
      { sel: '.section__title', nth: 4, text: '5 схем воронок — с KPI' }
    ],
    '/marketing/m5-kontent': [
      { sel: '.mod-header__title', text: '1 800+ идей. Ни одной — «просто будь собой».' },
      { sel: '.mod-header__sub', text: 'Reels×500, Shorts×500, Telegram×500, эфиры×200, вебинары×100. Контент-машина, которая продаёт пока ты спишь. 365 дней — потому что конкуренты не ждут.' },
      { sel: '.section__title', nth: 0, text: 'Библиотека: 1 800+ идей с оценками В/Вир/Пр' },
      { sel: '.section__title', nth: 1, text: 'Контент-планы по каналам — частота и форматы' }
    ],
    '/marketing/m6-kanaly': [
      { sel: '.mod-header__title', text: 'Telegram. YouTube. Instagram. Три фронта — один победитель.' },
      { sel: '.mod-header__sub', text: 'KPI по месяцам до 18-го. 100 способов роста без рекламного бюджета. Автоворонка 7 шагов — закрывает пока ты на совещании.' },
      { sel: '.section__title', nth: 0, text: 'Telegram: экосистема 5 элементов + автоворонка' },
      { sel: '.section__title', nth: 1, text: 'Instagram: форматы, частота, KPI' },
      { sel: '.section__title', nth: 2, text: 'YouTube: архитектура до 18-го месяца' },
      { sel: '.section__title', nth: 3, text: 'Где ЦА — и как её забрать' },
      { sel: '.section__title', nth: 4, text: '100 способов роста без рекламного бюджета' }
    ],
    '/marketing/m7-rynok': [
      { sel: '.mod-header__title', text: '🏆 Рынок: 17,7 млрд ₽. Место лидера — вакантно.' },
      { sel: '.mod-header__sub', text: '100 игроков — ни одного доминанта. 644 500 разводов в год — демография работает на нас. Ниша растёт +25% г/г. Тайминг идеальный.' },
      { sel: '.section__title', nth: 0, text: 'Деньги на кону: объём рынка с прогнозами 2027/2030' },
      { sel: '.section__title', nth: 1, text: 'Почему демография работает на нас — 8 цифр' },
      { sel: '.section__title', nth: 2, text: 'Тренды 2024–2026: что меняется в нашу пользу' },
      { sel: '.section__title', nth: 3, text: 'Прогнозы: 2026 → 2028 → 2031' },
      { sel: '.section__title', nth: 4, text: '100 конкурентов: кто они и насколько опасны' },
      { sel: '.section__title', nth: 5, text: 'Топ-5 прямых конкурентов — радар и сравнение' },
      { sel: '.insight-box__title', nth: 0, text: '⚡ Вывод без анестезии' },
      { sel: '.insight-box__text', nth: 0, text: 'Ниша «как выйти замуж» — ранний рост +25% г/г. Первый игрок с системным продуктом и Telegram-экосистемой захватит лидерство на 5+ лет. <strong>Окно открыто прямо сейчас.</strong>' },
      { sel: '.insight-box__title', nth: 1, text: '🎯 Стратегический вывод' },
      { sel: '.insight-box__text', nth: 1, text: 'Лесли — <strong>сильнейшая доказательная база и медийность</strong>. Риск — правовой. Решение — отдельный суб-бренд, зарубежное юрлицо. Методология остаётся, риски — изолируются.' }
    ],
    '/marketing/m8-tech': [
      { sel: '.mod-header__title', text: '⚙️ Машина: парсинг, скоринг, SEO — работает ночью.' },
      { sel: '.mod-header__sub', text: 'Скоринг: 60+ баллов = немедленный прогрев. 1 000+ SEO-запросов в 11 кластерах. CPL 200–400 ₽ против 1 500 ₽ в таргете. Приложение: MVP 1–1,5 млн ₽.' },
      { sel: '.section__title', nth: 0, text: 'Арсенал охотника: инструменты и что они дают' },
      { sel: '.section__title', nth: 1, text: 'Скоринг лидов: 60+ баллов = немедленный прогрев' },
      { sel: '.section__title', nth: 2, text: 'SEO: 11 кластеров, 1 000+ запросов, CPL 200–400 ₽' },
      { sel: '.section__title', nth: 3, text: 'Типы страниц: что создаём и зачем' },
      { sel: '.section__title', nth: 4, text: 'Приложение «Охотница»: концепция MVP' },
      { sel: '.section__title', nth: 5, text: 'Финмодель приложения: 4 сценария' },
      { sel: '.seo-forecast__title', text: '⚡ SEO-прогноз без прикрас' },
      { sel: '.seo-forecast__text', text: 'Через <strong>6–9 месяцев</strong> — <strong>5 000–15 000 органических переходов/мес</strong>. CPL <strong>200–400 ₽</strong> против 1 500 ₽ в таргете. Упускать это — преступление.' },
      { sel: '.app-verdict__label', text: '⏳ Честный вердикт' },
      { sel: '.app-verdict__text', text: '<strong>Делать — но не сейчас.</strong> Точка входа: <strong>30 000+ участниц клуба</strong> (месяц 12–18). Начать с Telegram mini-app — <strong>1–1,5 млн ₽</strong>, 2–3 месяца. Тест без риска.' }
    ],
    '/marketing/m9-finansy': [
      { sel: '.mod-header__title', text: '💰 Дорога к миллиарду. Без иллюзий.' },
      { sel: '.mod-header__sub', text: '4 сценария: от 1 000 лидов/мес (~1,8 млн ₽) до 50 000 лидов/мес (~88 млн ₽). Оценка 1 млрд ₽ — 18–24 месяца. Каждый день без системы = деньги к конкуренту.' },
      { sel: '.section__title', nth: 0, text: 'Профиль медийной личности: кто такой Лесли на самом деле' },
      { sel: '.section__title', nth: 1, text: 'Карта каналов: где мы есть и какой охват' },
      { sel: '.section__title', nth: 2, text: 'Клиентский путь: где теряем и как исправить' },
      { sel: '.section__title', nth: 3, text: 'Метрики воронки: CPL, CAC, LTV, churn — честно' },
      { sel: '.section__title', nth: 4, text: '4 сценария: от 1 000 до 50 000 лидов/мес' },
      { sel: '.section__title', nth: 5, text: 'Путь к 1 млрд ₽ — по месяцам' },
      { sel: '.section__title', nth: 6, text: 'Дорожная карта: день 1 → день 30 → месяц 6' },
      { sel: '.insight-box__title', text: '🔥 Ключевой инсайт' },
      { sel: '.insight-box__text', text: 'Конкуренты продают надежду. Лесли — <strong>единственный, кто продаёт доказанный результат</strong>. При выходе на <strong>40–50 тыс. лидов/мес</strong> и выручке <strong>70–90 млн ₽/мес</strong> — оценка <strong>720 млн — 1,1 млрд ₽</strong> за <strong>18–24 месяца</strong>.' }
    ]
  };

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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.AlTheme = { apply: applyTheme };
}());
