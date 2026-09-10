<script setup lang="ts">
import { AppIcon } from "@/shared/ui";
import { computed, ref } from "vue";
import { inputVariants } from "@/shared/ui";

type SelectType = 'locations' | 'members'

interface Props {
  type: SelectType
}

const props = defineProps<Props>()

const isOpen = ref(false)
const selectedValue = ref<string | number | null>(null)

const tourLocations = [
  {value: 'ru', title: 'Россия'},
  {value: 'by', title: 'Беларусь'},
  {value: 'kz', title: 'Казахстан'},
]

const tourMembersQuantity = [
  {value: '4', title: '4 человека'},
  {value: '5', title: '5 человек'},
  {value: '6', title: '6 человек'},
  {value: '7', title: '7 человек'},
  {value: '8', title: '8 человек'},
  {value: '9', title: '9 человек'},
  {value: '10', title: '10 человек'},
]

const currentItems = computed(() => {
  return props.type === 'locations' ? tourLocations : tourMembersQuantity
})

const placeholderText = computed(() => {
  if (selectedValue.value !== null) {
    const found = currentItems.value.find(item => item.value === selectedValue.value)
    return found ? found.title : ''
  }
  return props.type === 'locations' ? 'Локация для тура' : 'Количество участников'
})

const selectItem = (item: { value: string | number, title: string }) => {
  selectedValue.value = item.value
  isOpen.value = false
}

const { dropList, select, base } = inputVariants()
</script>

<template>
  <div class="relative w-full">
    <select :name="props.type === 'locations' ? 'location' : 'members'" :value="selectedValue" hidden>
      <option
          v-for="(item, index) in currentItems"
          :key="index"
          :value="item.value"
      >
        {{ item.title }}
      </option>
    </select>

    <div class="flex flex-col gap-2">
      <div>
        <div :class="[base(), select()]"
             @click="isOpen = !isOpen">
          <p>{{ placeholderText }}</p>
          <app-icon
              class="transition-transform ease-in-out duration-200"
              :class="isOpen ? 'scale-y-[-1]' : ''"
              name="arrow"
          />
        </div>
        <p
            :class="isOpen ? 'hidden' : 'block'"
            class="text-grey-100"
        >
          {{ props.type === 'locations' ? 'выберите из списка' : 'минимум 4 человека' }}</p>
      </div>
      <div
          :class="[isOpen ? 'block' : 'hidden', base(), dropList()]">
        <div
            class="cursor-pointer flex flex-col gap-2"
            v-for="(item, index) in currentItems"
            :key="index"
            @click="selectItem(item)"
        >
          <p class="text-white-100 hover:text-grey-100 transition-colors">
            {{ item.title }}
          </p>
          <hr v-if="index < currentItems.length - 1" class="border-white-20">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>