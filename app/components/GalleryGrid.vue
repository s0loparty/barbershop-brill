<script setup lang="ts">
import { galleryItems } from '~/data/site'
const activeFilter = ref('all')
const currentIndex = ref<number | null>(null)
const filters = [
  { key: 'all', label: 'Все' },
  { key: 'haircut', label: 'Стрижки' },
  { key: 'beard', label: 'Борода' },
  { key: 'interior', label: 'Интерьер' },
  { key: 'process', label: 'Процесс' },
]
const activeItems = computed(() => activeFilter.value === 'all'
  ? galleryItems
  : galleryItems.filter(item => item.filter === activeFilter.value))
function applyFilter(key: string) {
  currentIndex.value = null
  activeFilter.value = key
}
</script>

<template>
  <section class="gallery-layout">
    <div class="gallery-filters">
      <button v-for="filter in filters" :key="filter.key" class="filter-button" :class="{ 'is-active': activeFilter === filter.key }" type="button" :data-filter="filter.key" :aria-pressed="activeFilter === filter.key" @click="applyFilter(filter.key)">{{ filter.label }}</button>
    </div>
    <div :key="activeFilter" class="gallery-grid" data-gallery-grid>
      <figure v-for="(item, index) in activeItems" :key="item.id" class="gallery-item stagger-item" tabindex="0" role="button" :aria-label="item.title" :data-lightbox-index="index" @click="currentIndex = index" @keydown.enter.prevent="currentIndex = index" @keydown.space.prevent="currentIndex = index">
        <img :src="item.image" :alt="item.title" loading="lazy" />
        <figcaption>
          <span class="gallery-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="gallery-meta"><strong>{{ item.title }}</strong><span>{{ item.category }}</span></span>
        </figcaption>
      </figure>
    </div>
    <GalleryLightbox v-model:index="currentIndex" :items="activeItems" />
  </section>
</template>
