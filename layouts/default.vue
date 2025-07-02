<template>
  <HeaderMenu />

  <div class="flex min-h-full flex-col">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import HeaderMenu from "~/components/HeaderMenu.vue";
</script>