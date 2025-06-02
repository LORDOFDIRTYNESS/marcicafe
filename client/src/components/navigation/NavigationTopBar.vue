<template>
  <div class="shadow-2xl hidden md:flex justify-between sticky top-0 left-0 z-40 border-b-4 text-2xl md:text-3xl lg:text-4xl bg-primary-500 tracking-wide border-b-primary-50">
    <div class="flex-1 flex justify-start my-4 ml-2 lg:ml-4 xl:ml-10">
      <NavigationReserve :isScrolledDown="isScrolledDown" />
    </div>
    <div class="flex flex-1 justify-center mb-2">
      <NavigationLogoSimple :isScrolledDown="isScrolledDown" />
    </div>
    <div class="flex-1 flex justify-end my-4 mr-2 lg:mr-4 xl:mr-10">
      <NavigationGroupBooking :isScrolledDown="isScrolledDown" />
    </div>
  </div>
</template>

<script setup>
import NavigationMusique from "./NavigationMusique.vue";
import NavigationReserve from "./NavigationReserve.vue";
import NavigationLogo from "./NavigationLogo.vue";
import NavigationLogoSimple from "./NavigationLogoSimple.vue";

import {useDetectScrolledDown} from "../../composables/detectScrolledDown.js";
import NavigationGroupBooking from "./NavigationGroupBooking.vue";

const { isScrolledDown } = useDetectScrolledDown();
</script>
