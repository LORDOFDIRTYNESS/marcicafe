<template>
  <h1 class="text-primary-500 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-4 leading-none flex flex-wrap items-center justify-center gap-2">
    <img src="../../../assets/icons/megaphone-left.svg" alt="Marci Logo" class="h-8 sm:h-12" />
    {{ t('reservation.groupBookingInfoTitle') }}
    <img src="../../../assets/icons/megaphone-right.svg" alt="Marci Logo" class="h-8 sm:h-12" />
  </h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>