<script setup lang="ts">
import type {MarketItem, MarketItemLogData, MarketItemLogsResponse, MarketItemResponse} from "~/types/api";
import {farmroutes} from "~/farmroutes";
import type {GenericProduction} from "~/farmroutes/production";
import {ChartBarIcon, MagnifyingGlassIcon, ArrowPathIcon} from "@heroicons/vue/20/solid";
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const allMarketItems = ref<MarketItem[] | null>(null)
const marketHistoryData = ref<MarketItemLogData[]>([])
const loadingMarketItems = ref<boolean>(true)
const searchQuery = ref<string>('')
const sortBy = ref<'name' | 'price' | 'change'>('name')
const sortOrder = ref<'asc' | 'desc'>('asc')

onMounted(() => {
  loadMarketData()
})

const loadMarketData = () => {
  loadingMarketItems.value = true
  fetch('https://api.panthor.de/v1/market/1').then(_ => _.json()).then((marketResponse: MarketItemResponse) => {
    allMarketItems.value = marketResponse.data.sort((a: MarketItem, b: MarketItem) => {
      if (a.localized < b.localized) return -1;
      if (a.localized > b.localized) return 1;
      return 0;
    });
  }).finally(() => {
    loadingMarketItems.value = false;
  })
}

const getMarketItemByName = (name: string): MarketItem | undefined => {
  return allMarketItems.value?.find((item: MarketItem) => item.localized === name)
}

const getFarmrouteByName = (name: string|undefined): GenericProduction | undefined => {
  if (!name) return undefined;
  return farmroutes[name]
}

const filteredMarketData = computed(() => {
  if (!marketHistoryData.value.length) return []
  
  let filtered = marketHistoryData.value.filter(marketItemHistoryData => {
    const marketItem = getMarketItemByName(marketItemHistoryData[0][0].item)
    const farmroute = getFarmrouteByName(marketItem?.item)
    const itemName = farmroute?.productLocalizedName || marketItem?.localized || ''
    return itemName.toLowerCase().includes(searchQuery.value.toLowerCase())
  })

  // Sort by selected criteria
  filtered.sort((a, b) => {
    const itemA = getMarketItemByName(a[0][0].item)
    const itemB = getMarketItemByName(b[0][0].item)
    const farmrouteA = getFarmrouteByName(itemA?.item)
    const farmrouteB = getFarmrouteByName(itemB?.item)
    
    let compareValue = 0
    
    if (sortBy.value === 'name') {
      const nameA = farmrouteA?.productLocalizedName || itemA?.localized || ''
      const nameB = farmrouteB?.productLocalizedName || itemB?.localized || ''
      compareValue = nameA.localeCompare(nameB)
    } else if (sortBy.value === 'price') {
      compareValue = (itemA?.price || 0) - (itemB?.price || 0)
    } else if (sortBy.value === 'change') {
      const changeA = (a[0][a[0].length - 1].price / a[0][0].price) - 1
      const changeB = (b[0][b[0].length - 1].price / b[0][0].price) - 1
      compareValue = changeA - changeB
    }
    
    return sortOrder.value === 'asc' ? compareValue : -compareValue
  })

  return filtered
})

const toggleSort = (newSortBy: 'name' | 'price' | 'change') => {
  if (sortBy.value === newSortBy) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = newSortBy
    sortOrder.value = 'asc'
  }
}

watch(allMarketItems, () => {
  if (!allMarketItems.value) return;

  marketHistoryData.value = []
  allMarketItems.value?.map((marketItem: MarketItem) => {
    fetch(`https://api.panthor.de/v1/market_logs/1/${marketItem.item}/60`).then((jsonResponse) => jsonResponse.json()).then((response: MarketItemLogsResponse) => {
      marketHistoryData.value.push([response.data[0].reverse()])
    })
  })
})
</script>

<template>
  <div class="mx-auto w-full max-w-[100rem] grow mt-6 relative z-10">
    <!-- Header Section -->
    <div class="px-6 sm:px-8 lg:px-12 xl:px-16 mb-8">
      <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/40 shadow-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <!-- Title -->
          <div>
            <h1 class="text-3xl font-bold text-gray-200 flex items-center">
              <ChartBarIcon class="mr-3 size-8 text-panthor-red" />
              Live-Markt
            </h1>
            <p class="text-gray-400 mt-2">Aktuelle Marktpreise und Preisentwicklungen im Überblick</p>
          </div>

          <!-- Controls -->
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Search -->
            <div class="relative">
              <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Nach Items suchen..."
                class="pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600/40 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-panthor-red focus:ring-2 focus:ring-panthor-red/20 transition-all duration-200"
              />
            </div>

            <!-- Sort Controls -->
            <div class="flex gap-2">
              <button
                @click="toggleSort('name')"
                :class="[
                  sortBy === 'name' ? 'bg-panthor-red text-white' : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60',
                  'px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-gray-600/40'
                ]">
                Name {{ sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : '' }}
              </button>
              <button
                @click="toggleSort('price')"
                :class="[
                  sortBy === 'price' ? 'bg-panthor-red text-white' : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60',
                  'px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-gray-600/40'
                ]">
                Preis {{ sortBy === 'price' ? (sortOrder === 'asc' ? '↑' : '↓') : '' }}
              </button>
              <button
                @click="toggleSort('change')"
                :class="[
                  sortBy === 'change' ? 'bg-panthor-red text-white' : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60',
                  'px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-gray-600/40'
                ]">
                Änderung {{ sortBy === 'change' ? (sortOrder === 'asc' ? '↑' : '↓') : '' }}
              </button>
            </div>

            <!-- Refresh Button -->
            <button
              @click="loadMarketData"
              :disabled="loadingMarketItems"
              class="inline-flex items-center px-4 py-2 bg-gray-800/60 border border-gray-600/40 rounded-xl text-gray-300 hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-panthor-red disabled:opacity-50 transition-all duration-200">
              <ArrowPathIcon :class="['w-4 h-4 mr-2', loadingMarketItems ? 'animate-spin' : '']" />
              Aktualisieren
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Market Items Grid -->
    <div class="px-6 sm:px-8 lg:px-12 xl:px-16">
      <template v-if="loadingMarketItems">
        <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
          <div class="text-center">
            <ArrowPathIcon class="mx-auto h-12 w-12 text-gray-400 mb-4 animate-spin" />
            <h3 class="text-lg font-semibold text-gray-300 mb-2">Lade Marktdaten...</h3>
            <p class="text-gray-400">Die aktuellen Marktpreise werden geladen.</p>
          </div>
        </div>
      </template>

      <template v-else-if="!filteredMarketData.length && searchQuery">
        <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
          <div class="text-center">
            <MagnifyingGlassIcon class="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 class="text-lg font-semibold text-gray-300 mb-2">Keine Ergebnisse</h3>
            <p class="text-gray-400">Keine Items gefunden für "{{ searchQuery }}"</p>
          </div>
        </div>
      </template>

      <template v-else>
        <div 
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6" 
          v-auto-animate>
          <template v-for="(marketItemHistoryData, marketItemHistoryDataX) in filteredMarketData"
                    :key="marketItemHistoryDataX">
            <MarketItemGraphCard
                :title="getFarmrouteByName(getMarketItemByName(marketItemHistoryData[0][0].item)?.item)?.productLocalizedName || getMarketItemByName(marketItemHistoryData[0][0].item)?.localized || 'Lade...'"
                :only-graph="true"
                :height="60"
                :market-history-data="marketItemHistoryData[0]"
                :price-now="getMarketItemByName(marketItemHistoryData[0][0].item)?.price"
            />
          </template>
        </div>
      </template>

      <!-- Stats Footer -->
      <template v-if="!loadingMarketItems && filteredMarketData.length">
        <div class="mt-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="text-gray-300">
              <span class="font-semibold">{{ filteredMarketData.length }}</span> von 
              <span class="font-semibold">{{ marketHistoryData.length }}</span> Items angezeigt
            </div>
            <div class="text-sm text-gray-400">
              Letzte Aktualisierung: {{ new Date().toLocaleTimeString('de-DE') }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>