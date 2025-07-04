<script setup lang="ts">
import type {MarketItem, MarketItemLogData, MarketItemLogsResponse, MarketItemResponse} from "~/types/api";
import {farmroutes} from "~/farmroutes";

const allMarketItems = ref<MarketItem[] | null>(null)
const marketHistoryData = ref<MarketItemLogData[]>([])
const loadingMarketItems = ref<boolean>(true)

onMounted(() => {
  fetch('https://api.panthor.de/v1/market/1').then(_ => _.json()).then((marketResponse: MarketItemResponse) => {
    allMarketItems.value = marketResponse.data;
  }).finally(() => {
    loadingMarketItems.value = false;
  })
})

watch(allMarketItems, () => {
  if (!allMarketItems.value) return;

  allMarketItems.value?.map((marketItem: MarketItem) => {
    fetch(`https://api.panthor.de/v1/market_logs/1/${marketItem.item}/50`).then((jsonResponse) => jsonResponse.json()).then((response: MarketItemLogsResponse) => {
      marketHistoryData.value.push([response.data[0].reverse()])
    })
  })
})

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-4">
    <template v-for="(marketItemHistoryData, marketItemHistoryDataX) in marketHistoryData"
              :key="marketItemHistoryDataX">
      <MarketItemGraphCard
          :title="farmroutes[allMarketItems[marketItemHistoryDataX]?.item]?.productLocalizedName || allMarketItems[marketItemHistoryDataX]?.item || 'Lade...'"
          :only-graph="true"
          :height="50"
          :market-history-data="marketItemHistoryData[0]"
      />
    </template>
  </div>
</template>

<style scoped>

</style>