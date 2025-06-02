<script setup>
import { useI18n } from 'vue-i18n';
import HomeFooter from "../components/footer/HomeFooter.vue";
import InstagramLink from "../components/instagram/instagramLink.vue";
import CallToAction from "../components/callToAction/CallToAction.vue";
import Landing from "../components/landing/Landing.vue";
import ScrollingBanner from "../components/scrollingBanner/ScrollingBanner.vue";
import DjCta from "../components/music/DjCta.vue";

const { t } = useI18n();
</script>

<template>
  <div class="">
    <landing/>
    <call-to-action/>
    <scrolling-banner/>
    <InstagramLink/>
    <scrolling-banner/>
    <DjCta/>
    <HomeFooter/>
  </div>
</template>

<style scoped>

</style>