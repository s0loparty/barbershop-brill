<script setup lang="ts">
import type { Service } from '~/data/site'
defineProps<{ service: Service }>()
</script>

<template>
  <article class="service-card stagger-item" :class="service.shape ? `service-card--${service.shape}` : undefined">
    <img class="service-image" :src="service.image" :alt="service.name" loading="lazy" />
    <div class="service-content">
      <div class="service-topline">{{ service.number }}</div>
      <h3 class="service-name">{{ service.name }}</h3>
      <div class="service-price">{{ service.price }}</div>
      <div class="service-duration">{{ service.duration }}</div>
    </div>
  </article>
</template>
