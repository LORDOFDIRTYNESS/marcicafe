<template>
  <button
      class="relative inline-flex items-center justify-center transition-all duration-300 animate-slide-in-right text-primary-50"
      :class="isScrolledDown ? 'h-14 w-14' : 'h-20 w-20'"
      @click="toggle"
  >
    <span class="sr-only">Open main menu</span>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        class="w-full h-full"
        stroke="currentColor"
        stroke-width=".3"
        fill="none"
        stroke-linecap="square"
    >
      <path :d="burgerPath" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, computed } from 'vue'

defineProps<{
  isScrolledDown: boolean
}>()

// Control the open state
const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}

// Define the two icon paths
const burgerPath = computed(() =>
    isOpen.value
        ? 'M3,3L5,5L7,3 M5,5L5,5 M3,7L5,5L7,7' // X
        : 'M2,3L5,3L8,3 M2,5L8,5 M2,7L5,7L8,7' // burger
)
</script>

<style scoped>
@keyframes slide-in-right {
  0%   { transform: translateX(200%); opacity: 0; }
  100% { transform: translateX(0);    opacity: 1; }
}
.animate-slide-in-right {
  animation: slide-in-right 0.7s ease-out both;
}
</style>
