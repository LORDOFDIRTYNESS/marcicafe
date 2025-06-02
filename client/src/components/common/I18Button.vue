<template>
  <div class="fixed bottom-0 left-1 z-50">
    <Switch
        v-model="isFrench"
        @update:modelValue="switchLanguage"
        :class="isFrench ? 'bg-primary-500' : 'bg-primary-900'"
        class="relative inline-flex h-[28px] w-[63px] md:h-[40px] md:w-[83px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <!-- Labels inside switch -->
      <span class="absolute left-2 top-1 text-xs md:text-lg font-bold text-primary-50">FR</span>
      <span class="absolute right-2 top-1 text-xs md:text-lg font-bold text-primary-50">EN</span>

      <!-- Sliding knob -->
      <span
          aria-hidden="true"
          :class="isFrench ? 'translate-x-8 md:translate-x-10' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[24px] w-[28px] md:h-[36px] md:w-[39px]  transform rounded-full bg-primary-50 shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Retrieve saved language from localStorage or default to 'fr'
const savedLocale = localStorage.getItem('locale') || 'fr'
locale.value = savedLocale

// Sync toggle with language
const isFrench = ref(locale.value === 'fr')

// Update i18n locale on switch and save to localStorage
function switchLanguage(value) {
  locale.value = value ? 'fr' : 'en'
  localStorage.setItem('locale', locale.value)
}
</script>
