<script setup lang="ts">
const tourLocations = [
  {value: 'ru', title: 'Россия'},
  {value: 'by', title: 'Беларусь'},
  {value: 'kz', title: 'Казахстан'},
]
</script>

<template>
  <div>
    <select hidden>
      <option
          v-for="(location, index) in tourLocations"
          :key="index"
          :value="location.value"
      >
        {{ location.title }}
      </option>
    </select>
    <div>skdf</div>
  </div>
</template>

<style scoped>

</style>