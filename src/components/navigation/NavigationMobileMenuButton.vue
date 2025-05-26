<!-- components/BurgerButton.vue -->
<template>
  <button
      class="relative inline-flex items-center justify-center transition-all duration-300 text-primary-500 animate-slide-in-right"
      :class="isScrolledDown ? 'h-14 w-14' : 'h-20 w-20'"
  >
    <span class="sr-only">Open main menu</span>

    <!-- SVG Burger / X -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        class="w-full h-full text-primary-50"
        stroke="currentColor"
        stroke-width=".3"
        fill="none"
        stroke-linecap="square"
    >
      <!-- three lines -->
      <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
        <!-- burger → X -->
        <animate
            id="start"
            dur="0.2s"
            attributeName="d"
            values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
            fill="freeze"
            begin="click"
        />
        <!-- X → burger -->
        <animate
            id="reverse"
            dur="0.2s"
            attributeName="d"
            values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
            fill="freeze"
            begin="click+0.25s"
        />
      </path>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  isScrolledDown: boolean
}>()
</script>

<style scoped>
/* optional: keyframe from your original */
@keyframes slide-in-right {
  0%   { transform: translateX(200%); opacity: 0; }
  100% { transform: translateX(0);    opacity: 1; }
}
.animate-slide-in-right {
  animation: slide-in-right 0.7s ease-out both;
}
</style>
