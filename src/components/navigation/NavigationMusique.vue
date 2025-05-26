<template>
  <div class="flex flex-col items-center">
    <div
        class="flex items-center text-primary-50"
        @mouseenter="slideRight"
        @mouseleave="resetPosition"
    >
      <a href="/musique" class="animate-slide-in-left">{{t('navigation.music')}}</a>
    </div>
    <hr class="w-3/4 border-t-4 mt-2 animate-slide-in border-primary-50">
  </div>

  <div class="mx-5 transition-transform duration-300 ease-in-out"
       :style="{ transform: isHovered ? 'translateX(20px)' : 'translateX(0)' }">
    <img src="/src/assets/image/dj_marci_creme.svg"
         class="animate-slide-in-bottom w-auto h-10 lg:h-14 min-h-10 min-w-10 lg:min-h-14 lg:min-w-14 my-2" alt="DJ MARCI"/>
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
