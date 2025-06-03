<template>
  <div class="dj-card mt-8 mb-6 lg:mb-14 mx-2 md:mx-auto rounded-xl border-double border-8 border-primary-900 p-4 sm:p-6
  max-w-4xl text-primary relative shadow-xl">
    <GroupBookingHeadline />

    <div class="font-work font-semibold text-gray-700">
      <CapacityAndServices />
      <MenuAndPrices />
      <RestrictionsAndConditions />
    </div>

    <GroupBookingAcknowledgement v-model="isChecked" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import GroupBookingHeadline from './GroupBookingHeadline.vue'
import CapacityAndServices from './CapacityAndServices.vue'
import MenuAndPrices from './MenuAndPrices.vue'
import RestrictionsAndConditions from './RestrictionsAndConditions.vue'
import GroupBookingAcknowledgement from './GroupBookingAcknowledgement.vue'

const { t } = useI18n();

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<style scoped>
.dj-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('../../../assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}
</style>
