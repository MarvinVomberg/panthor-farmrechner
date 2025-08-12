<script setup lang="ts">
import {craftingCategories} from "~/crafting/crafting";
import {type CraftCategory, CraftItem} from "~/types/crafting";
import {GenericProduction} from "~/farmroutes/production";
import {TruckIcon, HomeIcon, ChevronLeftIcon, ChevronRightIcon, CubeIcon, WrenchScrewdriverIcon} from "@heroicons/vue/20/solid";
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const mainCategories = craftingCategories.filter((category) => category.parentCategory === null);

const selectedCategory = ref<CraftCategory | null>(null);
const selectedItem = ref<CraftItem | null>(null);
const selectedFarmroute = ref<GenericProduction | null>(null);

const selectCategory = (categoryName: string, clearHistory: boolean = false) => {
  // Only add to history if we have a current category
  if (selectedCategory.value) {
    backwardsHistory.value.push(selectedCategory.value);
  }
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

const backwardsHistory = ref<(CraftCategory | null)[]>([]);
const forwardHistory = ref<(CraftCategory | null)[]>([]);
const selectPreviousCategory = () => {
  forwardHistory.value.push(selectedCategory.value)

  if (backwardsHistory.value.length > 0) {
    selectedCategory.value = backwardsHistory.value.pop() || null;
    selectedItem.value = null;
    selectedFarmroute.value = null;
  }
}

const selectNextCategory = () => {
  if (forwardHistory.value.length > 0) {
    const nextCategory = forwardHistory.value.pop();
    if (nextCategory) {
      selectCategory(nextCategory.name, false);
    }
  }
}

// Breadcrumb navigation system
const breadcrumbs = computed(() => {
  const crumbs = [];
  
  // Add home
  crumbs.push({ type: 'home', label: 'Start', action: () => navigateToHome() });
  
  // Add history categories
  if (backwardsHistory.value.length > 0) {
    backwardsHistory.value.forEach((category, index) => {
      if (category) {
        crumbs.push({
          type: 'category',
          label: category.localized,
          category: category,
          action: () => navigateToCategory(category as CraftCategory)
        });
      }
    });
  }
  
  // Add current category
  if (selectedCategory.value) {
    crumbs.push({
      type: 'current-category',
      label: selectedCategory.value.localized,
      category: selectedCategory.value,
      action: null // Current category is not clickable
    });
  }
  
  // Add selected item
  if (selectedItem.value) {
    crumbs.push({
      type: 'item',
      label: selectedItem.value.localized,
      item: selectedItem.value,
      action: () => clearItemSelection()
    });
  }
  
  return crumbs;
});

const navigateToHome = () => {
  selectedCategory.value = null;
  selectedItem.value = null;
  selectedFarmroute.value = null;
  backwardsHistory.value = [];
  forwardHistory.value = [];
}

const navigateToCategory = (targetCategory: CraftCategory) => {
  // Find the position of the target category in backwards history
  const targetIndex = backwardsHistory.value.findIndex(cat => cat?.name === targetCategory.name);
  
  if (targetIndex !== -1) {
    // Move categories after the target (including current) to forward history
    const categoriesToMove = backwardsHistory.value.splice(targetIndex + 1);
    if (selectedCategory.value) {
      forwardHistory.value = [selectedCategory.value, ...categoriesToMove, ...forwardHistory.value];
    }
    
    // Set the target category as current (don't add to history again)
    selectedCategory.value = targetCategory;
    selectedItem.value = null;
    selectedFarmroute.value = null;
  }
}

const clearItemSelection = () => {
  selectedItem.value = null;
  selectedFarmroute.value = null;
}
</script>

<template>
  <div class="mx-auto w-full max-w-[100rem] grow mt-6 relative z-10">
    <!-- Header Section -->
    <div class="px-6 sm:px-8 lg:px-12 xl:px-16 mb-8">
      <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/40 shadow-2xl">
        <div class="flex items-center justify-between">
          <!-- Title -->
          <div>
            <h1 class="text-3xl font-bold text-gray-200 flex items-center">
              <WrenchScrewdriverIcon class="mr-3 size-8 text-panthor-red" />
              Crafting-Übersicht
            </h1>
            <p class="text-gray-400 mt-2">Entdecke alle verfügbaren Crafting-Rezepte und Materialien</p>
          </div>

          <!-- Navigation Controls -->
          <div class="flex items-center space-x-4">
            <!-- Breadcrumb Navigation -->
            <nav class="hidden lg:flex" aria-label="Breadcrumb">
              <ol class="flex items-center space-x-1">
                <template v-for="(crumb, index) in breadcrumbs" :key="index">
                  <li class="flex items-center">
                    <!-- Separator (except for first item) -->
                    <ChevronRightIcon v-if="index > 0" class="h-4 w-4 text-gray-500 mx-2" />
                    
                    <!-- Home icon -->
                    <button 
                      v-if="crumb.type === 'home'"
                      @click="crumb.action"
                      class="p-1 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                      title="Zur Hauptseite">
                      <HomeIcon class="h-5 w-5 text-gray-400 group-hover:text-panthor-red transition-colors duration-200" />
                    </button>
                    
                    <!-- Clickable category breadcrumb -->
                    <button 
                      v-else-if="crumb.type === 'category' && crumb.action"
                      @click="crumb.action!"
                      class="text-sm text-gray-400 hover:text-panthor-red transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-gray-700/30"
                      :title="`Zu ${crumb.label} navigieren`">
                      {{ crumb.label }}
                    </button>
                    
                    <!-- Current category (not clickable) -->
                    <span 
                      v-else-if="crumb.type === 'current-category'"
                      class="text-sm text-panthor-red font-medium px-2 py-1">
                      {{ crumb.label }}
                    </span>
                    
                    <!-- Clickable item breadcrumb -->
                    <button 
                      v-else-if="crumb.type === 'item' && crumb.action"
                      @click="crumb.action!"
                      class="text-sm text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-gray-700/30"
                      title="Item-Auswahl zurücksetzen">
                      {{ crumb.label }}
                    </button>
                  </li>
                </template>
              </ol>
            </nav>

            <!-- History Controls -->
            <div v-if="backwardsHistory.length || forwardHistory.length" class="flex space-x-2">
              <button 
                @click="selectPreviousCategory"
                :disabled="!backwardsHistory.length"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-200 bg-gray-800/60 rounded-xl border border-gray-600/40 hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-panthor-red disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                <ChevronLeftIcon class="w-4 h-4 mr-1" />
                Zurück
              </button>
              <button 
                @click="selectNextCategory"
                :disabled="!forwardHistory.length"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-200 bg-gray-800/60 rounded-xl border border-gray-600/40 hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-panthor-red disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                Vorwärts
                <ChevronRightIcon class="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="px-6 sm:px-8 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left Panel: Categories/Items -->
        <div class="lg:col-span-8" v-auto-animate>
          <!-- Category Grid -->
          <template v-if="!selectedCategory || childCategories.length > 0">
            <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
              <div class="mb-6">
                <h2 class="text-xl font-bold text-gray-200 mb-2">
                  {{ selectedCategory ? 'Unterkategorien' : 'Kategorien' }}
                </h2>
                <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  v-for="category in (selectedCategory === null ? mainCategories : childCategories)" 
                  :key="category.name"
                  @click="selectCategory(category.name, true)"
                  class="group bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 cursor-pointer hover:border-panthor-red/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  
                  <div class="flex items-center mb-4">
                    <span :class="[category.iconBackground, category.iconForeground, 'inline-flex rounded-xl p-3 group-hover:scale-110 transition-transform duration-300']">
                      <component :is="category.icon" class="size-6" />
                    </span>
                  </div>
                  
                  <h3 class="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-200">
                    {{ category.localized }}
                  </h3>
                  <p class="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    {{ category.description }}
                  </p>
                </div>
              </div>
            </div>
          </template>

          <!-- Items Grid -->
          <template v-if="selectedCategory?.items?.length">
            <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
              <div class="mb-6">
                <h2 class="text-xl font-bold text-gray-200 mb-2">Verfügbare Items</h2>
                <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  v-for="item in selectedCategory.items" 
                  :key="item.name"
                  @click="selectItem(item.name)"
                  class="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 cursor-pointer hover:border-panthor-red/50 transition-all duration-200 hover:shadow-lg"
                  :class="{'border-panthor-red bg-panthor-red/10': selectedItem?.name === item.name}">
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold text-gray-200">{{ item.localized }}</h3>
                      <p class="text-sm text-gray-400">Level {{ item.requiredLevel }} benötigt</p>
                    </div>
                    <div class="flex items-center justify-center w-8 h-8 bg-panthor-red/20 rounded-lg">
                      <CubeIcon class="w-5 h-5 text-panthor-red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- Farmroute Details -->
          <template v-if="selectedFarmroute">
            <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-200 mb-2 flex items-center">
                  <TruckIcon class="mr-2 size-5 text-panthor-red" />
                  Farmroute für {{ selectedFarmroute.productLocalizedName }}
                </h3>
                <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
              </div>

              <Farmroute :product="selectedFarmroute"/>
            </div>
          </template>
        </div>

        <!-- Right Panel: Item Details -->
        <div class="lg:col-span-4 space-y-6" v-auto-animate>
          <!-- Item Details -->
          <template v-if="selectedItem">
            <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/40 shadow-2xl">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-200 mb-2">Benötigte Materialien</h3>
                <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
              </div>

              <div class="space-y-4">
                <div 
                  v-for="(material, index) in selectedItem.materials" 
                  :key="index" 
                  class="bg-gradient-to-r from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
                  
                  <div class="flex items-center justify-between">
                    <div class="flex-1">
                      <p class="font-medium text-gray-200">
                        <template v-if="material?.requiredItem instanceof GenericProduction">
                          {{ material.requiredItem.productLocalizedName }}
                        </template>
                        <template v-else>
                          {{ material.requiredItem?.localized }}
                        </template>
                      </p>
                      <p class="text-sm text-gray-400">{{ material.amount }} Einheit(en)</p>
                    </div>
                    
                    <template v-if="material?.requiredItem instanceof GenericProduction">
                      <button 
                        @click="selectFarmroute(material?.requiredItem)" 
                        class="ml-4 flex items-center justify-center w-10 h-10 bg-panthor-red/20 rounded-xl border border-panthor-red/30 hover:bg-panthor-red/30 hover:scale-105 transition-all duration-200 group">
                        <TruckIcon class="w-5 h-5 text-panthor-red group-hover:text-white" />
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- Empty State -->
          <template v-if="!selectedItem">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 shadow-2xl">
              <div class="text-center">
                <CubeIcon class="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 class="text-lg font-semibold text-gray-300 mb-2">Wähle ein Item</h3>
                <p class="text-gray-400">Wähle ein Item aus, um die benötigten Materialien zu sehen.</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>