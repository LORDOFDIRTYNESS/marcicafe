<template>
  <footer class="dj-card text-[#1e1e1e] font-work font-semibold relative border-t-4 border-t-primary-900 shadow-[0_-4px_4px_rgba(0,0,0,0.1)]">
    <div class="  max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div class=" absolute left-0 right-0 top-4 h-4 border-t-2 border-dashed border-black"></div>

      <!-- Marci Brand -->
      <div class="hidden md:flex flex-col items-center justify-center px-6">
        <div class="w-[2px] h-32 bg-dashed-pattern"></div>
      </div>

      <div class="mb-6 md:mb-0 text-center">
        <img src="../../assets/icons/marci_blue.svg" alt="Marci Logo" class="w-auto h-8 mb-2 mx-auto" />
        <p class="text-xs tracking-wide">{{ t('footer.tagline') }}</p>
      </div>

      <div class="hidden md:flex flex-col items-center justify-center px-6">
        <div class="w-[2px] h-32 bg-dashed-pattern"></div>
      </div>

      <!-- Address and Events -->
      <div class="text-sm text-center">
        <p>{{ t('footer.location') }}</p>
        <p>{{ t('footer.djs') }}</p>
        <p class="italic">{{ t('footer.serial') }}</p>
      </div>

      <div class="hidden md:flex flex-col items-center justify-center px-6">
        <div class="w-[2px] h-32 bg-dashed-pattern"></div>
      </div>

      <!-- Socials & Contact -->
      <div class="mt-6 md:mt-0 text-center flex flex-col items-center">
        <p class="uppercase text-xs tracking-wider">{{ t('footer.follow') }}</p>
        <div class="flex flex-row gap-4 my-1">
          <a
              v-for="social in socialMediaLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="icon-flip text-2xl text-primary-500 hover:text-primary-900"
          >
            <font-awesome-icon :icon="social.icon" />
          </a>
        </div>
        <div class="text-center">
          <img src="../../assets/image/barcode.png" alt="Barcode" class="w-auto h-10" />
          <p class="text-xs font-mono mt-1">438 • 380 • 9199</p>
        </div>
      </div>

      <div class="hidden md:flex flex-col items-center justify-center px-6">
        <div class="w-[2px] h-32 bg-dashed-pattern"></div>
      </div>

      <div class="absolute left-0 right-0 bottom-1 h-4 border-t-2 border-dashed border-black"></div>
    </div>
  </footer>
</template>


<style scoped>
.bg-dashed-pattern {
  background-image: repeating-linear-gradient(
      to bottom,
      black,
      black 4px,
      transparent 4px,
      transparent 8px
  );
}

.dj-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('../../assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5; /* Adjust the opacity here */
  z-index: -1;
}
</style>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const socialMediaLinks = [
  { name: "Instagram", url: "https://www.instagram.com/marcisurlaplaza", icon: ["fab", "instagram"] }
];
</script>