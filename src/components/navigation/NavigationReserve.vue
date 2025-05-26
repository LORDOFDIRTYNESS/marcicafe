<template>
  <div class="flex flex-col items-center">
    <div
        class="flex items-center text-primary-50"
        @mouseenter="slideRight"
        @mouseleave="resetPosition"
    >
      <a href="https://resy.com/cities/montreal-qc/venues/restaurant-marci" target="_blank" class="animate-slide-in-left">{{t('navigation.reservation')}}</a>
    </div>
    <hr class="w-3/4 border-t-4 mt-2 animate-slide-in border-primary-50">
  </div>

  <div class="mx-5 transition-transform duration-300 ease-in-out"
       :style="{ transform: isHovered ? 'translateX(20px)' : 'translateX(0)' }">
    <img src="/src/assets/icons/utensils.svg"
         class="animate-slide-in-bottom w-auto min-h-10 min-w-9 my-2" alt="DJ MARCI"/>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  isScrolledDown: {
    type: Boolean,
    required: true,
  },
});

// Reactive state to track hover status
const isHovered = ref(false);

// Functions to handle hover events
const slideRight = () => {
  isHovered.value = true;
  console.log(isHovered.value);
};

const resetPosition = () => {
  isHovered.value = false;
  console.log(isHovered.value);
};
</script>

<style scoped>
</style>
