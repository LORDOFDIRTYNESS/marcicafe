<template>
  <footer class="shadow-box bg-primary-500 flex flex-col items-center justify-around text-center gap-6 p-6 h-full bg-cover
  bg-center border-t-primary-900 border-t-8 border-double pt-24">
    <!-- Large Logo -->
    <div :class="{ 'animate-slide-in-right': isVisible }"
         :style="{'opacity': isVisible ? 1 : 0}">
      <img src="../../assets/image/marci_canard_creme.svg" alt="Logo" class="pb-2 sm:pb-3 md:pb-4 lg:pb-6 w-50 sm:w-60 md:w-70 lg:w-80 h-auto" />
    </div>

    <!-- Phone Number -->
    <div class="flex justify-center mt-10 pb-8 " ref="animatedSection">
      <a :href="`tel:${phoneNumber}`" class="text-primary-50 text-shadow-light text-[42px] sm:text-7xl md:text-8xl lg:text-9xl font-medium flex gap-1">
        <span
            v-for="(char, index) in phoneChars"
            :key="index"
            class="inline-block"
            :class="{ 'animate-slide-up': isVisible }"
            :style="{ animationDelay: `${index * 0.05}s` }"
        >
          {{ char }}
        </span>
      </a>
    </div>

    <!-- Address -->
    <div class="pb-8 "
         :class="{ 'animate-slide-in-left': isVisible }"
         :style="{'opacity': isVisible ? 1 : 0}">
      <a href="https://www.google.com/maps?sca_esv=35dc981465dfcda7&rlz=1C1VDKB_enCA1144CA1144&sxsrf=AHTn8zpdUoNCYoGtKmXmrvrR2mv5FzdrUw:1746559234612&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiEG1hcmNpIHJlc3RhdXJhbnQyBBAjGCcyDhAuGIAEGMcBGI4FGK8BMgoQABiABBhDGIoFMgoQABiABBgKGMsBMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I0BBQ2QNYlAxwAXgAkAEAmAGFAaABhAWqAQMyLjS4AQPIAQD4AQGYAgegAq4FwgIHECMYsAMYJ8ICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogTCAggQABiwAxjvBcICCBAAGIAEGKIEwgIFEAAY7wXCAgIQJsICCxAAGIAEGJECGIoFmAMA4gMFEgExIECIBgGQBgiSBwMyLjWgB70qsgcDMS41uAepBQ&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KUvzKgQAGclMMaHQhHq39Xwp&daddr=6600+Rue+St-Hubert,+Montr%C3%A9al,+QC+H2S+2M3"
         target="_blank" class="text-3xl md:text-4xl font-bold text-primary-50 ">
        <p>6600 Rue St-Hubert,</p>
        <p>Montréal, QC H2S 2M3</p>
      </a>
    </div>
    <p class="text-primary-50 uppercase text-xl md:text-2xl lg:text-3xl tracking-wider">{{ t('footer.follow') }}</p>
    <!-- Social Media Links -->
    <div class="flex flex-row gap-4 pb-8"
         :class="{ 'animate-slide-in-bottom': isVisible }"
         :style="{'opacity': isVisible ? 1 : 0}">
      <a
          v-for="social in socialMediaLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="icon-flip text-3xl md:text-4xl lg:text-5xl text-primary-50 hover:text-primary-900"
      >
        <font-awesome-icon :icon="social.icon" />
      </a>
    </div>

    <!-- Made By -->
    <div>
      <p class="text-sm lg:text-lg text-primary-50">{{t('trademark')}}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {useI18n} from "vue-i18n";
// import backgroundImage from '../../assets/image/background.png';

const { t } = useI18n();

const isVisible = ref(false);
const animatedSection = ref(null);

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.05, // Trigger when 10% of the component is visible
  });
  if (animatedSection.value) {
    observer.observe(animatedSection.value);
  }
});

onUnmounted(() => {
  if (observer && animatedSection.value) {
    observer.unobserve(animatedSection.value);
  }
});

const phoneNumber = '438-380-9199'
const phoneChars = phoneNumber.split('')

const socialMediaLinks = [
  { name: "Instagram", url: "https://www.instagram.com/marcisurlaplaza", icon: ["fab", "instagram"] }
];

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
