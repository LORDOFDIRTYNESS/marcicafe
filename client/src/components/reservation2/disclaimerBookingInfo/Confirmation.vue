﻿<template>
  <div class="mb-4">
    <h3 class="font-semibold text-base md:text-lg mb-2 text-center underline">{{ t('reservation.groupBookingReservation.title') }}</h3>
    <p>{{ t('reservation.groupBookingReservation.description') }}</p>
    <div class="text-sm italic text-center text-red-600 mt-3">
      <ul>
        <li>{{ t('reservation.groupBookingReservation.note') }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>