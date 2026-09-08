<template>
  <header class="flex justify-between items-center main-container">
    <div class="flex gap-1.25 flex-col w-fit items-center">
      <AppIcon name="logo" class="w-21 h-7.5 min-[400px]:w-34.25 min-[400px]:h-12" />
      <h1 class="font-second font-semibold text-[10px] min-[400px]:text-base tracking-[0.38em]">румтибет</h1>
    </div>

    <AppIcon class="min-[400px]:hidden" name="burger-menu" />

    <div class="max-[400px]:hidden flex gap-12.25">
      <HeaderNav />
      <button>
        Консультация
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { AppIcon } from "@/shared/ui";
import { HeaderNav } from "@/components";
</script>

<style scoped></style>
