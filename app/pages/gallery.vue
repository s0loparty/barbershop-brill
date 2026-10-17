<script setup lang="ts">
definePageMeta({ pageKey: 'gallery' })
useHead({
  title: "Сударь Барбершоп | Галерея",
  meta: [{ name: 'description', content: "Editorial gallery Сударь: стрижки, борода, интерьер и процесс работы барберов." }],
  bodyAttrs: { 'data-page': 'gallery' },
})
</script>

<template>
<section class="page-frame" data-page-root data-label="Галерея">
        <div class="page-inner">
          <header class="page-title">
            <div class="page-title-copy">
              <h1 class="section-title">Галерея</h1>
              <p class="gallery-caption">
                Живая подборка Сударь: чистые фейды, точная борода, тёмный интерьер и ритуал работы
                в деталях.
              </p>
            </div>
          </header>

          <GalleryGrid />
        </div>
      </section>
</template>
