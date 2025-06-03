<script setup>
import NavigationTopBar from "./components/navigation/NavigationTopBar.vue";
import NavigationMobile from "./components/navigation/NavigationMobile.vue";
import ScrollToTop from "./components/common/ScrollToTop.vue";
import I18Button from "./components/common/I18Button.vue";

console.log("Locale:", i18n.global.locale);
console.log("Messages:", i18n.global.getLocaleMessage(i18n.global.locale));
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