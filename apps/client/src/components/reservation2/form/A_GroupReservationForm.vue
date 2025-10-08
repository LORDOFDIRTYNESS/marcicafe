<template>
  <div class="p-4 lg:p-0 mb-10  max-w-4xl mx-auto">
    <form @submit.prevent="submitReservation" class="space-y-10">
      <ContactFields :form="form" :v$="v$" />
      <GroupDetailsFields :form="form" :v$="v$" />
      <MenuAndPricesFields :form="form" :v$="v$" />
      <RoomRadioFields :form="form" :v$="v$" />
      <AllergiesModal v-model="form.allergies" />
      <DetailsTextArea :form="form"/>

      <div class="mt-8 flex justify-center">
        <button type="submit" class="transition transform
        rounded-md border-double text-primary-50 px-6 py-3 bg-primary-900 border-primary-500
        hover:bg-primary-500 hover:border-primary-900 hover:cursor-pointer
        text-md md:text-lg lg:text-xl xl:text-2xl
        border-6 lg:border-7 xl:border-8">
          {{ t('reservation.submit') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useVuelidate } from '@vuelidate/core'
import { useToast } from 'vue-toastification'
import { required, minLength, email, helpers, minValue } from '@vuelidate/validators'
import axios from 'axios'

import ContactFields from './ContactFields.vue'
import GroupDetailsFields from "./GroupDetailsFields.vue";
import MenuAndPricesFields from "./MenuAndPricesFields.vue";
import AllergiesModal from "./AllergiesModal.vue";
import DetailsTextArea from "./DetailsTextArea.vue";
import RoomRadioFields from "./RoomRadioFields.vue";

const toast = useToast()
const { t } = useI18n()

const props = defineProps<{
  isChecked: boolean
}>()

const emit = defineEmits(['resetAcknowledgement']);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  groupName: '',
  groupSize: 7,
  date: null,
  eventType: '',
  selectedService: '',
  selectedRoom: '',
  selectedMenu: '',
  allergies: [],
  details: '',
})

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  phone: { required },
  groupSize: { required, minValue: minValue(7) },
  date: { required },
  eventType: { required },
  selectedService: { required },
  selectedRoom: { required },
  selectedMenu: { required },
}

const v$ = useVuelidate(rules, form)

async function submitReservation() {
  v$.value.$touch()

  if (v$.value.$invalid) {
    toast.error(t('toasts.error_fields'))
    return
  } else if (!props.isChecked) {
    toast.error(t('toasts.error_checkbox'))
    document.getElementById('acknowledgement').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center' });
    return
  }

  try {
    const payload = { ...form }
    await axios.post('/api/mail', payload)
    toast.success(t('toasts.success'))
    Object.assign(form, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      groupName: '',
      groupSize: 7,
      date: null,
      eventType: '',
      selectedService: '',
      selectedRoom: '',
      selectedMenu: '',
      allergies: [],
      details: '',
    })
    console.log(payload.selectedRoom);
    v$.value.$reset()
    emit('resetAcknowledgement')
  } catch (error) {
    toast.error(t('toasts.error_message'))
  }
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
