<script setup lang="ts">
import { navigation } from '~/data/site'
defineProps<{ mobile?: boolean }>()
const emit = defineEmits<{ navigate: [] }>()
const route = useRoute()
</script>

<template>
  <nav :class="mobile ? 'fullscreen-nav' : 'sidebar-nav'">
    <NuxtLink
      v-for="item in navigation"
      :key="item.key"
      :to="item.href"
      class="nav-link"
      :class="{ 'is-active': route.meta.pageKey === item.key }"
      :aria-current="route.meta.pageKey === item.key ? 'page' : undefined"
      :data-nav-link="mobile ? 'mobile' : undefined"
      @click="emit('navigate')"
    >{{ item.label }}</NuxtLink>
  </nav>
</template>
