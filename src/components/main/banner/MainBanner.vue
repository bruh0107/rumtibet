<template>
  <section class="background h-150 sm:h-160 md:h-180 lg:h-200 xl:h-246.25">
    <div class="py-[20px_50px] lg:py-[16px_82px] h-full flex flex-col justify-between">
      <app-header />
      <div class="main-container">
        <h1 class="font-second font-bold text-[28px] lg:text-[50px] md:text-[36px] text-grey-100 mb-10">Насладись прогулкой в горах с командой единомышленников</h1>
        <main-banner-form />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AppHeader, MainBannerForm } from '@/components'
</script>

<style scoped>
.background {
  background: url('@/assets/img/main-banner-bg.png') top no-repeat;
  background-size: cover;
}
</style>
