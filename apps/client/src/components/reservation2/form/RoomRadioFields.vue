<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  form: Object,
  v$: Object,
});

const { t } = useI18n();

// stable, explicit keys we send to the backend
const roomCards = computed(() => [
  { key: 'rooftop_terrace', value: 'rooftop_terrace', label: t('groupreservations.formFields.spaceOptions.rooftop_terrace') },
  { key: 'private_room', value: 'private_room', label: t('groupreservations.formFields.spaceOptions.private_room') },
  { key: 'no_preference', value: 'no_preference', label: t('groupreservations.formFields.spaceOptions.no_preference') }
]);

const selectedRoom = computed({
  get() {
    return props.form.selectedRoom;
  },
  set(value) {
    props.form.selectedRoom = value;
  }
});

function selectRoom(value: string) {
  selectedRoom.value = value;
}
</script>

<template>
  <div class="grid grid-cols-3 gap-4 mt-4">
    <div class="col-span-3">
      <label class="my-5 block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
        {{ t('groupreservations.formFields.room') }} *
      </label>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
            v-for="option in roomCards"
            :key="option.key"
            @click="selectRoom(option.value)"
            :class="[
            'cursor-pointer transition-all border-3 rounded-2xl shadow-sm p-6 text-center',
            selectedRoom === option.value
              ? 'border-primary-900 bg-primary-500 text-primary-50 shadow-box'
              : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
          ]"
        >
          <p class="text-base font-medium">{{ option.label }}</p>
        </div>
      </div>

      <p v-if="v$.selectedRoom?.$error" class="text-red-600 text-xs mt-4">
        {{ t('reservation.error.required') }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
