<template>
  <div class="relative py-20 lg:px-8 flex flex-col ">
    <div class="mx-auto max-w-4xl text-center">
      <!-- Animated Title -->
      <h1
          :key="title"
          class="text-primary-900 font-extrabold
               text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8"
          ref="animatedTitleRef"
      >
        <span
            v-for="(word, wordIndex) in titleWords"
            :key="wordIndex"
            class="inline-block mr-3"
        >
          <span
              v-for="(char, charIndex) in word.split('')"
              :key="charIndex"
              class="inline-block"
              :class="{ 'animate-slide-up': isVisible }"
              :style="{ animationDelay: `${(globalCharIndex(wordIndex, charIndex) * (totalDuration / totalChars))}s` }"
          >
            {{ char }}
          </span>
        </span>
      </h1>
    </div>

    <Disclaimer v-model:="isChecked"/>

    <form @submit.prevent="submitForm" class="w-full mx-auto px-8 lg:px-12 mt-0 md:mt-8 lg:mt-16 max-w-5xl sm:mt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div>
          <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-500">{{ t('reservation.contact') }}</h3>
          <div class="mt-4 space-y-4">
            <div v-for="field in contactFields" :key="field.name">
              <label :for="field.name" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t(field.label) }} *</label>
               <div class="relative">
                 <input
                  v-model="form[field.name]"
                  :id="field.name"
                  class="
                  w-full border border-gray-300 rounded-md p-2 bg-white
                  focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                  hover:border-primary-500 hover:ring-2 transition duration-200"
                  :class="{ 'border-red-500': v$[field.name].$error }"
                 />
                 <p v-if="v$[field.name].$errors.some(e => e.$property !== 'email')"
                    class="absolute text-red-600 text-xs"
                    style="top: 100%; left: 0;">
                   {{ t('reservation.error.required') }}
                 </p>
                 <p v-if="v$[field.name].$errors.some(e => e.$property === 'email')"
                    class="absolute text-red-600 text-xs"
                    style="top: 100%; left: 0;">
                   {{ t('reservation.error.email') }}
                 </p>
               </div>
            </div>
          </div>
        </div>

        <!-- Group Details -->
        <div>
          <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-500">{{ t('reservation.groupDetails') }}</h3>
          <div class="mt-4 space-y-4">
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
                    class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary-500">
                  <font-awesome-icon icon="minus" />
                </button>

                <!-- Input Field -->
                <input
                    type="number"
                    id="groupSize"
                    :value="form.groupSize"
                    class="
                    w-full text-center border border-gray-300 rounded-md p-2 py-2 px-12 bg-white
                    text-sm lg:text-md xl:text-lg
                    focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
                    hover:border-primary-500 hover:ring-2 transition duration-200"
                    :class="{ 'border-red-500': v$.groupSize.$error }"
                />
                <!-- Plus Icon (right) -->
                <button
                    type="button"
                    @click="increment"
                    class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary-500"
                >
                  <font-awesome-icon icon="plus" />
                </button>
              </div>
              <p v-if="v$.groupSize.$error" class="text-red-600 text-sm">
                {{ t('reservation.error.minimum') }}
              </p>
            </div>
            <div>
              <label for="date" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.date') }} *</label>
              <div class="relative">
              <VueDatePicker
                  v-model="form.date"
                  locale="en-US"
                  id="date"
                  time-picker-inline
                  style="height: 42px; line-height: 38px;"
                  input-class-name="custom-datepicker-input"
                  :class="{ 'border-red-500': v$.groupSize.$error }"
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
              <Listbox v-model="form.tourType">
                <div class="relative">
                  <ListboxButton
                      class="w-full border border-gray-300 rounded-md p-2 text-left bg-white
                   focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none"
                      :class="{ 'border-red-500': v$.tourType.$error }">
                    {{ form.tourType ? t(eventTypeOptions.find(o => o.value === form.tourType)?.label) : t('reservation.selectEventType') }}
                  </ListboxButton>
                  <ListboxOptions class="absolute mt-1 w-full border rounded-md bg-white z-10 max-h-60 overflow-auto">
                    <ListboxOption
                        v-for="option in eventTypeOptions"
                        :key="option.value"
                        :value="option.value"
                        class="px-4 py-2 hover:bg-primary-100 cursor-pointer"
                    >
                      {{ t(option.label) }}
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
              <p v-if="v$.tourType.$error"
                 class="absolute text-red-600 text-xs"
                 style="top: 100%; left: 0;">
                {{ t('reservation.error.required') }}
              </p>
            </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Details -->
      <div class="mt-10">
        <label for="details" class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('reservation.details') }}</label>
        <textarea
            v-model="form.details"
            id="details"
            rows="4"
            class="w-full border rounded-md p-2 bg-white border-gray-300
               focus:border-primary-900 focus:ring-3 focus:ring-primary-900 focus:outline-none
               hover:border-primary-500 hover:ring-2 transition duration-200"
            :class="{ 'border-red-500': v$.details.$error }"
        ></textarea>
        <p class="text-sm text-gray-500">{{ detailsRemaining }} {{ t('reservation.remaining') }}</p>
        <p v-if="v$.details.$error" class="text-red-600 text-sm">
          Maximum 1000 caractères autorisés.
        </p>
      </div>

      <!-- Submit Button -->
      <div class="mt-10 text-center">
        <button type="submit"
                :disabled="isSubmitting"
                class="transition transform
        rounded-md border-double text-primary-50 px-6 py-3 bg-primary-500 border-primary-900
        hover:bg-primary-900 hover:border-primary-500 hover:scale-110 hover:cursor-pointer
        text-lg md:text-xl lg:text-2xl xl:text-3xl
        border-6 lg:border-7 xl:border-8">
          {{ t('reservation.submit') }}
        </button>
      </div>
    </form>
    <div class="mt-15">
      <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-primary-500 mb-4">
        {{ t('reservation.groupBookingInfo.roomPreviewTitle') }}
      </h2>

      <div class="flex justify-center">
        <img
            src="../../assets/image/backroom.jpg"
            alt="Preview of the backroom available for group reservations"
            class="shadow-lg max-w-full md:max-w-4xl"
        />
      </div>

      <p class="text-center text-sm lg:text-md xl:text-lg text-gray-700 mt-2 font-work font-semibold">
        {{ t('reservation.groupBookingInfo.roomPreviewCaption') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, computed, watch, onMounted, onUnmounted} from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minValue, maxLength } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { useI18n } from 'vue-i18n';
import Disclaimer from "./Disclaimer.vue";
const isModalOpen = ref(false);

const { t } = useI18n();
const isChecked = ref(false);

const toast = useToast()

// Reactive form object
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  groupName: '',
  groupSize: 7,
  date: null,
  tourType: null,
  details: ''
})

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  phone: { required },
  groupName: { },
  groupSize: { required, minValue: minValue(4) },
  date: { required },
  tourType: { required },
  details: { maxLength: maxLength(1000) }
}

const title = computed(() => t('reservation.form'));
const titleWords = computed(() => title.value.split(' '));

const isVisible = ref(false);
const animatedTitleRef = ref(null);

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

let observer;
onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  if (animatedTitleRef.value) observer.observe(animatedTitleRef.value);
});

onUnmounted(() => {
  if (observer && animatedTitleRef.value) {
    observer.unobserve(animatedTitleRef.value);
  }
});

const v$ = useVuelidate(rules, form)
const isSubmitting = ref(false)
const maxDetailsLength = 1000

const detailsRemaining = computed(() => maxDetailsLength - form.details.length)

watch(() => form.details, val => {
  if (val.length > maxDetailsLength) {
    form.details = val.substring(0, maxDetailsLength)
  }
});

const contactFields = [
  { name: 'firstName', label: 'reservation.contactFields.firstName', type: 'text' },
  { name: 'lastName', label: 'reservation.contactFields.lastName', type: 'text' },
  { name: 'email', label: 'reservation.contactFields.email', type: 'email' },
  { name: 'phone', label: 'reservation.contactFields.phone', type: 'tel' },
]

// Event type options (now with label/value)
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

const submitForm = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) {
    toast.error(t('toasts.error_fields'))
    return
  }else if (!isChecked.value) {
    toast.error(t('toasts.error_checkbox'))
    const disclaimerElement = document.getElementById('read-checkbox');
    if (disclaimerElement) {
      disclaimerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return
  }

  // Check if the date is in the future
  isSubmitting.value = true
  console.log(form)
  try {
    await axios.post('http://localhost:3001/api/mail',
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          groupName: form.groupName || null, // Optional field
          groupSize: form.groupSize,
          date: form.date.toString(), // Ensure date is in ISO format
          tourType: form.tourType, // Assuming it's already in the correct format
          details: form.details || null, // Optional field
        });
    // Reset the form
    Object.assign(form, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      groupName: '',
      groupSize: 7,
      date: null,
      tourType: null,
      details: '',
    });
    isChecked.value = false
    v$.value.$reset();
    toast.success( t('toasts.success'))
  } catch (err) {
    toast.error( t('toasts.error_message') )
  }finally {
    isSubmitting.value = false
  }

}

function increment() {
  if (form.groupSize < 200) form.groupSize++
}

function decrement() {
  if (form.groupSize > 7) form.groupSize--
}

const totalChars = computed(() =>
    titleWords.value.reduce((sum, word) => sum + word.length, 0)
)

const totalDuration = 1.2 // seconds

// Global index function for characters
const globalCharIndex = (wordIndex, charIndex) => {
  return titleWords.value
      .slice(0, wordIndex)
      .reduce((sum, word) => sum + word.length, 0) + charIndex
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Hide number input arrows in Webkit browsers (Chrome, Safari) */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide number input arrows in Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* Animations */
@keyframes slide-up {
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  60% {
    transform: translateY(-15%);
    opacity: 1;
  }
  80% {
    transform: translateY(5%);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-up {
  animation: slide-up 1.2s cubic-bezier(0.25, 1.5, 0.5, 1) forwards;
  opacity: 0;
}

</style>
