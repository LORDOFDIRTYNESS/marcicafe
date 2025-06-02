<template>
  <div class="mb-4">
    <h3 class="font-semibold text-base md:text-lg mb-2 text-center underline">{{ t('groupreservations.restrictionsAndConditions.title') }}</h3>
    <ul class="list-disc list-outside ml-5 space-y-1">
      <li>{{ t('groupreservations.restrictionsAndConditions.points[0]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[1]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[2]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[3]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[4]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[5]') }}</li>
      <li>{{ t('groupreservations.restrictionsAndConditions.points[6]') }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
