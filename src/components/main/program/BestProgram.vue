<script setup lang="ts">
import { AppButton, AppIcon } from "@/shared/ui";

const programs = [
  {
    title: 'Опытный гид',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    icon: 'people'
  },
  {
    title: 'Безопасный поход',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    icon: 'guard'
  },
  {
    title: 'Лояльные цены',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    icon: 'price'
  },
]
</script>

<template>
  <div class="bg-grey-200">
    <section class="main-container py-12.5 lg:py-[80px_100px] flex flex-col lg:flex-row items-center gap-22.5">
      <div class="lg:w-1/2">
        <div>
          <p class="text-yellow-200 mb-2 lg:text-2xl">наше предложение</p>
          <h2 class="text-2xl font-extrabold mb-8 lg:text-[32px]">Лучшие программы для тебя</h2>
          <p class="lg:text-lg mb-8">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард
            МакКлинток, профессор латыни из колледжа.</p>
        </div>

        <div class="flex flex-col gap-8 items-center lg:items-start">
          <article v-for="(program, index) in programs" :key="index" class="grid grid-cols-[50px_1fr] gap-4">
            <app-icon :name="program.icon" />
            <div>
              <h3 class="text-lg font-bold">{{ program.title }}</h3>
              <p class="text-sm">{{ program.description }}</p>
            </div>
          </article>
          <app-button>Стоимость программ</app-button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2.5 max-lg:hidden">
          <img src="@/assets/img/program-image_1.png" class="rounded-[0_50px]" alt="">
          <img src="@/assets/img/program-image_2.png" class="rounded-[50px_0]" alt="">
          <img src="@/assets/img/program-image_3.png" class="rounded-[50px_0]" alt="">
          <img src="@/assets/img/program-image_4.png" class="rounded-[0_50px]" alt="">
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>