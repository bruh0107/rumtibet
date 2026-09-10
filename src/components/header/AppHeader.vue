<template>
  <header class="shrink-0 flex justify-between items-center main-container">
    <div class="flex gap-1.25 flex-col w-fit items-center">
      <app-icon name="logo" class="w-21 h-7.5 lg:w-34.25 lg:h-12" />
      <h1
        class="font-second font-semibold text-[10px] text-white-100 sm:text-base tracking-[0.38em]"
      >
        румтибет
      </h1>
    </div>

    <app-icon class="md:hidden" name="burger-menu" />

    <div class="max-md:hidden flex items-center lg:gap-12.25 gap-5">
      <header-nav />
      <app-button :size="'normal'" variant="dark">Консультация</app-button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { AppButton, AppIcon } from '@/shared/ui'
import { HeaderNav } from '@/components'
</script>
