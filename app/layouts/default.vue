<script setup lang="ts">
import { bookingUrl } from '~/data/site'

const menuOpen = ref(false)
const menu = useTemplateRef<HTMLElement>('menu')
const route = useRoute()
useOverlay(menuOpen, menu, () => { menuOpen.value = false })
watch(() => route.fullPath, () => { menuOpen.value = false })

function onResize() {
  if (window.innerWidth > 1080) menuOpen.value = false
}
onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <div class="site-shell" data-shell>
    <aside class="site-sidebar" aria-label="Основная навигация">
      <SiteBrand />
      <SiteNavigation />
      <div class="sidebar-bottom">
        <div class="side-divider" />
        <NuxtLink class="booking-link" :to="bookingUrl">Записаться <span aria-hidden="true">→</span></NuxtLink>
        <SiteSocials />
      </div>
    </aside>

    <div id="fullscreen-menu" ref="menu" class="fullscreen-menu" :class="{ 'is-open': menuOpen }" data-fullscreen-menu :aria-hidden="!menuOpen" :inert="!menuOpen" role="dialog" aria-modal="true" aria-label="Меню">
      <div class="mobile-header">
        <SiteBrand @click="menuOpen = false" />
        <button class="menu-toggle" :class="{ 'is-open': menuOpen }" type="button" data-menu-toggle :aria-expanded="menuOpen" aria-label="Закрыть меню" @click="menuOpen = false">
          <span class="menu-toggle-bar" />
        </button>
      </div>
      <SiteNavigation mobile @navigate="menuOpen = false" />
      <div class="sidebar-bottom">
        <NuxtLink class="booking-link" :to="bookingUrl" data-nav-link="mobile" @click="menuOpen = false">Записаться <span aria-hidden="true">→</span></NuxtLink>
        <SiteSocials />
      </div>
    </div>

    <main class="site-main">
      <header class="mobile-header">
        <SiteBrand />
        <button class="menu-toggle" :class="{ 'is-open': menuOpen }" type="button" data-menu-toggle :aria-expanded="menuOpen" aria-controls="fullscreen-menu" aria-label="Открыть меню" @click="menuOpen = !menuOpen">
          <span class="menu-toggle-bar" />
        </button>
      </header>
      <slot />
    </main>
  </div>
</template>
