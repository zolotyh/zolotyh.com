---
title: Alexey Zolotyh — Engineering Manager
description: Personal website and resume of Alexey Zolotyh, Engineering Manager with 18+ years in software development.
layout: base.njk
templateEngineOverride: njk
lang: en
alternateUrl: /
seo: |
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alexey Zolotyh",
    "alternateName": "Алексей Золотых",
    "url": "https://zolotyh.com/en/",
    "image": "https://zolotyh.com/assets/images/avatar.jpg",
    "jobTitle": "Engineering Manager",
    "description": "Engineering Manager with 18+ years in software development.",
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
      <h1 class="hero-title">Alexey<br>Zolotyh</h1>
    </div>
    <p class="hero-lead hero-fade-up" style="--fade-delay: 0.2s;">Engineering Manager</p>
    <nav class="hero-links hero-fade-up" style="--fade-delay: 0.3s;">
      <a href="/resume/en/" class="button">Resume in English</a>
      <a href="/resume/" class="button">Резюме на русском</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <div class="speaker-header">
      <div class="speaker-intro">
        <h2 class="speaker-title">50+ talks</h2>
        <p class="speaker-lead">Since 2016 at conferences HolyJS, FrontendConf, CodeFest, TeamleadConf, SECON, nastachku.ru, DUMP and others.</p>
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

    <p class="speaker-links"><a href="/talks/en/" class="button">All talks</a></p>
  </div>
</section>
