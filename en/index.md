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
    <div class="hero-meta">
      <img class="hero-avatar" src="/assets/images/portrait-square.jpg" alt="" width="112" height="112" loading="eager" fetchpriority="high" decoding="async">
      <p class="hero-role">Engineering Manager</p>
    </div>
    <h1 class="hero-title" aria-label="Alexey Zolotyh"><span aria-hidden="true"><span class="hero-char" style="--i:0">A</span><span class="hero-char" style="--i:1">l</span><span class="hero-char" style="--i:2">e</span><span class="hero-char" style="--i:3">x</span><span class="hero-char" style="--i:4">e</span><span class="hero-char" style="--i:5">y</span><br><span class="hero-line--outline"><span class="hero-char" style="--i:6">Z</span><span class="hero-char" style="--i:7">o</span><span class="hero-char" style="--i:8">l</span><span class="hero-char" style="--i:9">o</span><span class="hero-char" style="--i:10">t</span><span class="hero-char" style="--i:11">y</span><span class="hero-char" style="--i:12">h</span></span></span></h1>
    <nav class="hero-links hero-fade-up" style="--fade-delay: 1s;">
      <a href="/resume/en/" class="button">Resume in English</a>
      <a href="/resume/" class="button">Резюме на русском</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <div class="speaker-header">
      <h2 class="speaker-stat" aria-label="50+ talks"><span class="speaker-stat-num" aria-hidden="true">50+</span></h2>
      <div class="speaker-intro">
        <p class="speaker-index">01</p>
        <p class="speaker-stat-label">talks</p>
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
