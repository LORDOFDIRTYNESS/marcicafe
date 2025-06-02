<template>
  <div class="mx-auto max-w-4xl pt-20 text-center">
    <!-- Animated Title -->
    <h1
        :key="title"
        class="text-primary-900 font-extrabold
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8"
        ref="animatedTitleRef"
    >
        <span
            v-for="(word, wordIndex) in titleWords"
            :key="wordIndex"
            class="inline-block mr-3"
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
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const title = computed(() => t('reservation.form'));
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

<style scoped>

</style>