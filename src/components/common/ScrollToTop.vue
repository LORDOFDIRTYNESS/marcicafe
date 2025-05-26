<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility);
});
</script>

<template>
  <div v-if="isVisible" class=" fixed bottom-1 right-2 text-white flex justify-center
  bg-primary-50 border-4 border-primary-900
  items-center rounded-full cursor-pointer z-50 transition-transform duration-300 hover:scale-110 p-3 " @click="scrollToTop">
    <font-awesome-icon :icon="['fas', 'hand-point-up']" class="text-base md:text-xl lg:text-2xl xl:text-3xl text-primary-900"/>
  </div>
</template>