<script setup lang="ts">
definePageMeta({ pageKey: 'contacts' })
useHead({
  title: "Сударь Барбершоп | Контакты",
  meta: [{ name: 'description', content: "Контакты Сударь Барбершоп: адрес, часы работы, телефон, маршрут и запись." }],
  bodyAttrs: { 'data-page': 'contacts' },
})
</script>

<template>
<section class="page-frame" data-page-root data-label="Контакты">
      <div class="page-inner">
        <section class="contact-layout">
          <div class="contact-panel">
            <header class="page-title-copy">
              <h1 class="section-title">Контакты</h1>
            </header>

            <div class="contact-list">
              <div class="contact-row">
                <span class="contact-icon" data-contact-icon="location"><ContactIcon name="location" /></span>
                <div class="contact-text">
                  <strong>Адрес</strong>
                  <span>Заполярная ул., 37, корп. 2, микрорайон Славянский, Прикубанский внутригородской округ, Краснодар</span>
                </div>
              </div>

              <div class="contact-row">
                <span class="contact-icon" data-contact-icon="clock"><ContactIcon name="clock" /></span>
                <div class="contact-text">
                  <strong>Режим работы</strong>
                  <span>Ежедневно<br />10:00 — 22:00</span>
                </div>
              </div>

              <div class="contact-row">
                <span class="contact-icon" data-contact-icon="phone"><ContactIcon name="phone" /></span>
                <div class="contact-text">
                  <strong>Телефон</strong>
                  <a href="tel:+79892692442">+7 (989) 269-24-42</a>
                </div>
              </div>

              <div class="contact-row">
                <span class="contact-icon" data-contact-icon="send"><ContactIcon name="send" /></span>
                <div class="contact-text">
                  <strong>Социальные сети</strong>
                  <a href="https://vk.ru/sudarkrd1" target="_blank" rel="noreferrer">https://vk.ru/sudarkrd1</a>
                </div>
              </div>
            </div>
          </div>

          <BarbershopMap />
        </section>

        <section class="quote-band">
          <div>
            <div class="quote-mark">“</div>
            <div class="quote-text">
              Хорошая стрижка меняет не только внешность, но и настроение.
            </div>
          </div>
          <div class="paper-stamp">Сударь<br />approved</div>
        </section>
      </div>
    </section>
</template>
