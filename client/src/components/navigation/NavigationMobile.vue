<template>
  <div class="sticky md:hidden top-0 z-50 border-b-3 bg-primary-500 border-b-primary-50">
    <div class="flex md:hidden justify-between mx-2 mb-2 items-center">
      <div class="flex flex-1 justify-start  h-12">
          <NavigationLogoSimple :isScrolledDown="isScrolledDown" />
      </div>
      <div class="flex-1 flex justify-end">
        <NavigationMobileMenuButton @click="toggleLinks" :size="getSize()" :isScrolledDown="isScrolledDown"/>
      </div>
    </div>
    <navigation-mobile-links :showLinks="showLinks" :isScrolledDown="isScrolledDown" />
  </div>
</template>

<script setup lang="ts">
import NavigationMobileMenuButton from "./NavigationMobileMenuButton.vue";
import NavigationMobileLinks from "./NavigationMobileLinks.vue";
import NavigationLogoSimple from "./NavigationLogoSimple.vue";
import {useDetectScrolledDown} from "../../composables/detectScrolledDown.js";
import {ref, watch} from "vue";

const { isScrolledDown } = useDetectScrolledDown();

const showLinks = ref(false);
const toggleLinks = () => {
  showLinks.value = !showLinks.value;
};

watch(showLinks, (newVal) => {
  if (newVal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

const size = ref(75)
const getSize = (): number => {
  if(isScrolledDown){
    size.value = 75;
  } else {
    size.value = 24;
  }
};
</script>
