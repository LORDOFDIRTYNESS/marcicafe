<template>
  <div class="flex flex-col items-center justify-center space-y-2" id="acknowledgement">
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
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>
