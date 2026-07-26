---
title: Алексей Золотых — руководитель разработки и спикер
description: Личный сайт и резюме Алексея Золотых — руководителя разработки с 18+ годами в разработке.
layout: base.njk
templateEngineOverride: njk
lang: ru
alternateUrl: /en/
seo: |
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Алексей Золотых",
    "alternateName": "Alexey Zolotyh",
    "url": "https://zolotyh.com",
    "image": "https://zolotyh.com/assets/images/avatar.jpg",
    "jobTitle": "Руководитель разработки",
    "description": "Руководитель разработки и спикер с 18+ годами в разработке программного обеспечения.",
    "sameAs": [
      "https://www.youtube.com/@zolotyh",
      "https://github.com/zolotyh",
      "https://www.linkedin.com/in/zolotyh/",
      "https://t.me/zolotyh"
    ]
  }
  </script>
---

<section class="hero">
  <div class="hero-content">
    <div class="hero-lockup hero-fade-up" style="--fade-delay: 0.1s;">
      <img class="hero-avatar" src="/assets/images/portrait-square.jpg" alt="" width="112" height="112" loading="eager" fetchpriority="high" decoding="async">
      <h1 class="hero-title">Алексей<br>Золотых</h1>
    </div>
    <p class="hero-lead hero-fade-up" style="--fade-delay: 0.2s;">Руководитель разработки</p>
    <nav class="hero-links hero-fade-up" style="--fade-delay: 0.3s;">
      <a href="/resume/" class="button">Резюме на русском</a>
      <a href="/resume/en/" class="button">Resume in English</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <div class="speaker-header">
      <div class="speaker-intro">
        <h2 class="speaker-title">50+ выступлений</h2>
        <p class="speaker-lead">С 2016 года на конференциях HolyJS, FrontendConf, CodeFest, TeamleadConf, SECON, Стачки, DUMP и других.</p>
      </div>
    </div>

    {% set featuredTalks = talks.all | selectattr('featured') %}
    <div class="speaker-talks">
      {% for talk in featuredTalks %}
        <article class="speaker-talk">
          <a href="{{ talk.video }}" target="_blank" rel="noopener noreferrer" class="speaker-talk-link">
            <div class="speaker-talk-thumb">
              <img src="https://img.youtube.com/vi/{{ talk.videoId }}/mqdefault.jpg" alt="{{ talk.title }}" loading="lazy" width="320" height="180">
            </div>
            <p class="speaker-talk-meta">{{ talk.conference }} · <time datetime="{{ talk.year }}">{{ talk.year }}</time></p>
            <h3 class="speaker-talk-title">{{ talk.title }}</h3>
          </a>
        </article>
      {% endfor %}
    </div>

    <p class="speaker-links"><a href="/talks/" class="button">Все доклады</a></p>
  </div>
</section>
