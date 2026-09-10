<template>
  <button :class="buttonVariants({
    variant: props.variant,
    size: props.size
  })"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { buttonVariants, type ButtonVariants } from '@/shared/ui'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark',
  size: 'normal'
})
</script>
