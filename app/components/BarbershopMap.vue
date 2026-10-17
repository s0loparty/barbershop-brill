<script setup lang="ts">
const map = useTemplateRef<HTMLElement>('map')
onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.async = true
  script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A27cfa1743fa8dca85c45a93aacede9b70530e06092c1b526c1b87f8073b93a68&width=100%&height=100%&lang=ru_RU&scroll=true'
  map.value?.append(script)
})
</script>

<template>
  <div id="barbershop-map" ref="map" style="border-radius: 16px; overflow: hidden;" class="map-panel" aria-label="Карта расположения барбершопа" />
</template>
