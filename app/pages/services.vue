<script setup lang="ts">
import { services } from '~/data/site'
definePageMeta({ pageKey: 'services' })
useHead({
  title: "Сударь Барбершоп | Услуги",
  meta: [{ name: 'description', content: "Мужские и детские стрижки, оформление бороды, камуфляж, укладка и уход NISHMAN в Сударь Барбершоп." }],
  bodyAttrs: { 'data-page': 'services' },
})
</script>

<template>
<section class="page-frame" data-page-root data-label="Услуги">
        <div class="page-inner">
          <header class="page-title">
            <div class="page-title-copy">
              <h1 class="section-title">Услуги</h1>
              <p class="service-copy">
                Мы делаем не просто стрижки. Мы собираем образ, который смотрится чисто, уверенно и
                дорого.
              </p>
            </div>
            <div class="editorial-side-note">
              <span>Menu {{ String(services.length).padStart(2, '0') }}</span>
              <strong>Hair craft</strong>
              <span>Сударь standard</span>
            </div>
          </header>

          <section class="services-grid" data-services-grid>
            <ServiceCard v-for="service in services" :key="service.id" :service="service" />
          </section>
        </div>
      </section>
</template>
