<template>
  <div class="main-container">
    <p class="text-yellow-200 mb-2">о нашем походе</p>
    <div class="flex flex-col gap-6 mb-10">
      <h2 class="text-2xl font-extrabold">Исследуйте все горные массивы мира вместе с нами</h2>
      <p>
        Его корни уходят в один фрагмент классической латыни 45 года н.э.,
        то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
        колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum,
        "consectetur"и занялся его поисками в классической латинской литературе.
      </p>
      <div class="flex justify-center">
        <app-button>Программа тура</app-button>
      </div>
    </div>
    <div class="background h-104 max-w-89.5 flex items-center justify-center rounded-3xl">
      <app-icon name="start-video" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { AppButton, AppIcon } from "@/shared/ui";
</script>

<style scoped>
.background {
  background: url("@/assets/img/about-hike-photo.png") no-repeat;
  background-size: cover;
}
</style>