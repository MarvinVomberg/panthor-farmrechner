<template>
  <HeaderMenu />

  <div class="flex min-h-screen flex-col pt-0">
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
    class: "bg-gradient-animated text-gray-200"
  },
  bodyAttrs: {
    class: "min-h-screen"
  },
})
</script>