<template>
  <div :class="[base(), select()]" class="relative">
    <p>Дата похода</p>
    <app-icon name="calendar" />

    <input type="date" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { AppIcon, inputVariants } from "@/shared/ui";

const { base, select } = inputVariants()
</script>
