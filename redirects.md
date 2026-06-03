# Plan 301-редиректов — Alex Leslie

Таблица миграции со старого сайта на новую структуру.  
Настраивается на уровне веб-сервера (Nginx / Apache / CDN).

---

## Nginx-конфиг (пример)

```nginx
server {
    listen 443 ssl;
    server_name alexleslie.ru www.alexleslie.ru;

    # Убираем www
    if ($host = 'www.alexleslie.ru') {
        return 301 https://alexleslie.ru$request_uri;
    }

    # 301-редиректы ниже
    # ...
}
```

---

## Таблица редиректов

| Старый URL (от) | Новый URL (на) | Код | Комментарий |
|---|---|---|---|
| `/` | `/` | — | Главная не меняется |
| `/about` | `/alex` | 301 | Страница «О нас» → персональная страница Алекса |
| `/about-alex` | `/alex` | 301 | Альтернативный старый путь |
| `/autor` | `/alex` | 301 | Опечатка в старом URL |
| `/author` | `/alex` | 301 | EN-вариант пути |
| `/blog/` | `/blog` | 301 | Убираем trailing slash |
| `/blog/post/:slug` | `/blog#:slug` | 301 | Посты → якоря блога (до запуска отдельных статей) |
| `/book` | `/books` | 301 | Единственное число → множественное |
| `/book/:slug` | `/books` | 301 | Страница отдельной книги → каталог книг |
| `/cabinet` | `/cabinet/index` | 301 | Без имени файла |
| `/cases` | `/cases` | — | Не меняется |
| `/club` | `/club` | — | Не меняется |
| `/club/akademiya` | `/club` | 301 | Старый путь к клубу |
| `/contacts` | `/contacts` | — | Не меняется |
| `/course` | `/products` | 301 | Старый раздел курсов → каталог продуктов |
| `/courses` | `/products` | 301 | Множественное число |
| `/course/kak-vyyti-zamuzh` | `/women/how-to-marry` | 301 | Флагманский женский курс |
| `/course/okhotnitsa` | `/women/huntress` | 301 | Методология Охотницы |
| `/course/stil-soblazneniya` | `/men/seduction` | 301 | Мужской курс |
| `/events` | `/events` | — | Не меняется |
| `/event/:slug` | `/events` | 301 | Отдельное событие → список событий |
| `/for-men` | `/men` | 301 | Старый путь мужского раздела |
| `/for-women` | `/women` | 301 | Старый путь женского раздела |
| `/hunt` | `/women/huntress` | 301 | Короткий путь методологии |
| `/huntress` | `/women/huntress` | 301 | Прямое имя методологии |
| `/info` | `/about` | 301 | Старый информационный раздел |
| `/knowledge` | `/knowledge` | — | Не меняется |
| `/marry` | `/women/how-to-marry` | 301 | Короткий путь флагмана |
| `/media` | `/media` | — | Не меняется |
| `/men` | `/men` | — | Не меняется |
| `/men/` | `/men` | 301 | Trailing slash |
| `/offers` | `/offer` | 301 | Множественное число → единственное |
| `/philosophy` | `/philosophy` | — | Не меняется |
| `/privacy-policy` | `/privacy` | 301 | Старый путь политики |
| `/product` | `/products` | 301 | Единственное число |
| `/products` | `/products` | — | Не меняется |
| `/profile` | `/cabinet/profile` | 301 | Профиль → в кабинет |
| `/refund-policy` | `/refund` | 301 | Старый путь политики возврата |
| `/reviews` | `/reviews` | — | Не меняется |
| `/testimonials` | `/reviews` | 301 | EN-вариант отзывов |
| `/video` | `/media` | 301 | Старый медиа-раздел |
| `/women` | `/women` | — | Не меняется |
| `/women/` | `/women` | 301 | Trailing slash |

---

## Nginx-блок с редиректами

```nginx
# Убираем trailing slashes (кроме /)
rewrite ^/(.+)/$ /$1 permanent;

# Бренд
rewrite ^/about$           /alex permanent;
rewrite ^/about-alex$      /alex permanent;
rewrite ^/autor$           /alex permanent;
rewrite ^/author$          /alex permanent;
rewrite ^/info$            /about permanent;

# Продукты и курсы
rewrite ^/book$                      /books permanent;
rewrite ^/book/(.*)$                 /books permanent;
rewrite ^/course$                    /products permanent;
rewrite ^/courses$                   /products permanent;
rewrite ^/product$                   /products permanent;
rewrite ^/course/kak-vyyti-zamuzh$   /women/how-to-marry permanent;
rewrite ^/course/okhotnitsa$         /women/huntress permanent;
rewrite ^/course/stil-soblazneniya$  /men/seduction permanent;

# Женское
rewrite ^/for-women$    /women permanent;
rewrite ^/hunt$         /women/huntress permanent;
rewrite ^/huntress$     /women/huntress permanent;
rewrite ^/marry$        /women/how-to-marry permanent;

# Мужское
rewrite ^/for-men$      /men permanent;

# Клуб
rewrite ^/club/akademiya$   /club permanent;

# Кабинет
rewrite ^/profile$          /cabinet/profile permanent;

# Медиа
rewrite ^/video$            /media permanent;

# Отзывы
rewrite ^/testimonials$     /reviews permanent;

# Юридические
rewrite ^/offers$           /offer permanent;
rewrite ^/privacy-policy$   /privacy permanent;
rewrite ^/refund-policy$    /refund permanent;

# События
rewrite ^/event/(.*)$       /events permanent;
```

---

## Apache (.htaccess)

```apache
RewriteEngine On

# Убираем www
RewriteCond %{HTTP_HOST} ^www\.alexleslie\.ru [NC]
RewriteRule ^(.*)$ https://alexleslie.ru/$1 [R=301,L]

# Убираем trailing slashes
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Редиректы
Redirect 301 /about          /alex
Redirect 301 /about-alex     /alex
Redirect 301 /autor          /alex
Redirect 301 /author         /alex
Redirect 301 /book           /books
Redirect 301 /course         /products
Redirect 301 /courses        /products
Redirect 301 /course/kak-vyyti-zamuzh  /women/how-to-marry
Redirect 301 /course/okhotnitsa        /women/huntress
Redirect 301 /course/stil-soblazneniya /men/seduction
Redirect 301 /for-women      /women
Redirect 301 /for-men        /men
Redirect 301 /hunt           /women/huntress
Redirect 301 /huntress       /women/huntress
Redirect 301 /marry          /women/how-to-marry
Redirect 301 /club/akademiya /club
Redirect 301 /profile        /cabinet/profile
Redirect 301 /video          /media
Redirect 301 /testimonials   /reviews
Redirect 301 /offers         /offer
Redirect 301 /privacy-policy /privacy
Redirect 301 /refund-policy  /refund
```

---

> **Примечание:** Точные старые URL уточнить по данным Google Search Console и аналитики после переезда. Перед деплоем прогнать Screaming Frog по старому сайту и сверить с этой таблицей.
