<script setup>
import { toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  form: Object,
  v$: Object,
})

const { form, v$ } = toRefs(props)
const { t } = useI18n()

const contactFields = [
  { name: 'firstName', label: 'reservation.contactFields.firstName', type: 'text' },
  { name: 'lastName', label: 'reservation.contactFields.lastName', type: 'text' },
  { name: 'email', label: 'reservation.contactFields.email', type: 'email' },
  { name: 'phone', label: 'reservation.contactFields.phone', type: 'tel' },
]
</script>

<template>
  <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-500 mb-0">{{ t('reservation.contact') }}</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-5">
    <!-- First Name -->
    <div>
      <label for="firstName" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700 ">
        {{ t('reservation.contactFields.firstName') }} *
      </label>
      <div class="relative">
        <input
            v-model="form.firstName"
            id="firstName"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2 bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                   hover:border-primary-500 hover:ring-2 transition duration-200"
            :class="{ 'border-red-500': v$.firstName.$error }"
        />
        <p v-if="v$.firstName.$errors.some(e => e.$property !== 'email')" class="absolute text-red-600 text-xs" style="top: 100%; left: 0;">
          {{ t('reservation.error.required') }}
        </p>
      </div>
    </div>

    <!-- Last Name -->
    <div>
      <label for="lastName" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
        {{ t('reservation.contactFields.lastName') }} *
      </label>
      <div class="relative">
        <input
            v-model="form.lastName"
            id="lastName"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2 bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                   hover:border-primary-500 hover:ring-2 transition duration-200"
            :class="{ 'border-red-500': v$.lastName.$error }"
        />
        <p v-if="v$.lastName.$errors.some(e => e.$property !== 'email')" class="absolute text-red-600 text-xs" style="top: 100%; left: 0;">
          {{ t('reservation.error.required') }}
        </p>
      </div>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
        {{ t('reservation.contactFields.email') }} *
      </label>
      <div class="relative">
        <input
            v-model="form.email"
            id="email"
            type="email"
            class="w-full border border-gray-300 rounded-md p-2 bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                   hover:border-primary-500 hover:ring-2 transition duration-200"
            :class="{ 'border-red-500': v$.email.$error }"
        />
        <p v-if="v$.email.$errors.some(e => e.$property === 'email')" class="absolute text-red-600 text-xs" style="top: 100%; left: 0;">
          {{ t('reservation.error.email') }}
        </p>
      </div>
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
        {{ t('reservation.contactFields.phone') }} *
      </label>
      <div class="relative">
        <input
            v-model="form.phone"
            id="phone"
            type="tel"
            class="w-full border border-gray-300 rounded-md p-2 bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                   hover:border-primary-500 hover:ring-2 transition duration-200"
            :class="{ 'border-red-500': v$.phone.$error }"
        />
        <p v-if="v$.phone.$errors.some(e => e.$property !== 'email')" class="absolute text-red-600 text-xs" style="top: 100%; left: 0;">
          {{ t('reservation.error.required') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input.border-red-500 {
  border-color: #f87171;
}
</style>
