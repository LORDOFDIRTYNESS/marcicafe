<template>
  <div class="dj-card mt-8 mb-14 mx-2 md:mx-auto border-double border-8 border-primary-900 p-4 sm:p-6 max-w-4xl text-primary relative shadow-xl">
    <!-- Headline -->
    <h1 class="text-primary-900 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-center mb-4 leading-none flex flex-wrap items-center justify-center gap-2">
      <img src="../../assets/image/dj_marci_grey.svg" alt="Marci Logo" class="h-8 sm:h-12 animate-spin" />
      <span>DJ Line-Up</span>
      <img src="../../assets/image/dj_marci_grey.svg" alt="Marci Logo" class="h-8 sm:h-12 animate-spin" />
    </h1>

    <p class="text-gray-700 text-center text-sm sm:text-base font-medium italic mb-4">{{ t('djSection.schedule') }}</p>

    <!-- Description -->
    <p class="text-gray-700 text-center text-lg font-semibold leading-relaxed tracking-widest mb-6">
      {{ t('djSection.vibe') }}
    </p>

    <!-- DJs List -->
    <div
        v-for="dj in djs"
        :key="dj.name"
        class="mb-8 border-t-2 border-gray-700 border-dashed pt-5 px-2 sm:px-4"
    >
      <!-- Top Row: Date & Genre -->
      <div class="flex flex-col sm:flex-row justify-between sm:items-start items-center text-sm uppercase text-gray-700 font-semibold mb-2">
        <span>{{ dj.date }}</span>
        <span class="italic sm:text-right">{{ dj.genre }}</span>
      </div>

      <!-- DJ Name and Links -->
      <div class="flex flex-col sm:flex-row justify-between sm:items-start items-center flex-wrap gap-y-2">
        <!-- DJ Name -->
        <p class="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          {{ dj.name }}
        </p>

        <!-- Social Links -->
        <div class="flex flex-wrap gap-4 text-xl sm:text-2xl font-medium pt-2 sm:pt-0 shrink-0">
          <template v-for="media in socialMediaLinks" :key="media.name">
            <a
                v-if="dj[media.name.toLowerCase()]"
                :href="dj[media.name.toLowerCase()]"
                target="_blank"
                rel="noopener"
                :aria-label="media.name"
                class="icon-flip text-primary-900 hover:text-primary-500"
            >
              <font-awesome-icon :icon="media.icon" />
              <span class="sr-only">{{ media.name }}</span>
            </a>
          </template>
        </div>
      </div>
    </div>

    <!-- Footer Logos -->
    <div class="flex flex-row justify-around items-center gap-4 mt-6 pt-8 border-t-2 border-gray-700 border-dashed text-center text-sm uppercase font-bold px-6">
      <img src="../../assets/Marci%206600-6602%20Wine%20Glass%20FINAL-01-cropped.svg" alt="Address" class="h-24 sm:h-32 md:h-40 w-auto" />
      <img src="../../assets/Marci%20Smile%20and%20a%20Pie%20copy%20(1)%20(1).png" alt="Address" class="h-24 sm:h-32 md:h-40 w-auto" />
    </div>
  </div>
</template>


<script setup>
import { useI18n } from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n();

const socialMediaLinks = [
  { name: "Spotify", icon: ["fab", "spotify"] },
  { name: "Instagram", icon: ["fab", "instagram"] },
  { name: "TikTok", icon: ["fab", "tiktok"] }
];


const djs = [
        {
          name: 'DJ Marci',
          genre: 'House / Disco',
          date: 'Friday, May 24',
          instagram: 'https://instagram.com/djmarci',
          tiktok: 'https://instagram.com/djmarci',
          spotify: 'https://instagram.com/djmarci',
        },
        {
          name: 'DJ Kris Guilty',
          genre: 'Soul / Funk / Vinyl only',
          date: 'Saturday, May 25',
          instagram: 'https://instagram.com/krisguilty',
          tiktok: '',
          spotify: 'https://open.spotify.com/artist/example',
        },
        {
          name: 'La Rama Selecta',
          genre: 'House / Disco',
          date: 'Sunday, May 26',
          instagram: '',
          tiktok: 'https://tiktok.com/larama',
          spotify: 'https://open.spotify.com/artist/larama',
        }
];
</script>

<style scoped>



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
