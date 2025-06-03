<script setup>
import NavigationTopBar from "./components/navigation/NavigationTopBar.vue";
import NavigationMobile from "./components/navigation/NavigationMobile.vue";
import ScrollToTop from "./components/common/ScrollToTop.vue";
import I18Button from "./components/common/I18Button.vue";

import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

onMounted(() => {
  const savedLocale = localStorage.getItem('user-locales')
  const { locale } = useI18n({ useScope: 'global' })
  if (savedLocale) locale.value = savedLocale
})

</script>

<template>
  <div class="h-full flex flex-col">
    <NavigationMobile />
    <NavigationTopBar />
    <main class="flex-grow">
      <router-view/>
    </main>
    <ScrollToTop />
    <I18Button />
  </div>
</template>