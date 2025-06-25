<template>
  <div class="flex min-h-full flex-col">
    <slot></slot>
  </div>
</template>

<script setup>
definePageMeta({
  htmlAttrs: {
    class: 'h-full bg-white'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
</script>