<script setup lang="ts">
definePageMeta({ pageKey: 'home' })
useHead({
  title: "Сударь Барбершоп | Главная",
  meta: [{ name: 'description', content: "Премиальный барбершоп с editorial-эстетикой: мужские стрижки, бритьё, борода и атмосфера настоящего мужского клуба." }],
  bodyAttrs: { 'data-page': 'home' },
})
</script>

<template>
<section class="page-frame" data-page-root data-label="Главная">
        <div class="page-inner">
          <section class="hero-grid">
            <div class="hero-image">
              <img
                src="/images/hero.webp"
                alt="Барбер делает мужскую стрижку"
              />
            </div>
            <div class="brush-title" aria-hidden="true">Cut<br />Shave<br />Repeat</div>
            <div 
              class="hero-stamp text-center" 
              aria-hidden="true"
            >
              Сударь<br /> {{ new Date().getFullYear() }}
            </div>
            <div class="hero-copy">
              <div class="micro-meta stagger-item">01 editorial issue</div>
              <h1 class="hero-title stagger-item">Твой стиль.<br />Твои правила.</h1>
              <p class="hero-subtitle stagger-item">
                Мужские стрижки и бритьё в атмосфере характера
              </p>
              <div class="stagger-item">
                <NuxtLink class="cta-button" to="/contacts">Записаться <span aria-hidden="true">→</span></NuxtLink>
              </div>
            </div>
            <div class="hero-footer" aria-hidden="true">01 03</div>
          </section>

          <section class="manifesto">
            <div>
              <h2 class="section-title">Философия</h2>
              <p>
                Сударь работает как аккуратно собранный мужской журнал: минимум лишнего, максимум
                фактуры, точные линии, барберы с почерком и сервис без суеты.
              </p>
            </div>
            <div class="editorial-side-note">
              <span>Краснодар</span>
              <strong>10:00 — 22:00</strong>
              <span>Hair / beard / ritual</span>
            </div>
          </section>
        </div>
      </section>
</template>
