<template>
  <div class="main-container">
    <div class="bg-white-20 backdrop-blur-[5px] py-10 px-10.5 rounded-[10px]">
      <form action="" class="flex justify-between items-start gap-6">
        <div class="w-full">
          <form-select type="locations" />
        </div>
        <div class="w-full">
          <date-input />
        </div>
        <div class="w-full">
          <form-select type="members" />
        </div>
        <app-button size="big" variant="light">Найти программу</app-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormSelect from '@/shared/ui/input/FormSelect.vue'
import { AppButton, DateInput } from '@/shared/ui'
</script>

<style scoped></style>
