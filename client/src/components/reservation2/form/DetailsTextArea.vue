<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n();

defineProps({
  form: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="mt-10">
    <label for="details" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.details') }}</label>
    <textarea
        v-model="form.details"
        id="details"
        rows="4"
        class="w-full border rounded-md p-2 bg-white border-gray-300
               focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
               hover:border-primary-500 hover:ring-2 transition duration-200">

    </textarea>
    <p class="text-sm text-gray-500">{{ 1000 - form.details.length }} {{ t('reservation.remaining') }}</p>
  </div>
</template>

<style scoped>

</style>