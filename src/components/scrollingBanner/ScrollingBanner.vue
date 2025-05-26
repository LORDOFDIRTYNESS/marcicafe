<template>
  <div class="
  overflow-hidden whitespace-nowrap relative w-full bg-primary-500 text-primary-50 shadow-box
  border-t-8 border-b-8 border-primary-900 border-double
  py-2 md:py-3 lg:py-4 xl:py-5">
    <div class="inline-block whitespace-nowrap animate-scroll-left">
      <template v-for="n in 3" :key="n">
        <span v-for="(item, index) in repeatedText" :key="`${n}-${index}`"
              class="
              inline-flex items-center justify-center mr-5
              text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span class="inline-block mr-2">{{ item }}</span>
          <img :src="getIcon(index)" alt="Icon" class="h-12 w-auto ml-2" />
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
import pizzaIcon from '../../assets/icons/pizza-right-creme.svg';
import wineGlassIcon from '../../assets/image/wine_glass_creme.svg';
import djMarciIcon from '../../assets/image/dj_marci_creme.svg';
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n();

const repeatedText = computed(() => Array(10).fill(t('tagline')));
const icons = [pizzaIcon, wineGlassIcon, djMarciIcon];

const getIcon = (index) => icons[index % icons.length];
</script>

<style>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.3333%);
  }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
}
</style>