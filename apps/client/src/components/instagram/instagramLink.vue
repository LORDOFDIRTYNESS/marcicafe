<template>
  <div class="flex justify-center py-15 md:py-20 lg:py-25 xl:py-30 bg-primary-900 text-shadow-light" ref="animatedSection">
    <a :href="instagramUrl" target="_blank" class="hover:scale-105 transition text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-primary-50 font-medium flex">
      <span
          v-for="(char, index) in instagramChars"
          :key="index"
          class="inline-block"
          :class="{ 'animate-slide-up': isVisible }"
          :style="{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }"
      >
        {{ char }}
      </span>
    </a>
  </div>
</template>

<script setup>
import { useIntersection } from '../../composables/useIntersection.ts'

const instagramUrl = "https://www.instagram.com/marcisurlaplaza/";
const instagramHandle = '@MARCISURLAPLAZA';
const instagramChars = instagramHandle.split('');

const { target: animatedSection, isVisible } = useIntersection({ threshold: 0.1 })
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  60% {
    transform: translateY(-15%);
    opacity: 1;
  }
  80% {
    transform: translateY(5%);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 1.2s cubic-bezier(0.25, 1.5, 0.5, 1) forwards;
  opacity: 0;
}
</style>
