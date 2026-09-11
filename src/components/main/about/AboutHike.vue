<template>
  <section class="main-container flex flex-col lg:flex-row-reverse items-center gap-12 lg:relative lg:py-[64px]">
    <article class="w-full">
      <p class="text-yellow-200 mb-2 lg:text-2xl">о нашем походе</p>
      <div class="flex flex-col lg:items-start gap-6">
        <h2 class="text-2xl lg:text-[32px] font-extrabold">Исследуйте все горные массивы мира вместе с нами</h2>
        <p class="lg:text-lg">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух
          тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат
          Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его
          поисками в классической латинской литературе.
        </p>
        <div class="flex justify-center">
          <app-button>Программа тура</app-button>
        </div>
      </div>
    </article>
    <div class="w-full flex justify-center max-lg:gap-15">
      <div
        class="background_1 card flex h-[26rem] max-w-87.5 w-full lg:h-[400px] lg:w-[350px] lg:absolute lg:top-30 lg:left-40 z-1"
      >
        <app-icon name="start-video" />
      </div>
      <div
        class="background_2 card flex h-[26rem] max-w-87.5 w-full max-md:hidden lg:h-[400px] lg:w-[350px] lg:absolute lg:bottom-29 lg:left-5"
      >
        <app-icon name="start-video" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AppButton, AppIcon } from '@/shared/ui'
</script>

<style scoped>
.background_1 {
  background: url('@/assets/img/about-hike-photo_1.png') no-repeat;
  background-size: cover;
}

.background_2 {
  background: url('@/assets/img/about-hike-photo_2.png') no-repeat;
  background-size: cover;
}

.card {
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
}
</style>
