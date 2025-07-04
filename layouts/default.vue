<template>
  <HeaderMenu />

  <div class="flex min-h-full flex-col">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import HeaderMenu from "~/components/HeaderMenu.vue";

useHead({
  title: "Farmrechner | Panthor.de",
  htmlAttrs: {
    class: "h-full bg-dark text-gray-200"
  },
  bodyAttrs: {
    class: "h-full"
  },
})
</script>