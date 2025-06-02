<template>
  <a href="/" class="flex items-center">
    <img
        src = "/client/srcent/src/assets/icons/marci_creme.svg"
        alt="Logo"
        class="lg:h-14 mt-2 object-contain animate-slide-in-bottom"
        :class="isScrolledDown ? 'h-10' : 'h-12'"
    />
  </a>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
defineProps({
  isScrolledDown: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
</style>