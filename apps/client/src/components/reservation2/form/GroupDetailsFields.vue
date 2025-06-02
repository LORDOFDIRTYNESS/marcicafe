<template>
  <div>
    <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-500">{{ t('reservation.groupDetails') }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-4 gap-x-8">
      <div>
        <label class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.group') }} </label>
        <input
            v-model="form.groupName"
            type="text"
            class="
                  w-full border border-gray-300 rounded-md p-2 bg-white
                  focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                  hover:border-primary-500 hover:ring-2 transition duration-200" />
      </div>
      <div>
        <label for="groupSize" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.guests') }} *</label>
        <div class="relative w-full">
          <!-- Minus Icon (left) -->
          <button
              type="button"
              @click="decrement"
              :disabled="props.form.groupSize <= 7"
              class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary-500">
            <font-awesome-icon icon="minus" />
          </button>

          <!-- Input Field -->
          <input
              type="number"
              id="groupSize"
              v-model.number="form.groupSize"
              min="7"
              max="25"
              class="w-full text-center border border-gray-300 rounded-md p-2 py-2 px-12 bg-white
         text-sm lg:text-md xl:text-lg
         focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
         hover:border-primary-500 hover:ring-2 transition duration-200"/>
          <!-- Plus Icon (right) -->
          <button
              type="button"
              @click="increment"
              :disabled="props.form.groupSize >= 25"
              class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
              text-gray-500 hover:text-primary-500">
            <font-awesome-icon icon="plus" />
          </button>
        </div>
      </div>
      <div>
        <label for="date" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
          {{ t('reservation.date') }} *
        </label>
        <div class="relative">
          <VueDatePicker
              v-model="form.date"
              locale="en-US"
              id="date"
              :enable-time-picker="false"
              :format="'yyyy-MM-dd'"
              :min-date="new Date()"
              style="height: 42px; line-height: 38px;"
              :class="{ 'border-red-500': v$.date.$error }"
          />
          <p v-if="v$.date.$error"
             class="absolute text-red-600 text-xs"
             style="top: 100%; left: 0;">
            {{ t('reservation.error.required') }}
          </p>
        </div>
      </div>

      <!-- Event Type -->
      <div>
        <div class="relative">
          <label class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.event') }} *</label>
          <Listbox v-model="form.eventType">
            <div class="relative">
              <ListboxButton
                  class="w-full border border-gray-300 rounded-md p-2 text-left bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none"
                  :class="{ 'border-red-500': v$.eventType.$error }">
                {{ form.eventType ? t(eventTypeOptions.find(o => o.value === form.eventType)?.label) : t('reservation.selectEventType') }}
              </ListboxButton>
              <ListboxOptions class="absolute mt-1 w-full border rounded-md bg-white z-10 max-h-60 overflow-auto">
                <ListboxOption
                    v-for="option in eventTypeOptions"
                    :key="option.value"
                    :value="option.value"
                    class="px-4 py-2 hover:bg-primary-900 hover:text-primary-50 cursor-pointer"
                >
                  {{ t(option.label) }}
                </ListboxOption>
              </ListboxOptions>
            </div>
          </Listbox>
          <p v-if="v$.eventType.$error"
             class="absolute text-red-600 text-xs"
             style="top: 100%; left: 0;">
            {{ t('reservation.error.required') }}
          </p>
        </div>
      </div>
    </div>
      <div class="col-span-3 mt-4">
        <label class="my-5 block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('groupreservations.formFields.service') }} *</label>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
              v-for="option in serviceCards"
              :key="option.value"
              @click="selectService(option.value)"
              :class="[
            'cursor-pointer transition-all border-3 rounded-xl shadow-sm p-6 text-center',
            selectedService === option.value ?
            'border-primary-900 bg-primary-500 text-primary-50 shadow-box' : 'bg-white border-gray-300 hover:border-primary-500 text-gray-700'
          ]"
          >
            <p class="text-base font-work font-semibold">
              {{ option.label }}
            </p>
          </div>
        </div>
        <!-- Error message -->
        <p v-if="v$.selectedService.$error" class="text-red-600 text-xs mt-2">
          {{ t('reservation.error.required') }}
        </p>
      </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useI18n } from 'vue-i18n'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'

const eventTypeOptions = [
  { label: 'reservation.eventTypes.birthday', value: 'birthday' },
  { label: 'reservation.eventTypes.anniversary', value: 'anniversary' },
  { label: 'reservation.eventTypes.engagement', value: 'engagement' },
  { label: 'reservation.eventTypes.baby_shower', value: 'baby shower' },
  { label: 'reservation.eventTypes.graduation', value: 'graduation' },
  { label: 'reservation.eventTypes.corporate', value: 'corporate' },
  { label: 'reservation.eventTypes.reunion', value: 'reunion' },
  { label: 'reservation.eventTypes.holiday', value: 'holiday' },
  { label: 'reservation.eventTypes.farewell', value: 'farewell' },
  { label: 'reservation.eventTypes.other', value: 'other' },
];

const props = defineProps({
  form: Object,
  v$: Object,
  eventTypeOptions: Array,
})

const { t } = useI18n()


const serviceCards = computed(() => [
  {
    value: '1st Service - (5:30 PM - 8:00 PM)',
    label: t('groupreservations.formFields.serviceOptions[0]')
  },
  {
    value: '2nd Service - (8:30 PM - 11:30 PM)',
    label: t('groupreservations.formFields.serviceOptions[1]')
  }
])

// sync selectedService with form.selectedService
const selectedService = computed({
  get() {
    return props.form.selectedService
  },
  set(value) {
    props.form.selectedService = value
  }
})

function selectService(value) {
  selectedService.value = value
}


function increment() {
  if (props.form.groupSize < 100) {
    props.form.groupSize++
  }
}

function decrement() {
  if (props.form.groupSize > 1) {
    props.form.groupSize--
  }

}
</script>



<style scoped>
input[type='date'], select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Hide default number input spinner */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
