<script setup lang="ts">
import {craftingCategories} from "~/crafting/crafting";
import {type CraftCategory, CraftItem} from "~/types/crafting";
import {GenericProduction} from "~/farmroutes/production";
import {TruckIcon, HomeIcon} from "@heroicons/vue/16/solid";
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const mainCategories = craftingCategories.filter((category) => category.parentCategory === null);

const selectedCategory = ref<CraftCategory | null>(null);
const selectedItem = ref<CraftItem | null>(null);
const selectedFarmroute = ref<GenericProduction | null>(null);

const selectCategory = (categoryName: string, clearHistory: boolean = false) => {
  backwardsHistory.value.push(selectedCategory.value);
  selectedCategory.value = craftingCategories.find(cat => cat.name === categoryName) || null;
  selectedItem.value = null;
  selectedFarmroute.value = null;

  if(clearHistory) {
    forwardHistory.value = [];
  }
}

const selectItem = (itemName: string) => {
  if (selectedCategory.value) {
    selectedItem.value = selectedCategory.value?.items?.find(item => item.name === itemName) || null;
    selectedFarmroute.value = null;
  }
}

const selectFarmroute = (farmroute: GenericProduction) => {
    selectedFarmroute.value = farmroute;
}

const childCategories = computed(() => {
  return craftingCategories.filter((category) => category.parentCategory?.name === selectedCategory.value?.name);
});

const backwardsHistory = ref<CraftCategory[]|null[]>([]);
const forwardHistory = ref<CraftCategory[]|null[]>([]);
const selectPreviousCategory = () => {
  forwardHistory.value.push(selectedCategory.value)

  if (backwardsHistory.value.length > 0) {
    selectedCategory.value = backwardsHistory.value.pop();
    selectedItem.value = null;
    selectedFarmroute.value = null;
  }
}

const selectNextCategory = () => {
  selectCategory(forwardHistory.value.pop().name, false)
}
</script>

<template>
  <div class="mx-auto w-full max-w-7xl grow lg:flex justify-between xl:px-2 mt-4">
    <nav class="hidden lg:flex mx-4 lg:mx-24" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4 truncate">
        <li>
          <div>
            <p class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Home</span>
              <HomeIcon class="h-5 w-5" aria-hidden="true"/>
            </p>
          </div>
        </li>
        <template v-if="backwardsHistory">
        <li v-for="(category, index) in Array.from(backwardsHistory).reverse()" :key="index">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 19.5l-6-6m0 0l6-6m-6 6h18"/>
            </svg>
            <p class="ml-4 text-sm font-medium text-gray-200 hover:text-gray-300 focus:outline-hidden">
              {{ category?.localized ?? selectedCategory?.localized }}
            </p>
          </div>
        </li>
        </template>
        <li v-if="selectedItem">
          <div class="flex items center">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 19.5l-6-6m0 0l6-6m-6 6h18"/>
            </svg>
            <span class="ml-4 text-sm font-medium text-gray-200">{{ selectedItem.localized }}</span>
          </div>
        </li>
        <li v-if="selectedFarmroute">
          <div class="flex items center">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 19.5l-6-6m0 0l6-6m-6 6h18"/>
            </svg>
            <span class="ml-4 text-sm font-medium text-gray-200">{{ selectedFarmroute.productLocalizedName }}</span>
          </div>
        </li>
      </ol>
    </nav>

    <template v-if="backwardsHistory.length || forwardHistory.length">
    <div class="flex space-x-2 ml-4 mt-4 lg:mt-0 lg:mr-24">
      <button @click="selectPreviousCategory"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-200 bg-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-panthor-red focus:ring-offset-2 disabled:opacity-50">
        Zurück
      </button>
      <button @click="selectNextCategory"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-200 bg-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-panthor-red focus:ring-offset-2 disabled:opacity-50"
              :disabled="forwardHistory.length === 0">
        Vorwärts
      </button>
    </div>
    </template>
  </div>


  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
    <div class="grid grid-cols-1 lg:grid-cols-4 mt-4 pb-12">
      <div class="col-span-1 lg:col-span-4">
        <template v-if="!selectCategory || childCategories.length > 0">
          <div class="overflow-hidden sm:grid sm:grid-cols-2 gap-12 mx-4 space-y-4 lg:mx-24 lg:space-y-0" >
            <div v-for="(category, categoryIdx) in (selectedCategory === null ? mainCategories : childCategories)" :key="category.name"
                 class="rounded-lg group relative cursor-pointer hover:bg-white/20 bg-white/10 p-6">
              <div>
                <span :class="[category.iconBackground, category.iconForeground, 'inline-flex rounded-lg p-3']">
                  <component :is="category.icon" class="size-6" aria-hidden="true"/>
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-base font-semibold text-gray-100">
                  <button @click="selectCategory(category.name, true)" class="focus:outline-hidden">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    {{ category.localized }}
                  </button>
                </h3>
                <p class="mt-2 text-sm text-gray-400">
                  {{ category.description }}
                </p>
              </div>
            </div>
          </div>
        </template>

        <template v-if="selectedCategory?.items?.length">
          <div class="mt-4 mx-4 lg:mx-24">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
              <div v-for="item in selectedCategory.items" :key="item.name"
                   class="bg-white/10 hover:bg-white/20 rounded-lg p-4 cursor-pointer"
                   :class="{'ring-2 ring-panthor-red': selectedItem?.name === item.name}"
                   @click="selectItem(item.name)"
              >
                <h3 class="text-lg font-semibold text-gray-100">{{ item.localized }}</h3>
                <p class="text-sm text-gray-400">Level {{ item.requiredLevel }} benötigt</p>
              </div>
            </div>
          </div>
        </template>

        <template v-if="selectedItem">
          <div class="mt-4 mx-4 lg:mx-24">
              <h3 class="text-lg font-semibold text-gray-100">Folgende Materialien werden benötigt</h3>

            <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" >
              <li v-for="(material, index) in selectedItem.materials" :key="index" class="col-span-1 flex rounded-md shadow-xs">
                <div :class="['bg-panthor-red flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">&nbsp;</div>
                <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200/10 bg-white/10">
                  <div class="flex-1 truncate px-4 py-2 text-sm">
                    <p class="font-medium text-gray-100 hover:text-gray-400">
                      <template v-if="material?.requiredItem instanceof GenericProduction">
                        {{ material.requiredItem.productLocalizedName }}
                      </template>
                      <template v-else>
                        {{ material.requiredItem.localized }}
                      </template>
                    </p>
                    <p class="text-gray-500">{{ material.amount }} Einheit(-en)</p>
                  </div>
                  <template v-if="material?.requiredItem instanceof GenericProduction">
                  <div class="shrink-0 pr-2 ml-4">
                    <button @click="selectFarmroute(material?.requiredItem)" type="button" class="inline-flex size-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer text-gray-300 hover:text-gray-200 focus:ring-2 focus:ring-panthor-red focus:ring-offset-2 focus:outline-hidden">
                      <span class="sr-only">Show Farmroute</span>
                      <TruckIcon class="size-5" aria-hidden="true" />
                    </button>
                  </div>
                  </template>
                </div>
              </li>
            </ul>
          </div>
        </template>

        <template v-if="selectedFarmroute">
          <div class="col-span-1 lg:col-span-4 mt-8 mx-4 lg:mx-24" >
            <Farmroute :product="selectedFarmroute"/>
          </div>
        </template>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>