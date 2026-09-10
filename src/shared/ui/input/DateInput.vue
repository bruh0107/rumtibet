<template>
  <div>
    <div
        :class="[base(), select()]"
        class="relative"
        @click="openPicker"
    >
      <p :class="selectedDate ? 'text-white-100' : 'text-grey-100'">
        {{ formattedDate }}
      </p>
      <app-icon name="calendar" />

      <input
          ref="dateInputRef"
          v-model="selectedDate"
          type="date"
          class="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
      />
    </div>
    <p class="text-grey-100">укажите диапазон</p>
  </div>
</template>

<script setup lang="ts">
import { AppIcon, inputVariants } from "@/shared/ui";
import { computed, ref } from "vue";

const { base, select } = inputVariants()
const dateInputRef = ref<HTMLInputElement | null>(null)

const selectedDate = ref('')

const formattedDate = computed(() => {
  if (!selectedDate.value) return 'Дата похода'

  const [year, month, day] = selectedDate.value.split('-')
  return `${day}.${month}.${year}`
})

const openPicker = () => {
  if (dateInputRef.value) {
    try {
      dateInputRef.value.showPicker()
    } catch(error) {
      dateInputRef.value.click()
    }
  }
}
</script>
