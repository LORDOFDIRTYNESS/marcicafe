<script setup lang="ts">

import ReservationTitle from "./ReservationTitle.vue";
import A_GroupBookingInfo from "./disclaimerBookingInfo/A_GroupBookingInfo.vue";
import A_GroupReservationForm from "./form/A_GroupReservationForm.vue";
import {ref} from "vue";

// shared checkbox state
const isChecked = ref(false)
</script>

<template>
  <ReservationTitle/>
  <A_GroupBookingInfo v-model="isChecked" />
  <A_GroupReservationForm :is-checked="isChecked"
                          @resetAcknowledgement="isChecked = false"/>
</template>

<style scoped>

</style>