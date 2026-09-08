<script setup lang="ts">
const navigation = [
  {
    title: 'Главная',
    href: '#'
  },
  {
    title: 'Про гида',
    href: '#'
  },
  {
    title: 'Программа тура',
    href: '#'
  },
  {
    title: 'Стоимость',
    href: '#'
  },
  {
    title: 'Блог',
    href: '#'
  },
  {
    title: 'Контакты',
    href: '#'
  },
]
</script>

<template>
  <nav class="flex gap-6 font-semibold">
    <a v-for="nav in navigation" href="">{{ nav.title }}</a>
  </nav>
</template>

<style scoped>

</style>