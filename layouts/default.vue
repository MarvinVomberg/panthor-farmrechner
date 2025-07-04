<template>
  <HeaderMenu />

  <div class="flex min-h-full flex-col">
    <slot></slot>
  </div>

  <SpeedInsights />
</template>
<script setup lang="ts">
import HeaderMenu from "~/components/HeaderMenu.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

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