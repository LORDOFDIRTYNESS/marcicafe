<script setup>
import NavigationTopBar from "./components/navigation/NavigationTopBar.vue";
import NavigationMobile from "./components/navigation/NavigationMobile.vue";
import ScrollToTop from "./components/common/ScrollToTop.vue";
import I18Button from "./components/common/I18Button.vue";

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