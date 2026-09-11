<template>
  <main class="flex flex-col gap-12.5 lg:gap-25">
    <main-banner />
    <about-hike />
    <BestProgram />
    <PopularDestinations />
  </main>
</template>

<script setup lang="ts">
import { AboutHike, BestProgram, MainBanner, PopularDestinations } from '@/components'
</script>
