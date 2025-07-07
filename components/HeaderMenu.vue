<template>
  <header class="bg-white/10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex flex-1">
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" :target="item.target" class="text-sm/6 font-semibold text-gray-100">{{ item.name }}</NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <NuxtLink to="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Panthor</span>
        <NuxtImg class="h-8 w-auto" src="/images/panthor_logo.png" alt="Panthor" />
      </NuxtLink>
      <div class="flex flex-1 justify-end">
        <a to="https://panthor.de" target="_blank" class="text-sm/6 font-semibold text-gray-100">Offizielle Website <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-dark px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex flex-1">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-300" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="-m-1.5 p-1.5">
            <NuxtImg class="h-8 w-auto" src="/images/panthor_logo.png" alt="" />
          </div>
          <div class="flex flex-1 justify-end">
            <a href="https://panthor.de" target="_blank" class="text-sm/6 font-semibold text-gray-100">Offizielle Website <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="mt-6 space-y-2">
          <NuxtLink @click="mobileMenuOpen = false" v-for="item in navigation" :key="item.name" :to="item.to" :target="item.target" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-100 hover:bg-white/10">{{ item.name }}</NuxtLink>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'GitHub', to: 'https://github.com/MarvinVomberg/panthor-farmrechner', target: '_blank' },
  { name: 'Rechner', to: '/', target: '_self' },
  { name: 'Live-Markt', to: '/market', target: '_self' },
  { name: 'Crafting', to: '/crafting', target: '_self' },
]

const router = useRouter()

const mobileMenuOpen = ref(false)
</script>