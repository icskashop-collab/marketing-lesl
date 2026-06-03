/* ── МОДУЛЬ 7: РЫНОК И КОНКУРЕНТЫ ── */
/* Источник: Маркетинговая стратегия, блоки 2, 4 */

const M7 = {

  /* 2.1 Объём рынка */
  marketSegments: [
    { segment:'Онлайн-образование РФ (весь)',      vol2025:'154 млрд ₽',  growth:'+5%',   f2027:'170 млрд ₽',  f2030:'210 млрд ₽' },
    { segment:'Психология и отношения (GetCourse)', vol2025:'17,7 млрд ₽', growth:'+10%',  f2027:'21 млрд ₽',   f2030:'29 млрд ₽' },
    { segment:'Отношения для женщин (оценка)',       vol2025:'4–7 млрд ₽',  growth:'+15%',  f2027:'6–10 млрд ₽', f2030:'10–18 млрд ₽' },
    { segment:'«Как выйти замуж» (узкая ниша)',      vol2025:'1–2 млрд ₽',  growth:'+25%',  f2027:'2–4 млрд ₽',  f2030:'5–10 млрд ₽' },
    { segment:'Брачные агентства РФ',               vol2025:'~8 млрд ₽',   growth:'+15–20%',f2027:'11 млрд ₽',  f2030:'16 млрд ₽' },
    { segment:'Дейтинг-приложения РФ',              vol2025:'8–10 млрд ₽', growth:'−5%',   f2027:'8 млрд ₽',    f2030:'9 млрд ₽' }
  ],

  /* 2.2 Демографические драйверы */
  demographics: [
    { metric:'Браков в России (2024)',           value:'880 000',              source:'Росстат 2024' },
    { metric:'Разводов в России (2024)',          value:'644 500 (8 из 10 браков)',source:'Forbes / Росстат' },
    { metric:'Одиноких женщин (оценка)',          value:'8–10 млн (20–50 лет)', source:'ВШЭ / RLMS-HSE' },
    { metric:'Хотят жить в семье',               value:'84% граждан РФ',       source:'ВЦИОМ 2024' },
    { metric:'Домохозяйств из 1 чел.',           value:'27,5 млн (>40% всех)', source:'Росстат' },
    { metric:'Средний возраст 1-го брака (ж)',   value:'28,3 года',            source:'Росстат 2024' },
    { metric:'Женщин 25–45 лет в РФ',           value:'~19–22 млн',           source:'Росстат' },
    { metric:'ЦА (одинокие 25–45, платежесп.)', value:'4–6 млн человек',      source:'Оценка аналитика' }
  ],

  /* 2.3 Тренды 2024–2026 */
  trends: [
    { emoji:'📱', title:'Рост Telegram', text:'Telegram стал основной соцсетью России после блокировок. +25% лидов г/г.' },
    { emoji:'🔍', title:'Дефицит качественного контента', text:'Большинство конкурентов — размытые коучи без доказанных результатов. Кейсы Лесли уникальны.' },
    { emoji:'🔐', title:'Подписочные клубы — тренд #1', text:'VandaStyle Club: 45% выручки из клуба, 30% участниц — дольше 2 лет.' },
    { emoji:'🔄', title:'Повторные продажи >55%', text:'Главное — удержание. LTV важнее CAC.' },
    { emoji:'💳', title:'Женская аудитория платит охотнее', text:'Брачные агентства +15–20% цен при росте спроса.' },
    { emoji:'📉', title:'Спад Instagram → рост Telegram+VK', text:'Блокировка Meta унесла ~28% лидов у зависимых школ.' },
    { emoji:'🤖', title:'ИИ-персонализация в дейтинге', text:'Приложения с ИИ-коучем растут быстрее традиционных.' }
  ],

  /* 2.4 Прогнозы */
  forecasts: [
    { param:'Ниша «замужество», оборот',   y2026:'1–2 млрд ₽',  y2028:'3–5 млрд ₽',  y2031:'8–12 млрд ₽' },
    { param:'Ведущий игрок рынка',          y2026:'Нет явного',  y2028:'1–2 лидера',  y2031:'1 явный лидер' },
    { param:'Основной канал продаж',        y2026:'Telegram',     y2028:'TG + App',    y2031:'App-экосистема' },
    { param:'Средний чек (осн. продукт)',   y2026:'30–50 тыс. ₽',y2028:'50–80 тыс. ₽',y2031:'70–150 тыс. ₽' },
    { param:'Роль ИИ-коучинга',            y2026:'Минимальная',  y2028:'Ощутимая',    y2031:'Критическая' },
    { param:'Размер ЦА (охват онлайн)',     y2026:'3–4 млн ж.',   y2028:'5–7 млн ж.',  y2031:'7–10 млн ж.' }
  ],

  /* 4. 100 КОНКУРЕНТОВ */
  competitors: [
    /* A. МЕДИЙНЫЕ ПСИХОЛОГИ */
    { cat:'A', catName:'Медийные психологи', name:'Михаил Лабковский',    platform:'labcovskiy.ru',       audience:'1 млн+ YouTube',    offer:'Психология счастья',                 price:'17–95 тыс. руб',     note:'Широкая ЦА, не только замужество' },
    { cat:'A', catName:'Медийные психологи', name:'Лариса Ренар',          platform:'lifeacademy.ru',      audience:'300 тыс. участниц', offer:'Женская психология, «Круг женской силы»',price:'от 6 900 руб', note:'Старейший игрок, низкий чек' },
    { cat:'A', catName:'Медийные психологи', name:'Наталья Толстая',        platform:'natalitolstaya.ru',   audience:'100 тыс.+ YouTube', offer:'Психотерапия, отношения',            price:'10–30 тыс. руб',     note:'Мягкий подход, нет агрессивного маркетинга' },
    { cat:'A', catName:'Медийные психологи', name:'Марина Таргакова',       platform:'targakovaschool.com', audience:'широкая СНГ',       offer:'Женственность, семья',               price:'от 2 000 руб',       note:'Офлайн-семинары, международный охват' },
    { cat:'A', catName:'Медийные психологи', name:'Ирина Хакамада',         platform:'hakamada.ru',         audience:'1 млн YouTube',     offer:'«Дао женщины», успех',               price:'Premium',            note:'Бизнес-ориентированная, не «замужество»' },
    { cat:'A', catName:'Медийные психологи', name:'Ольга Юрковская',        platform:'stressa.net',         audience:'50 тыс.+',          offer:'Психология, брак',                   price:'50 тыс./час консульт.',note:'ОАЭ-база, диаспора' },
    { cat:'A', catName:'Медийные психологи', name:'Алина Адлер',            platform:'TG/YouTube',          audience:'200 тыс.+ TG',      offer:'Мужская психология для женщин',      price:'бесплатно → платно', note:'Вирусный TG-канал' },
    { cat:'A', catName:'Медийные психологи', name:'Михаил Батиашвили',      platform:'YouTube',             audience:'300 тыс. YouTube',  offer:'Психология отношений',               price:'курсы 5–25 тыс.',    note:'Мужской взгляд на ЖМО' },
    { cat:'A', catName:'Медийные психологи', name:'Олег Гадецкий',          platform:'gadecky.ru',          audience:'10 тыс. в 30 странах',offer:'Ценностная психология',            price:'средний сегмент',    note:'Международный охват' },
    { cat:'A', catName:'Медийные психологи', name:'Ирина Ирис',             platform:'Info-Hit',            audience:'узкая',             offer:'Замужество после 35',                price:'690 руб (книга)',     note:'Нишевый недорогой продукт' },

    /* B. СПЕЦ-КОУЧИ «КАК ВЫЙТИ ЗАМУЖ» */
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Юлия Ланске',           platform:'lanske.ru',         audience:'23 тыс.+ клиенток', offer:'Алгоритм замужества',               price:'5–50 тыс. руб',   note:'iDateAwards-2019, 13 лет опыта' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Лана Ланская',           platform:'Info-Hit',          audience:'29 отзывов 4.9',    offer:'Замуж за достойного',               price:'от 10 тыс. руб',  note:'Активная, хорошие отзывы' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Анастасия Решетникова',  platform:'Info-Hit',          audience:'средняя',           offer:'Как выйти замуж',                   price:'4 часа=2 000 руб',note:'Прямой конкурент по теме' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Вадим + Юлия Куркины',   platform:'vadimkurkin.com',   audience:'500 тыс. в 79 странах',offer:'Практическая психология пары',    price:'от 2 650 руб',    note:'Супружеская пара, доверие' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Алекс Мэй',              platform:'alex-may.com',      audience:'335 тыс.+ студентов',offer:'Сексология + отношения',            price:'от 20 тыс. руб',  note:'Семинары в 25 странах' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Лилия Родник',           platform:'Info-Hit',          audience:'181 отзыв 4.95',    offer:'От первого свидания до загса',       price:'бесплатно → платно',note:'Отличный рейтинг, воронка' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Евгения Кондрашина',     platform:'Info-Hit',          audience:'14 686 подп.',      offer:'Женственность, привлечение',         price:'от 1 990 руб',    note:'Массовый недорогой вход' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Светлана Ермакова',      platform:'Info-Hit',          audience:'13 429 подп.',      offer:'Как найти хорошего мужа',            price:'бесплатно + книга',note:'Книжный формат' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Ирина Белозерская',      platform:'Info-Hit',          audience:'58 отзывов 4.91',   offer:'7 секретов женского счастья',        price:'от 3 990 руб',    note:'Проверенный продукт' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Юлия Варра',             platform:'TG/сайт',           audience:'средняя',           offer:'Замуж за 3 месяца',                  price:'бесплатно → платно',note:'Агрессивный маркетинг' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Наталья Покатилова',     platform:'сайт/книги',        audience:'средняя',           offer:'Рождённая быть женой',               price:'книги + курсы',   note:'Книжная ниша' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Ирина Удилова',          platform:'Info-Hit',          audience:'широкая',           offer:'25 лет, 10 книг',                    price:'средний сегмент', note:'Ветеран рынка' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Надя Ефремова',          platform:'TG',                audience:'80 тыс. TG',        offer:'Мужская психология',                 price:'подписка + курс', note:'Вирусный TG' },
    { cat:'B', catName:'Коучи «как выйти замуж»', name:'Алёна Алёнкина',         platform:'Instagram/TG',      audience:'200 тыс.+',         offer:'Женственность, привлечение мужчин',  price:'3–10 тыс.',       note:'Активна' },

    /* C. БРАЧНЫЕ АГЕНТСТВА */
    { cat:'C', catName:'Брачные агентства и свахи', name:'«Классика отношений»',platform:'brachnye-agentstva.ru',audience:'40 тыс. анкет',  offer:'Match-making Москва',          price:'5–77 тыс. руб',   note:'Оф-лайн лидер' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'Клуб «Дуэт»',         platform:'duet-club.ru',         audience:'широкая',        offer:'Брачное агентство + SpeedDating',price:'7–77 тыс. руб', note:'Смешанный формат' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'Married and Happy',    platform:'marriedandhappy.ru',   audience:'10 тыс. анкет',  offer:'Онлайн-сваха',                price:'средний',         note:'Цифровой формат' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'«Первый центр брака»', platform:'brachnoe-agentstvo',   audience:'70 тыс. клиентов/год',offer:'Match-Making методика',   price:'от 5 тыс. руб',   note:'Массовый сегмент' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'«2Naчала»',            platform:'marriage-moscow.com',  audience:'Москва',         offer:'Индивидуальный подбор',       price:'Premium',         note:'Элитный сегмент' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'«Синяя Птица» (СПб)', platform:'spclub.ru',            audience:'Петербург',      offer:'Крупнейшее в СПб',            price:'средний',         note:'Региональный лидер' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'Лариса Листерман',     platform:'листерман.рф',         audience:'медийная',       offer:'Элитная сваха',               price:'500 тыс.+',       note:'Медийность + связи' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'Алексей Ситников',     platform:'онлайн',               audience:'медийная',       offer:'Психолог + сваха',            price:'VIP',             note:'Звёздная аудитория' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'«Гармония отношений»', platform:'gar-otno.ru',          audience:'региональная',   offer:'Классическое агентство',      price:'от 10 тыс. руб',  note:'Регионы' },
    { cat:'C', catName:'Брачные агентства и свахи', name:'«Eros»',               platform:'eros-agency.ru',       audience:'онлайн',         offer:'VIP-знакомства',              price:'от 100 тыс. руб', note:'Премиум' },

    /* D. ЖЕНСКИЕ КЛУБЫ */
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Светояра»',            platform:'womanclub.svetoyara.com',audience:'тысячи',   offer:'Онлайн-сообщество', price:'средний',     note:'«Сотни вышли замуж»' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Мастерская счастья»',  platform:'molocheva.ru',           audience:'активная', offer:'63% вышли замуж',   price:'средний',     note:'Доказанные результаты' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'WClub',                 platform:'wclub.space',            audience:'франшиза РФ',offer:'Женский бизнес-клуб',price:'от 3 тыс./мес',note:'Офлайн-сеть' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Академия женственности»',platform:'TG/сайт',             audience:'50+ тыс.',  offer:'Женственность, энергия',price:'от 5 тыс./мес',note:'Подписочная модель' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'ClubFirst Ladies',       platform:'сайт',                  audience:'500+ бизнес-женщин',offer:'Нетворкинг',price:'Premium',   note:'Элита' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'Women Business Club',    platform:'TG/сайт',               audience:'400+',      offer:'Женщины в бизнесе',  price:'от 15 тыс./мес',note:'Деловой формат' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Богиня»',               platform:'TG-каналы',             audience:'100 тыс.+', offer:'Женственность + привлечение',price:'бесплатно → платно',note:'Вирусный TG' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Женский круг»',         platform:'TG',                    audience:'50 тыс.+',  offer:'Психология, отношения',price:'подписка', note:'Большая аудитория' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'RSWomen',                platform:'rswomen.ru',            audience:'международная',offer:'Русскоязычные за рубежом',price:'средний',note:'Диаспора' },
    { cat:'D', catName:'Женские клубы и сообщества', name:'«Тёплый дом»',           platform:'TG',                    audience:'20+ тыс.',  offer:'Семья, отношения, быт', price:'бесплатно', note:'Домашний контент' },

    /* E. ДЕЙТИНГ-ПРИЛОЖЕНИЯ */
    { cat:'E', catName:'Дейтинг-приложения', name:'Mamba',           platform:'mamba.ru',       audience:'39% рынка РФ',  offer:'Знакомства онлайн',          price:'Premium 799–2990/мес',note:'Лидер рынка' },
    { cat:'E', catName:'Дейтинг-приложения', name:'VK Знакомства',   platform:'vk.com/dating',  audience:'4 млн MAU',     offer:'Знакомства в VK',            price:'бесплатно + Premium',note:'1.34 млн мэтчей/день' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Tabor',           platform:'tabor.ru',       audience:'13% рынка',     offer:'Знакомства',                 price:'Premium',            note:'Устойчивый игрок' },
    { cat:'E', catName:'Дейтинг-приложения', name:'LovePlanet',      platform:'loveplanet.ru',  audience:'8% рынка',      offer:'Знакомства',                 price:'Premium',            note:'Ветеран рынка' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Teamo',           platform:'teamo.ru',       audience:'5% рынка',      offer:'Серьёзные отношения',        price:'от 490/мес',         note:'«Для серьёзных»' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Twinby',          platform:'twinby.ru',      audience:'4% рынка',      offer:'Пары-друзья',                price:'Premium',            note:'Нишевый формат' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Pure',            platform:'pure.app',       audience:'Premium',       offer:'Анонимность + скорость',     price:'799/нед.',           note:'Другая ЦА' },
    { cat:'E', catName:'Дейтинг-приложения', name:'TON Dating (TG)', platform:'TG mini-app',    audience:'400 тыс./мес',  offer:'Знакомства в TG',            price:'бесплатно + TON',    note:'Растущий игрок' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Flero',           platform:'flero.app',      audience:'нишевая',       offer:'ИИ + соционика',             price:'Premium',            note:'Инновационная' },
    { cat:'E', catName:'Дейтинг-приложения', name:'Айри',            platform:'airi.app',       audience:'60% женщин',    offer:'ИИ-совместимость',           price:'Premium',            note:'Женская аудитория' },

    /* F. ИНФОБИЗНЕС-ЭКСПЕРТЫ */
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Татьяна Аинова',       platform:'TG/сайт',          audience:'100 тыс.+ TG',   offer:'Психология мужчин для женщин', price:'курс 10–50 тыс.', note:'Большая TG-аудитория' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Юлия Рублёва',         platform:'TG/Instagram',     audience:'80 тыс.+',       offer:'Женственность, притяжение',   price:'от 5 тыс.',       note:'Активный маркетинг' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Мила Левчук',          platform:'TG/YouTube',       audience:'60 тыс.+',       offer:'Как притягивать мужчин',      price:'от 3 тыс.',       note:'Быстрый рост' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Анна Кирьянова',       platform:'YouTube',          audience:'600 тыс. YouTube',offer:'Психологические разборы',    price:'книги + консульт.',note:'Уникальный формат' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Виктория Боня',        platform:'Instagram',        audience:'3 млн Instagram', offer:'Лайфстайл + отношения',      price:'Premium-коллаб.', note:'Медийность' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Татьяна Мужицкая',     platform:'сайт',             audience:'большая',        offer:'НЛП-психология отношений',   price:'от 15 тыс.',      note:'НЛП-ниша' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Александра Сергеева',  platform:'TG',               audience:'40 тыс. TG',     offer:'Мужская психология',         price:'подписка',        note:'Узкая ниша' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Катерина Мурашова',    platform:'YouTube/кн.',      audience:'200 тыс. YouTube',offer:'Детская психология + книги', price:'книги',           note:'Смежная ЦА' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Настя Рыбка',          platform:'TG/Instagram',     audience:'100 тыс.+',      offer:'Охотница на миллиардера',     price:'книга + платно',  note:'Экс-ученица Лесли' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Sawa Pontyjska',       platform:'Instagram',        audience:'344 тыс.',       offer:'Охотница — замужество',       price:'платно',          note:'Актуальная ученица Лесли' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Яна Рудковская',       platform:'Instagram',        audience:'2 млн',          offer:'Лайфстайл премиум',          price:'спонсорство',     note:'Медийная персона' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Алёна Водонаева',      platform:'Instagram/YouTube',audience:'2 млн+',         offer:'Честные отношения',          price:'коммерция',       note:'Провокационная' },
    { cat:'F', catName:'Инфобизнес-эксперты', name:'Регина Тодоренко',     platform:'Instagram',        audience:'3 млн+',         offer:'Семья, дети, отношения',     price:'спонсорство',     note:'После кризиса — семейная ценность' },

    /* G. МЕЖДУНАРОДНЫЕ АНАЛОГИ */
    { cat:'G', catName:'Международные аналоги', name:'Matthew Hussey (рус. субт.)', platform:'matthewbussey.com', audience:'3 млн YouTube', offer:'«Get The Guy» для женщин',   price:'$297–997',  note:'Западный лидер; есть рус.субт.' },
    { cat:'G', catName:'Международные аналоги', name:'Logan Ury (рус.кн.)',          platform:'loganury.com',      audience:'500 тыс.+',     offer:'«How Not to Die Alone»',     price:'$15 (книга)',note:'Научный подход' },
    { cat:'G', catName:'Международные аналоги', name:'Alexandra Villarreal',         platform:'TG/сайт',           audience:'международная', offer:'Dating coach для русских',   price:'средний',   note:'Диаспора США/ЕС' },
    { cat:'G', catName:'Международные аналоги', name:'«Академия женственности» (KZ)',platform:'TG/сайт',           audience:'50 тыс.+ KZ',   offer:'Национальная адаптация',     price:'низкий',    note:'Казахский рынок' },
    { cat:'G', catName:'Международные аналоги', name:'Таня Карр (Канада)',           platform:'TG',                audience:'20 тыс. TG',    offer:'Отношения в эмиграции',      price:'средний',   note:'Русские в Канаде' },
    { cat:'G', catName:'Международные аналоги', name:'Виктория Верхоглядова (DE)',   platform:'TG/сайт',           audience:'15 тыс.',       offer:'Коучинг отношений в Европе', price:'средний',   note:'Диаспора Германии' },
    { cat:'G', catName:'Международные аналоги', name:'Надя Атаман (Израиль)',        platform:'TG',                audience:'25 тыс. TG',    offer:'Отношения для русских в Израиле',price:'подписка',note:'Израильская диаспора' },
    { cat:'G', catName:'Международные аналоги', name:'Оксана Прокопец (Австрия)',    platform:'сайт',              audience:'небольшая',     offer:'VIP-коучинг отношений',      price:'Premium',   note:'Элитная диаспора' },
    { cat:'G', catName:'Международные аналоги', name:'Татьяна Новожилова (США)',     platform:'YouTube/TG',        audience:'30 тыс.+',      offer:'Как выйти замуж в США',      price:'средний',   note:'Американская диаспора' },
    { cat:'G', catName:'Международные аналоги', name:'Мария Ефимова (ОАЭ)',          platform:'Instagram',         audience:'80 тыс.+',      offer:'Отношения с богатыми арабами',price:'платные курсы',note:'ОАЭ-диаспора' },

    /* H. YOUTUBE/TELEGRAM-КАНАЛЫ */
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Мужское / Женское» (ТВ)', platform:'YouTube',audience:'2 млн+ YouTube',  offer:'ТВ-шоу об отношениях',      price:'бесплатно',         note:'Медиа, не обучение' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Секрет»',                 platform:'TG',     audience:'500 тыс. TG',     offer:'Советы по отношениям',      price:'бесплатно →',       note:'' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Женская психология»',     platform:'TG',     audience:'200 тыс. TG',     offer:'Психология женщины',        price:'бесплатно + платно',note:'Большая аудитория' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Психолог рядом»',         platform:'TG',     audience:'150 тыс. TG',     offer:'Психологические советы',    price:'консультации',      note:'Медицинский уклон' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Мужская психология для женщин»',platform:'TG',audience:'120 тыс. TG',  offer:'Как понять мужчину',        price:'подписка',          note:'Нишевый фокус' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Замуж с удовольствием»',  platform:'TG',     audience:'80 тыс. TG',      offer:'Советы по замужеству',      price:'бесплатно + курсы', note:'Прямой конкурент' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Охотница» (клоны Лесли)',  platform:'TG',    audience:'различные',       offer:'Копирование методологии',   price:'разные',            note:'Паразитируют на бренде' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'HeForShe Russia',           platform:'YouTube',audience:'100 тыс. YouTube',offer:'Гендерное равенство',       price:'бесплатно',         note:'Другое направление' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Любовь и отношения» (Дзен)',platform:'Яндекс Дзен',audience:'500 тыс. читателей',offer:'Статьи об отношениях',price:'CPA + донаты',     note:'SEO-трафик' },
    { cat:'H', catName:'YouTube / Telegram-каналы', name:'«Тихий маркетинг отношений»',platform:'TG',  audience:'30 тыс. TG',      offer:'Тонкие стратегии привлечения',price:'подписка Premium', note:'Растущий нишевый канал' }
  ],

  /* 4.1 Сравнение топ-5 прямых конкурентов */
  top5: {
    labels: ['Доказанные результаты', 'Медийность', 'Средний чек', 'Telegram', 'Комьюнити', 'Методология'],
    players: [
      { name:'Алекс Лесли',  color:'rgba(212,160,23,0.8)',  border:'#D4A017', values:[5,5,5,4,3,5] },
      { name:'Лариса Ренар', color:'rgba(194,24,91,0.6)',   border:'#C2185B', values:[3,3,2,2,4,2] },
      { name:'Юлия Ланске',  color:'rgba(21,101,192,0.6)',  border:'#1565C0', values:[4,3,3,3,3,4] },
      { name:'Лилия Родник', color:'rgba(100,180,100,0.6)', border:'#64B464', values:[3,2,2,2,2,3] },
      { name:'Matthew Hussey',color:'rgba(180,100,180,0.6)',border:'#B464B4', values:[5,5,4,2,5,5] }
    ],
    tableData: [
      { param:'Доказанные результаты', lesli:'★★★★★ (Сава, Рыбка)', renar:'★★★ (300 тыс.)', lanske:'★★★★', rodnik:'★★★ (181 отзыв)', hussey:'★★★★★ (массовые)' },
      { param:'Медийность',           lesli:'★★★★★',               renar:'★★★',            lanske:'★★★',  rodnik:'★★',               hussey:'★★★★★' },
      { param:'Средний чек',          lesli:'★★★★★ (50 тыс.+)',    renar:'★★ (6–10 тыс.)', lanske:'★★★',  rodnik:'★★ (до 10 тыс.)',  hussey:'★★★★ ($300–1 000)' },
      { param:'Telegram-присутствие', lesli:'★★★★',                renar:'★★',             lanske:'★★★',  rodnik:'★★',               hussey:'★★ (нет)' },
      { param:'Комьюнити',            lesli:'★★★ (есть клуб)',      renar:'★★★★',           lanske:'★★★',  rodnik:'★★',               hussey:'★★★★★' },
      { param:'Методология',          lesli:'★★★★★ (уникальная)',  renar:'★★★★',           lanske:'★★★★', rodnik:'★★★',              hussey:'★★★★★' },
      { param:'Правовые риски',       lesli:'⚠ Высокие (РФ)',      renar:'Нет',            lanske:'Нет',  rodnik:'Нет',              hussey:'Нет (зарубеж)' }
    ]
  }
};
