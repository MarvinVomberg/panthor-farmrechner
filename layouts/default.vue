<template>
  <div class="flex min-h-full flex-col">
    <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
      <div class="flex-1 xl:flex">
        <div class="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6">
          <slot name="left"></slot>
        </div>

        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          <slot></slot>
        </div>
      </div>

      <div class="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6">
        <slot name="right"></slot>
      </div>
    </div>
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