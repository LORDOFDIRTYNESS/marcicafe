<template>
  <div class="dj-card mt-8 mb-14 mx-2 md:mx-auto border-double border-8 border-primary-900 p-4 sm:p-6 max-w-4xl text-primary relative shadow-xl">
    <!-- Headline -->
    <h1 class="text-primary-500 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-4 leading-none flex flex-wrap items-center justify-center gap-2">
      <img src="../../assets/icons/megaphone-left.svg" alt="Marci Logo" class="h-8 sm:h-12" />
      {{ t('reservation.groupBookingInfoTitle') }}
      <img src="../../assets/icons/megaphone-right.svg" alt="Marci Logo" class="h-8 sm:h-12" />
    </h1>
          <ul class="text-gray-700 text-left list-disc list-outside space-y-1 text-sm md:text-base font-work font-semibold mx-5 md:mx-10 lg:mx-20 py-2 md:py-4 lg:py-6">
            <li>{{ t('reservation.groupBookingInfo.duration') }}</li>
            <li>{{ t('reservation.groupBookingInfo.seating') }}</li>
            <li>{{ t('reservation.groupBookingInfo.cancellation') }}</li>
            <li>{{ t('reservation.groupBookingInfo.combiningTables') }}</li>
            <li>{{ t('reservation.groupBookingInfo.largeGroups') }}</li>
            <li>{{ t('reservation.groupBookingInfo.duplicateBookings') }}</li>
            <li>{{ t('reservation.groupBookingInfo.glutenFree') }}</li>
            <li>{{ t('reservation.groupBookingInfo.outsideFood') }}</li>
            <li>{{ t('reservation.groupBookingInfo.kitchenHours') }}</li>
            <li>{{ t('reservation.groupBookingInfo.terrace') }}</li>
          </ul>
    <div class="flex flex-col items-center justify-center space-y-2">
      <div class="space-x-2">
        <label for="read-checkbox" class="ml-2 text-gray-700 text-sm md:text-base">
          {{ t('reservation.groupBookingInfo.read') }}
        </label>
        <input
          id="read-checkbox"
          type="checkbox"
          v-model="isChecked"
          class="w-5 h-5 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
        />
      </div>
      <p class="font-semibold text-primary-500 text-sm md:text-lg lg:text-xl">
        {{ t('reservation.groupBookingInfo.closing') }}
      </p>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from "vue-i18n";
import { computed } from 'vue'

const { t } = useI18n();

// Accept `modelValue` as the prop
const props = defineProps({
  modelValue: Boolean
})

// Emit the update event
const emit = defineEmits(['update:modelValue'])

// Create a writable computed alias
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
  background-image: url('../../assets/olga-thelavart-vS3idIiYxX0-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5; /* Adjust the opacity here */
  z-index: -1;
}
</style>
