<script setup lang="ts">
import type {ChartItem} from "~/types/charts";
import {ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowLongRightIcon} from "@heroicons/vue/20/solid";

defineProps(
  {
    marketHistoryData: {
      type: Array as () => ChartItem[],
      required: true
    },
    onlyGraph: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 200
    },
    title: {
      type: String,
      default: 'Market Item Graph'
    },
  }
)

</script>

<template>
  <div class="rounded-lg shadow-sm mb-4">
    <div class="rounded-lg bg-white/10 shadow-lg md:shadow-xl relative overflow-hidden">
      <div class="px-3 pt-8 pb-16 text-center relative z-10 flex flex-col items-center justify-center">
        <h3 class="text-2xl text-gray-100 font-semibold leading-tight">
          {{ title }}
        </h3>
        <div class="inline-flex items-center">
          <h4 class="text-md uppercase text-gray-400 leading-tight mr-2">{{ marketHistoryData[0].price.toLocaleString() }} €</h4>

          <template v-if="(marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) > 1">
            <ArrowTrendingUpIcon class="text-green-500 size-6" />
          </template>
          <template v-else-if="(marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) < 1">
            <ArrowTrendingDownIcon class="text-red-500 size-6" />
          </template>
          <template v-else>
            <ArrowLongRightIcon class="text-gray-400 size-6" />
          </template>

          <span class="text-gray-400 text-sm ml-2">
            {{
              ((marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) * 100 - 100).toFixed(2)
            }} %
          </span>
        </div>


      </div>
      <div class="absolute bottom-0 inset-x-[-12px]">
        <LineChart
            :responsive="true"
            :height="height"
            :hideTooltip="onlyGraph"
            :hideLegend="onlyGraph"
            :data="marketHistoryData"
            :xDomainLine="!onlyGraph"
            :yDomainLine="!onlyGraph"
            :categories="{
                price: {
                  name: 'Aktueller Preis: ' + marketHistoryData[marketHistoryData.length - 1].price + ' €',
                  color: ((marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) > 1) ? '#00c950' : (((marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) < 1) ? '#ff0000' : '#808080'),
                }
              }"
            :yFormatter="(value: number) => onlyGraph ? '' : value.toLocaleString('de-DE', { style: 'currency', trailingZeroDisplay: 'stripIfInteger', currency: 'EUR' })"
            :xFormatter="(i: number) => onlyGraph ? '' : new Date(marketHistoryData[i].created_at).toLocaleTimeString('de-DE', {
                hour: '2-digit',
                minute: '2-digit'
              })"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>