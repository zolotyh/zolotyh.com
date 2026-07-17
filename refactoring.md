---
permalink: false
---

# План рефакторинга zolotyh.com

Аудит от 16 июля 2026. Проблемы сгруппированы по приоритету.

## Критично / Важно

### 1. Безопасность и доступность: встраивание YouTube
- **Файлы:** `talks/index.njk`, `talks/en/index.njk` (создание iframe, fallback миниатюр).
- **Проблема:**
  - iframe вставляется без `sandbox` и без управления фокусом.
  - Inline `onerror` на миниатюрах — плохая практика и риск для CSP.
  - URL собирается через конкатенацию строк: `embedUrl + '?autoplay=1'`.
- **Что сделать:**
  - Добавить iframe'у `sandbox="allow-scripts allow-same-origin allow-presentation"`.
  - Перенести fallback миниатюр из inline `onerror` в общий скрипт.
  - Использовать `new URL(embedUrl)` для добавления `autoplay=1`.
  - Оборачивать iframe в регион с `aria-label` и переводить на него фокус после клика.

### 2. Доступность: нет skip-to-content
- **Файл:** `_includes/base.njk`.
- **Проблема:** sticky-шапка без ссылки «перейти к содержимому».
- **Что сделать:**
  - Добавить `<a class="skip-link" href="#main">Перейти к содержимому / Skip to content</a>` перед `<header>`.
  - Добавить `id="main"` на `<main>`.
  - Добавить CSS для `.skip-link` (visually hidden, но виден при фокусе).

### 3. SEO: главная страница и социальные мета
- **Файлы:** `_includes/base.njk`, `index.md`, `en/index.md`.
- **Проблема:**
  - `<title>` главной — просто `zolotyh.com`.
  - Нет `canonical`, `og:image`, `twitter:card`, JSON-LD.
  - `og:url` зашит домен `https://zolotyh.com`.
- **Что сделать:**
  - Изменить `title` на `Алексей Золотых — инженерный лидер и спикер` / `Alexey Zolotyh — Engineering Leader & Speaker`.
  - Добавить `<link rel="canonical" href="{{ canonicalUrl }}">`.
  - Добавить `og:image`, `twitter:card`, `twitter:title`, `twitter:description`.
  - Вынести базовый URL в data-файл (например, `_data/site.json`) и использовать в шаблонах.
  - Добавить JSON-LD `Person` для главной и `VideoObject` для страницы докладов.

### 4. i18n: дублирование шаблонов
- **Файлы:** `index.md` / `en/index.md`, `talks/index.njk` / `talks/en/index.njk`, `resume/index.md` / `resume/en.md`.
- **Проблема:** почти идентичные файлы дублируют HTML и логику. Любое изменение структуры приходится копировать в два места.
- **Что сделать:**
  - Создать `_data/i18n.json` с переводами строк (навигация, заголовки, кнопки, UI докладов, метки резюме).
  - В шаблонах использовать макросы/includes и подставлять переводы через `i18n[lang].key`.
  - Содержательный контент (текст резюме) может оставаться в markdown-файлах, но разметка — общая.

### 5. Производительность: главная с 5 eager-изображениями
- **Файлы:** `index.md`, `en/index.md`.
- **Проблема:** все 5 hero-изображений загружаются с `loading="eager"`.
- **Что сделать:**
  - Оставить `eager` только у первого изображения.
  - У остальных добавить `loading="lazy"`.
  - Добавить `decoding="async"` и `fetchpriority="high"` для LCP-изображения.
  - Рассмотреть `srcset` для адаптивных изображений.

### 6. CSS: дублирование тем и фокус
- **Файл:** `assets/css/main.css`.
- **Проблема:**
  - Цвета светлой/тёмной темы дублируются трижды: `:root`, `@media (prefers-color-scheme: dark)`, `[data-theme="light/dark"]`.
  - Нет стилей `:focus-visible` для интерактивных элементов.
- **Что сделать:**
  - Оставить одну карту цветов в `:root` и переопределять переменные только в `[data-theme="dark"]` и `[data-theme="light"]`.
  - Добавить `:focus-visible` для ссылок, кнопок, `.icon-button`, `.talks-filter`.

### 7. Мёртвый код
- **Файл:** `_includes/resume.njk`.
- **Проблема:** не используется; везде используется `resume-v2.njk`.
- **Что сделать:** удалить `_includes/resume.njk`.

## Средний приоритет

### 8. i18n: hreflang и единый язык в шапке
- **Файл:** `_includes/base.njk`.
- **Проблема:**
  - В `<head>` нет `<link rel="alternate" hreflang="...">`.
  - У `<header>` свой `lang` с fallback `ru`, у `<html>` — fallback `en`.
- **Что сделать:**
  - Убрать `lang` у `<header>` (достаточно `<html lang>`).
  - Единый fallback для `lang` — `ru` (так как русский язык по умолчанию).
  - Добавить `<link rel="alternate" hreflang="ru" ...>` и `hreflang="en" ...>` для каждой страницы, плюс `x-default`.

### 9. Семантика: даты
- **Файлы:** `_includes/resume-v2.njk`, `talks/index.njk`, `talks/en/index.njk`, `resume/index.md`, `resume/en.md`.
- **Проблема:** годы докладов и поле `updated` в резюме не обёрнуты в `<time datetime="...">`.
- **Что сделать:**
  - Оборачивать `talk.year` в `<time datetime="{{ talk.year }}">`.
  - Добавить машиночитаемый `datetime` в `updated` (например, `2026-07-14`) и использовать `<time>`.

### 10. CSS: `transition: all` и hardcoded цвета
- **Файл:** `assets/css/main.css`.
- **Проблема:**
  - `.button` и `.talks-card` используют `transition: all` — это лишние layout/paint.
  - В нескольких местах `#ffffff`, `#1f2328`, `rgba(255,255,255,…)` вместо CSS-переменных.
- **Что сделать:**
  - Заменить `transition: all` на конкретные свойства (`color`, `border-color`, `transform`, `box-shadow`).
  - Вынести белый/чёрный в переменные или использовать существующие `--gh-base`, `--gh-heading`.

### 11. JS: `localStorage` без try/catch
- **Файл:** `_includes/base.njk`.
- **Проблема:** `localStorage.getItem('theme')` может бросать ошибку в приватном/ограниченном режиме браузера.
- **Что сделать:** обернуть чтение и запись темы в `try/catch`.

### 12. CSS print: устаревшие свойства
- **Файл:** `assets/css/main.css`.
- **Проблема:**
  - `page-break-inside` устарело; использовать `break-inside`.
  - `font-size-adjust: none` — невалидное значение.
  - Много `!important` в print-стилях.
- **Что сделать:** заменить на `break-inside`, убрать `font-size-adjust`, уменьшить количество `!important` через `@layer` или специфичность.

## Низкий приоритет

### 13. Мелочи
- **Шрифты:** в `AGENTS.md` указаны Tilda Sans VF и Cormorant Garamond, а в `fonts.css` используются Inter и Source Serif 4. Привести документацию или реализацию к единому виду.
- **Лишний override:** `templateEngineOverride: njk` в `index.md` и `en/index.md` не нужен, так как `.eleventy.js` уже настроен на `njk`.
- **Неиспользуемый атрибут:** `data-video-id` в карточках докладов хранится, но не читается. Удалить или использовать.
- **Preconnect:** добавить `<link rel="preconnect" href="https://img.youtube.com">` для ускорения загрузки миниатюр.
- **CSS-токены:** повторяющиеся `calc(.75em + .1vw)`, `1px solid var(--gh-surface1)` и т.п. можно вынести в CSS-переменные.
- **Описание:** `meta description` падает на `title`, если не задано. Сделать `description` обязательным front matter или дать осмысленный fallback.
- **Eleventy config:** рассмотреть добавление `dir` и глобального `site` data-файла для базового URL, суффикса title и других настроек.

## Порядок работы (рекомендация)

1. Безопасность и доступность YouTube (п. 1).
2. Skip-to-content (п. 2).
3. SEO-мета и canonical (п. 3).
4. CSS-темы и фокус (п. 6).
5. Производительность главной (п. 5).
6. Удаление мёртвого кода (п. 7).
7. i18n: hreflang и единый язык (п. 8).
8. Семантика дат (п. 9).
9. Дубликаты шаблонов i18n (п. 4) — это крупный рефакторинг, лучше делать отдельно.
10. Остальные средние и низкие приоритеты по желанию.
