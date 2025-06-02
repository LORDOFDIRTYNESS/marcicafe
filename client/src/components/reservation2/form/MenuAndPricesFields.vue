<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {computed, ref} from "vue";

const props = defineProps({
  form: Object,
  v$: Object,
})

const { t } = useI18n();

const cards = computed(() => [
  {
    value: 'Menu #1 -> 50$ per person',
    label: t('groupreservations.menuAndPrices.options[0].name'),
    price: t('groupreservations.menuAndPrices.options[0].prix'),
    description: t('groupreservations.menuAndPrices.options[0].items')
  },
  {
    value: 'Menu #2 -> 60$ per person',
    label: t('groupreservations.menuAndPrices.options[1].name'),
    price: t('groupreservations.menuAndPrices.options[1].prix'),
    description: t('groupreservations.menuAndPrices.options[1].items')
  },
  {
    value: 'Menu #3 -> 70$ per person',
    label: t('groupreservations.menuAndPrices.options[2].name'),
    price: t('groupreservations.menuAndPrices.options[2].prix'),
    description: t('groupreservations.menuAndPrices.options[2].items')
  },
])


const selectedMenu = computed({
  get() {
    return props.form.selectedMenu
  },
  set(value) {
    props.form.selectedMenu = value
  }
})

function selectMenu(value) {
  selectedMenu.value = value
}
</script>

<template>
  <div>
    <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary-500">{{ t('reservation.groupDetails') }}</h3>
    <label class="my-5 block text-sm lg:text-md xl:text-lg font-medium text-gray-700">{{ t('groupreservations.menuAndPrices.title') }} *</label>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
      <div
          v-for="card in cards"
          :key="card.value"
          @click="selectMenu(card.value)"
          :class="[
        'cursor-pointer transition-all border-3 rounded-2xl shadow-sm p-6 text-center',
        selectedMenu === card.value ?
        'border-primary-900 bg-primary-500 text-primary-50 shadow-box' : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
      ]"
      >
        <h3 class="text-lg font-semibold">{{ card.label }}</h3>
        <p class="text-3xl font-bold mt-2">
          {{ card.price }}
        </p>
        <span class="text-xs">{{ t('groupreservations.menuAndPrices.person')}}</span>
        <p class="text-sm mt-2 font-work font-semibold">
          {{ card.description }}
        </p>
      </div>
      <p v-if="v$.selectedMenu.$error" class="text-red-600 text-xs mt-4">
        {{ t('reservation.error.required') }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>