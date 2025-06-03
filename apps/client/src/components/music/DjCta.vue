<script setup>
import { useRouter } from 'vue-router';
import {ref, onMounted, onUnmounted, computed} from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
const router = useRouter();

const title = computed(() => t('djSection.title'));
const titleWords = computed(() => title.value.split(' '));

const isVisible = ref(false);
const animatedTitleRef = ref(null);

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

let observer;
onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  if (animatedTitleRef.value) observer.observe(animatedTitleRef.value);
});

onUnmounted(() => {
  if (observer && animatedTitleRef.value) {
    observer.unobserve(animatedTitleRef.value);
  }
});

const navigateToInstagram = () => {
  window.open('https://www.instagram.com/marcisurlaplaza', '_blank', 'noopener,noreferrer');
};

const totalChars = computed(() =>
    titleWords.value.reduce((sum, word) => sum + word.length, 0)
)

const totalDuration = 1.2 // seconds

// Global index function for characters
const globalCharIndex = (wordIndex, charIndex) => {
  return titleWords.value
      .slice(0, wordIndex)
      .reduce((sum, word) => sum + word.length, 0) + charIndex
}
</script>

<template>

  <section class="hero bg-cover bg-center py-15 lg:py-20">
    <div class="flex flex-col justify-center items-center text-center h-full px-6">
      <h1
          :key = "title"
          class="text-primary-900 tracking-tight mb-10 text-shadow-light
               text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl max-w-5xl"
          ref="animatedTitleRef"
      >
        <span
            v-for="(word, wordIndex) in titleWords"
            :key="wordIndex"
            class="inline-block mr-2"
        >
          <span
              v-for="(char, charIndex) in word.split('')"
              :key="charIndex"
              class="inline-block"
              :class="{ 'animate-slide-up': isVisible }"
              :style="{ animationDelay: `${(globalCharIndex(wordIndex, charIndex) * (totalDuration / totalChars))}s` }"
          >
            {{ char }}
          </span>
        </span>
      </h1>

      <!-- Headline -->
      <p
          class="text-primary-500 w-full max-w-4xl py-4 md:py-5 xl:py-10
          text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
          :class="{ 'animate-slide-in-left': isVisible }"
          :style="{ opacity: isVisible ? 1 : 0 }"
      >
        {{ t('djSection.headline') }}
      </p>

      <!-- Body -->
      <p
          class="text-primary-500 font-bold max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-work
             pb-5 xl:pb-10"
          :class="{ 'animate-slide-in-right': isVisible }"
          :style="{ opacity: isVisible ? 1 : 0 }"
      >
        {{ $t('djSection.body') }}
        {{ $t('djSection.body') }}
        {{ $t('djSection.body') }}
        {{ $t('djSection.body') }}
        {{ $t('djSection.body') }}
        <a href="https://wafaudio.com/" target="_blank" rel="noopener noreferrer" class="underline text-primary-900">
          Waves and Frequencies
        </a>.
      </p>
      <p
          class="text-primary-900 font-bold max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          :class="{ 'animate-slide-in-right': isVisible }"
          :style="{ opacity: isVisible ? 1 : 0 }"
      >
        {{ t('djSection.instagram') }}
      </p>

    </div>
  </section>
</template>

<style scoped>
.text-contour-heavy {
  -webkit-text-stroke: 4px #6A2E35;
}
.text-contour-light {
  -webkit-text-stroke: 2px #6A2E35;
}

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