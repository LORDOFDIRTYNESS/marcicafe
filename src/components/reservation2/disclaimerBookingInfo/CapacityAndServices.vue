<template>
  <div class="mb-4">
    <p class="text-center mb-3">{{ t('groupreservations.intro') }}</p>
    <h3 class="font-semibold text-md md:text-lg mb-2 text-center underline">{{ t('groupreservations.capacityAndServices.title') }}</h3>
    <p class="whitespace-pre-line">{{ t('groupreservations.capacityAndServices.content.capacity') }} {{ t('groupreservations.capacityAndServices.content.terrace') }}</p>
    <p class="whitespace-pre-line mt-1">{{ t('groupreservations.capacityAndServices.content.services') }}</p>
    <ul class="list-inside list-disc">
      <li class="text-sm md:text-base">{{ t('groupreservations.capacityAndServices.content.service1') }}</li>
      <li class="text-sm md:text-base">{{ t('groupreservations.capacityAndServices.content.service2') }}</li>
    </ul>
    <p class="text-sm italic text-center text-red-600 mt-3">{{ t('groupreservations.capacityAndServices.content.note') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>