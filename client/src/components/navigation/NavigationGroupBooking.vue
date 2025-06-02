<template>
  <div class="mx-5 transition-transform duration-300 ease-in-out"
       :style="{ transform: isHovered ? 'translateX(-20px)' : 'translateX(0)' }">
    <img src="/client/srcent/src/assets/icons/wine-bottle.svg"
         class="animate-slide-in-bottom w-auto min-h-10 my-2" alt="DJ MARCI"/>
  </div>

  <div class="flex flex-col items-center">
    <div class="flex items-center text-primary-50"
         @mouseenter="slideRight"
         @mouseleave="resetPosition">
      <a href="/reservation" class="animate-slide-in-right">{{t('navigation.group')}}</a>
    </div>
    <hr class="w-3/4 border-t-4 mt-2 animate-slide-in border-primary-50">
  </div>
</template>

<script setup lang="ts">
import {ref, defineProps} from 'vue';
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
};

const resetPosition = () => {
  isHovered.value = false;
};
</script>

<style scoped>
</style>