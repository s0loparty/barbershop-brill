<script setup lang="ts">
import type { GalleryItem } from '~/data/site'
const props = defineProps<{ items: GalleryItem[] }>()
const index = defineModel<number | null>('index', { required: true })
const element = useTemplateRef<HTMLElement>('lightbox')
const item = computed(() => index.value === null ? undefined : props.items[index.value])
const open = computed(() => Boolean(item.value))
const close = () => { index.value = null }
useOverlay(open, element, close)

function step(direction: number) {
  if (index.value === null || !props.items.length) return
  index.value = (index.value + direction + props.items.length) % props.items.length
}
function onKeydown(event: KeyboardEvent) {
  if (!open.value) return
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault()
    step(event.key === 'ArrowLeft' ? -1 : 1)
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div ref="lightbox" class="lightbox" :class="{ 'is-open': open }" data-lightbox :aria-hidden="!open" :inert="!open" role="dialog" aria-modal="true" aria-label="Просмотр фотографий" @click.self="close">
      <div class="lightbox-inner">
        <button class="lightbox-close" type="button" aria-label="Закрыть" data-lightbox-close @click="close">×</button>
        <div class="lightbox-image-wrap">
          <img v-if="item" :src="item.image" :alt="item.title" data-lightbox-image />
        </div>
        <div class="lightbox-meta">
          <strong data-lightbox-title>{{ item?.title }}</strong>
          <span data-lightbox-category>{{ item?.category }}</span>
        </div>
        <div class="lightbox-controls">
          <button class="lightbox-button" type="button" aria-label="Предыдущее фото" data-lightbox-prev @click="step(-1)">←</button>
          <button class="lightbox-button" type="button" aria-label="Следующее фото" data-lightbox-next @click="step(1)">→</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
