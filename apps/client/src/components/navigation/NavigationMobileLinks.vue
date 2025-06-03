<template>
  <transition name="fade">
    <div v-if="showLinks"
         class="absolute w-full p-4 md:hidden z-50 bg-primary-500"
         :class="isScrolledDown ? 'top-[56px]' : 'top-[80px]'"
         :style="isScrolledDown ? 'height: calc(100vh - 56px)' : 'height: calc(100vh - 80px)'">
      <ul class = "flex flex-col items-center justify-evenly h-full pb-36">
        <li v-for="(link, index) in navigation" :key="link.name"
            :style="{ animationDelay: `${(index)  * 0.1 + .2}s` }"
            class="flex items-center animate-slide-up-fade-in text-center">
          <span v-if="isActive(link.href)" class="mr-6 text-xl">
            <img :src="pizzaSliceLeftCreme" alt="Icon" class="w-12 h-12 sm:w-14 sm:h-14"/>
          </span>
          <a :href="link.href"
             :class="[isActive(link.href) ? 'underline' : '']"
             class="text-4xl sm:text-5xl font-extrabold tracking-wide text-primary-50">
            {{ link.name }}
          </a>
          <span v-if="isActive(link.href)" class="ml-6 text-xl">
              <img :src="pizzaSliceRightCreme" alt="Icon" class="w-12 h-12 sm:w-14 sm:h-14"/>
          </span>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { computed, defineProps} from 'vue'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import pizzaSliceLeftBlue from '../../assets/icons/pizza-left-blue.svg';
import pizzaSliceRightBlue from '../../assets/icons/pizza-right-blue.svg';
import pizzaSliceLeftCreme from '../../assets/icons/pizza-left-creme.svg';
import pizzaSliceRightCreme from '../../assets/icons/pizza-right-creme.svg';

const { t } = useI18n();

defineProps({
  showLinks: {
    type: Boolean,
    default: false
  },
  isScrolledDown: {
    type: Boolean,
    required: true,
  }
})

/* computed navigation → recomputed whenever `locales` changes */
const navigation = computed(() => [
  { name: t('navigation.home'),        href: '/' },
  { name: t('navigation.group'),       href: '/reservation' },
  { name: t('navigation.reservation'), href: 'https://resy.com/cities/montreal-qc/venues/restaurant-marci' }
])

const route = useRoute();

const isActive = (href) => route.path === href;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Slide-up and fade-in animation */
@keyframes slide-up-fade-in {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up-fade-in {
  opacity: 0; /* Ensure links are hidden initially */
  animation: slide-up-fade-in 0.3s ease-out forwards;
}
</style>