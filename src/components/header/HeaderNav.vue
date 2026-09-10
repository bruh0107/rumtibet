<template>
  <nav class="flex gap-3 lg:gap-6 font-semibold text-sm text-grey-100 lg:text-lg">
    <a v-for="(nav, index) in navigation" :key="index" :href="nav.href">{{ nav.title }}</a>
  </nav>
</template>

<script setup lang="ts">
const navigation = [
  {
    title: 'Главная',
    href: '#',
  },
  {
    title: 'Про гида',
    href: '#',
  },
  {
    title: 'Программа тура',
    href: '#',
  },
  {
    title: 'Стоимость',
    href: '#',
  },
  {
    title: 'Блог',
    href: '#',
  },
  {
    title: 'Контакты',
    href: '#',
  },
]
</script>
