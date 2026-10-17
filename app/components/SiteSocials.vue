<script setup lang="ts">
import { socials } from '~/data/site'
</script>

<template>
  <div class="social-links">
    <a v-for="item in socials" :key="item.label" class="social-link" :href="item.href" target="_blank" rel="noreferrer" :aria-label="item.label">{{ item.label }}</a>
  </div>
</template>
