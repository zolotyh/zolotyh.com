---
title: zolotyh.com
description: Personal website and resume of Alexey Zolotyh, Head of Engineering and engineering leader with 18+ years in software development.
layout: base.njk
templateEngineOverride: njk
---

<section class="hero hero--with-image">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-avatar">
      <img src="/assets/images/avatar.jpg" alt="Alexey Zolotyh" width="180" height="180">
    </div>
    <p class="hero-label">Engineering leader &amp; speaker</p>
    <h1 class="hero-title">Alexey Zolotyh</h1>
    <p class="hero-lead">Head of Engineering / Engineering Manager / Team Lead with 18+ years in software development.</p>
    <nav class="hero-links">
      <a href="/resume/en/" class="button button--light">Resume in English</a>
      <a href="/resume/" class="button button--light">Резюме на русском</a>
    </nav>
  </div>
</section>

<section class="speaker">
  <div class="speaker-content">
    <h2 class="speaker-title">50+ выступлений</h2>
    <p class="speaker-lead">С 2016 года на конференциях HolyJS, FrontendConf, CodeFest, TeamleadConf, SECON, Стачки, DUMP и других.</p>

    {% set featuredTalks = talks.all | selectattr('featured') %}
    <div class="speaker-talks">
      {% for talk in featuredTalks %}
        <article class="speaker-talk">
          <a href="{{ talk.video }}" target="_blank" rel="noopener noreferrer" class="speaker-talk-link">
            <div class="speaker-talk-thumb">
              <img src="https://img.youtube.com/vi/{{ talk.videoId }}/mqdefault.jpg" alt="{{ talk.title }}" loading="lazy" width="320" height="180">
            </div>
            <h3 class="speaker-talk-title">{{ talk.title }}</h3>
            <p class="speaker-talk-meta">{{ talk.conference }} · {{ talk.year }}</p>
          </a>
        </article>
      {% endfor %}
    </div>

    <p class="speaker-links"><a href="/talks/" class="button">Все доклады</a></p>
  </div>
</section>
