<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
<svg v-if="name === 'location'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
<svg v-else-if="name === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>
<svg v-else-if="name === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6.6 3.9 9.8 7a1.8 1.8 0 0 1 .3 2.2l-1.1 1.7a15 15 0 0 0 4.9 4.9l1.7-1.1a1.8 1.8 0 0 1 2.2.3l3.1 3.2a1.8 1.8 0 0 1-.3 2.8 8.8 8.8 0 0 1-4.8 1.1C8.8 22 2 15.2 2 7.8a8.8 8.8 0 0 1 1.1-4.8 1.8 1.8 0 0 1 2.8-.3Z"></path></svg>
<svg v-else-if="name === 'send'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M22 2 11 13"></path><path d="m22 2-7 20-4-9-9-4 20-7Z"></path></svg>
</template>
