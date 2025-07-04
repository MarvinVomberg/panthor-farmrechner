<script setup lang="ts">
import type {MarketItem, MarketItemLogData, MarketItemLogsResponse, MarketItemResponse} from "~/types/api";
import {farmroutes} from "~/farmroutes";
import type {GenericProduction} from "~/farmroutes/production";

const allMarketItems = ref<MarketItem[] | null>(null)
const marketHistoryData = ref<MarketItemLogData[]>([])
const loadingMarketItems = ref<boolean>(true)

onMounted(() => {
  fetch('https://api.panthor.de/v1/market/1').then(_ => _.json()).then((marketResponse: MarketItemResponse) => {
    allMarketItems.value = marketResponse.data.sort((a: MarketItem, b: MarketItem) => {
      if (a.localized < b.localized) return -1;
      if (a.localized > b.localized) return 1;
      return 0;
    });
  }).finally(() => {
    loadingMarketItems.value = false;
  })
})

const getMarketItemByName = (name: string): MarketItem | undefined => {
  return allMarketItems.value?.find((item: MarketItem) => item.localized === name)
}

const getFarmrouteByName = (name: string|undefined): GenericProduction | undefined => {
  if (!name) return undefined;

  return farmroutes[name]
}

watch(allMarketItems, () => {
  if (!allMarketItems.value) return;

  allMarketItems.value?.map((marketItem: MarketItem) => {
    fetch(`https://api.panthor.de/v1/market_logs/1/${marketItem.item}/60`).then((jsonResponse) => jsonResponse.json()).then((response: MarketItemLogsResponse) => {
      marketHistoryData.value.push([response.data[0].reverse()])
    })
  })
})

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-4">
    <template v-if="allMarketItems?.length">
    <template v-for="(marketItemHistoryData, marketItemHistoryDataX) in marketHistoryData"
              :key="marketItemHistoryDataX">
      <MarketItemGraphCard
          :title="getFarmrouteByName(getMarketItemByName(marketItemHistoryData[0][0].item)?.item)?.productLocalizedName || 'Lade...' + getMarketItemByName(marketItemHistoryData[0][0].item)?.item"
          :only-graph="true"
          :height="50"
          :market-history-data="marketItemHistoryData[0]"
          :price-now="getMarketItemByName(marketItemHistoryData[0][0].item)?.price"
      />
    </template>
    </template>
  </div>
</template>

<style scoped>

</style>