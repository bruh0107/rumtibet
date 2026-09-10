<template>
  <section class="background h-150 sm:h-160 md:h-180 lg:h-200 xl:h-246.25">
    <div class="py-[20px_50px] lg:py-[16px_82px] h-full flex flex-col justify-between">
      <app-header />
      <MainBannerForm />
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
