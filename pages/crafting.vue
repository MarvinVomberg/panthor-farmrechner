<script setup lang="ts">
import {craftingCategories} from "~/crafting/crafting";
import {type CraftCategory, CraftItem, CraftMaterial} from "~/types/crafting";
import {GenericProduction} from "~/farmroutes/production";
import {TruckIcon} from "@heroicons/vue/16/solid";
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const mainCategories = craftingCategories.filter((category) => category.parentCategory === null);

const selectedCategory = ref<CraftCategory | null>(null);
const selectedItem = ref<CraftItem | null>(null);
const selectedFarmroute = ref<GenericProduction | null>(null);

const selectCategory = (categoryName: string) => {
  selectedCategory.value = craftingCategories.find(cat => cat.name === categoryName) || null;
}

const selectItem = (itemName: string) => {
  if (selectedCategory.value) {
    selectedItem.value = selectedCategory.value?.items?.find(item => item.name === itemName) || null;
  }
}

const selectFarmroute = (farmroute: GenericProduction) => {
    selectedFarmroute.value = farmroute;
}

const childCategories = computed(() => {
  return craftingCategories.filter((category) => category.parentCategory?.name === selectedCategory.value?.name);
});

</script>

<template>

  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
    <div class="grid grid-cols-1 lg:grid-cols-4 mt-4 pb-12">

      <div class="col-span-1 lg:col-span-4">
        <template v-if="!selectCategory || childCategories.length > 0">
          <div class="overflow-hidden sm:grid sm:grid-cols-2 gap-12 mx-4 space-y-4 lg:mx-24 lg:space-y-0" v-auto-animate>
            <div v-for="(category, categoryIdx) in (selectedCategory === null ? mainCategories : childCategories)" :key="category.name"
                 class="rounded-lg group relative cursor-pointer hover:bg-white/20 bg-white/10 p-6">
              <div>
                <span :class="[category.iconBackground, category.iconForeground, 'inline-flex rounded-lg p-3']">
                  <component :is="category.icon" class="size-6" aria-hidden="true"/>
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-base font-semibold text-gray-100">
                  <button @click="selectCategory(category.name)" class="focus:outline-hidden">
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
          <div class="mt-8 mx-4 lg:mx-24">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-auto-animate>
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
          <div class="mt-8 mx-4 lg:mx-24">
              <h3 class="text-lg font-semibold text-gray-100">Folgende Materialien werden benötigt</h3>

            <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" v-auto-animate>
              <li v-for="(material, index) in selectedItem.materials" :key="index" class="col-span-1 flex rounded-md shadow-xs">
                <div :class="['bg-panthor-red flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">&nbsp;</div>
                <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200/10 bg-white/10">
                  <div class="flex-1 truncate px-4 py-2 text-sm">
                    <p class="font-medium text-gray-100 hover:text-gray-400">
                      <template v-if="material?.requiredItem instanceof GenericProduction">
                        {{ material.requiredItem.productLocalizedName }}
                      </template>
                      <template v-else>
                        {{ material.localized }}
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
          <div class="col-span-1 lg:col-span-4 mt-8 mx-4 lg:mx-24" v-auto-animate>
            <Farmroute :product="selectedFarmroute"/>
          </div>
        </template>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>