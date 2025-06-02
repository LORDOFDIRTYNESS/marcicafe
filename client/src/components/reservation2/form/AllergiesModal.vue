<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    required: true,
  }
})
const emit = defineEmits(['update:modelValue'])

const showModal = ref(false)

watch(showModal, (isVisible) => {
  if(isVisible) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
});

const newAllergy = ref('')

// Local copy for internal editing
const localAllergies = ref([...props.modelValue])

watch(
    () => props.modelValue,
    (val) => {
      localAllergies.value = [...val]
    }
)


function addAllergy() {
  const trimmed = newAllergy.value.trim()
  if (trimmed) {
    const updated = [...localAllergies.value, trimmed]
    emit('update:modelValue', updated)
    newAllergy.value = ''
    showModal.value = false
  }
}

function removeAllergy(index: number) {
  const updated = [...localAllergies.value]
  updated.splice(index, 1)
  emit('update:modelValue', updated)
}
</script>

<template>
  <div>
    <label class="block text-sm lg:text-md xl:text-lg font-medium text-gray-700">
      {{ t('groupreservations.formFields.allergiesLabel') }}
    </label>

    <!-- Allergy Pills -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
          v-for="(allergy, index) in modelValue"
          :key="index"
          class="bg-[#afbee7] text-primary-500 px-3 py-1 rounded-full text-sm"
      >
        {{ allergy }}
        <button
            @click="removeAllergy(index)"
            type="button"
            class="ml-2 text-primary-500 hover:text-red-600 focus:outline-none hover:cursor-pointer"
        >
          <font-awesome-icon icon="times" />
        </button>
      </span>
    </div>

    <!-- Add Allergy Button -->
    <button
        type="button"
        class="transition transform
        rounded-md border-double text-primary-50 px-6 py-3 bg-primary-900 border-primary-500
        hover:bg-primary-500 hover:border-primary-900 hover:cursor-pointer
        border-6"
            @click="showModal = true">
            {{ t('groupreservations.formFields.addAllergy') }}
    </button>


    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div class="bg-white rounded-xl p-6 rounded-lg shadow-lg w-full max-w-md mx-4 border-3 border-gray-700 font-work font-semibold">
        <h2 class="text-lg font-semibold mb-4 text-gray-700">
          {{ t('groupreservations.formFields.modalTitle') }}
        </h2>
        <input
            v-model="newAllergy"
            type="text"
            class="w-full mb-4 border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary-500"
            :placeholder="t('groupreservations.formFields.modalPlaceholder')"
        />
        <div class="flex justify-end gap-2">
          <button
              @click="showModal = false"
              class="px-4 py-2 text-gray-700 hover:underline hover:cursor-pointer"
          >
            {{ t('groupreservations.formFields.cancel') }}
          </button>
          <button
              @click="addAllergy"
              class="bg-primary-500 text-primary-50 px-4 py-2 rounded hover:bg-primary-900 hover:cursor-pointer"
          >
            {{ t('groupreservations.formFields.add') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
