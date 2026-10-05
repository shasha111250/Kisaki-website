<script setup lang="ts">
defineProps<{ label: string; title: string; description?: string }>()
</script>

<template>
  <div class="section-heading">
    <span class="eyebrow">{{ label }}</span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>
