<script setup>
import lastsuppermobile from '../../assets/image/marci_lastSupper-cropped-mobile2.svg';

</script>

<template>
  <section class="hero border-b-6 border-b-primary-500">
    <div class="desktop-bg"></div>
    <img class="mobile-img" :src="lastsuppermobile" alt="Last Supper" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  display: block;
}

/* Desktop: background image */
.desktop-bg {
  background-image: url('../../assets/image/marci_lastSupper-cropped.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}

.mobile-img {
  display: none;
  width: 100%;
  height: auto;
}

/* Mobile behavior */
@media (max-width: 768px) {
  .desktop-bg {
    display: none;
  }

  .mobile-img {
    display: block;
  }
}
</style>

<!--#6A2E35 red-->
<!--#003a84 blue-->
<!--#e6cec2 creme-->
<!--#f8e100 yellow-->

