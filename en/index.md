---
title: Alexey Zolotyh — Engineering Leader & Speaker
description: Personal website and resume of Alexey Zolotyh, Head of Engineering and engineering leader with 18+ years in software development.
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
    "jobTitle": "Head of Engineering",
    "description": "Engineering leader and speaker with 18+ years in software development.",
    "sameAs": [
      "https://www.youtube.com/@zolotyh",
      "https://github.com/zolotyh",
      "https://www.linkedin.com/in/zolotyh/",
      "https://t.me/zolotyh"
    ]
  }
  </script>
---

<section class="hero hero--with-image">
  <div class="hero-carousel">
    <img src="/assets/images/hero-carousel/carousel-1.jpg" alt="" loading="eager" fetchpriority="high" decoding="async" width="1600" height="1067">
    <img src="/assets/images/hero-carousel/carousel-2.jpg" alt="" loading="lazy" decoding="async" width="1600" height="1067">
    <img src="/assets/images/hero-carousel/carousel-3.jpg" alt="" loading="lazy" decoding="async" width="1600" height="1067">
    <img src="/assets/images/hero-carousel/carousel-4.jpg" alt="" loading="lazy" decoding="async" width="1600" height="1067">
    <img src="/assets/images/hero-carousel/carousel-5.jpg" alt="" loading="lazy" decoding="async" width="1600" height="1067">
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-label hero-fade-up" style="--fade-delay: 0.1s;">Engineering leader &amp; speaker</p>
    <h1 class="hero-title hero-fade-up" style="--fade-delay: 0.2s;">Alexey Zolotyh</h1>
    <p class="hero-lead hero-fade-up" style="--fade-delay: 0.3s;">Head of Engineering / Engineering Manager / Team Lead with 18+ years in software development.</p>
    <nav class="hero-links hero-fade-up" style="--fade-delay: 0.4s;">
      <a href="/resume/en/" class="button button--light">Resume in English</a>
      <a href="/resume/" class="button button--light">Резюме на русском</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <div class="speaker-header">
      <div class="speaker-avatar">
        <img src="/assets/images/avatar.jpg" alt="Alexey Zolotyh" width="180" height="180">
      </div>
      <div class="speaker-intro">
        <h2 class="speaker-title">50+ talks</h2>
        <p class="speaker-lead">Since 2016 at conferences HolyJS, FrontendConf, CodeFest, TeamleadConf, SECON, Стачки, DUMP and others.</p>
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
            <h3 class="speaker-talk-title">{{ talk.title }}</h3>
            <p class="speaker-talk-meta">{{ talk.conference }} · <time datetime="{{ talk.year }}">{{ talk.year }}</time></p>
          </a>
        </article>
      {% endfor %}
    </div>

    <p class="speaker-links"><a href="/talks/en/" class="button">All talks</a></p>
  </div>
</section>
