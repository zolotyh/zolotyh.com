---
title: Алексей Золотых — руководитель разработки
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
    "description": "Руководитель разработки с 18+ годами в разработке программного обеспечения.",
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
    <div class="hero-meta">
      <img class="hero-avatar" src="/assets/images/portrait-square.jpg" alt="" width="112" height="112" loading="eager" fetchpriority="high" decoding="async">
      <p class="hero-role">Руководитель разработки</p>
    </div>
    <h1 class="hero-title" aria-label="Алексей Золотых"><span aria-hidden="true"><span class="hero-char" style="--i:0">А</span><span class="hero-char" style="--i:1">л</span><span class="hero-char" style="--i:2">е</span><span class="hero-char" style="--i:3">к</span><span class="hero-char" style="--i:4">с</span><span class="hero-char" style="--i:5">е</span><span class="hero-char" style="--i:6">й</span><br><span class="hero-line--outline"><span class="hero-char" style="--i:7">З</span><span class="hero-char" style="--i:8">о</span><span class="hero-char" style="--i:9">л</span><span class="hero-char" style="--i:10">о</span><span class="hero-char" style="--i:11">т</span><span class="hero-char" style="--i:12">ы</span><span class="hero-char" style="--i:13">х</span></span></span></h1>
    <nav class="hero-links hero-fade-up" style="--fade-delay: 1s;">
      <a href="/resume/" class="button">Резюме на русском</a>
      <a href="/resume/en/" class="button">Resume in English</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <div class="speaker-header">
      <h2 class="speaker-stat" aria-label="50+ выступлений"><span class="speaker-stat-num" aria-hidden="true">50+</span></h2>
      <div class="speaker-intro">
        <p class="speaker-index">01</p>
        <p class="speaker-stat-label">выступлений</p>
        <p class="speaker-lead">С 2016 года на конференциях HolyJS, FrontendConf, CodeFest, TeamleadConf, SECON, Стачка, DUMP и других.</p>
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
