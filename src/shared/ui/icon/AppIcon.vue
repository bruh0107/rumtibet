<template>
  <component :is="SvgComponent"/>
</template>

<script setup lang="ts">
import { defineAsyncComponent, type Component, computed } from 'vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const SvgComponent = computed(() =>
    defineAsyncComponent<Component>(() =>
        import(`@/assets/icons/${props.name}.svg`)
    )
)
</script>
