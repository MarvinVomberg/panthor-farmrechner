<script setup lang="ts">
import type {ChartItem} from "~/types/charts";
import {ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowLongRightIcon} from "@heroicons/vue/20/solid";

defineProps(
  {
    marketHistoryData: {
      type: Array as () => ChartItem[],
      required: true
    },
    priceNow: {
      type: Number,
      default: 1
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

const priceChange = computed(() => {
  if (!marketHistoryData.length) return 0
  return (marketHistoryData[marketHistoryData.length - 1].price / marketHistoryData[0].price) - 1
})

const isPositive = computed(() => priceChange.value > 0)
const isNegative = computed(() => priceChange.value < 0)
const isNeutral = computed(() => priceChange.value === 0)
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/40 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group">
    <!-- Header -->
    <div class="p-6 pb-4">
      <h3 class="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-200 mb-3 line-clamp-2">
        {{ title }}
      </h3>
      
      <!-- Price & Change Info -->
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-2xl font-bold text-gray-100">
            {{ priceNow.toLocaleString() }} €
          </span>
          <div class="flex items-center mt-1">
            <template v-if="isPositive">
              <ArrowTrendingUpIcon class="text-green-400 size-4 mr-1" />
              <span class="text-green-400 text-sm font-medium">
                +{{ (priceChange * 100).toFixed(2) }}%
              </span>
            </template>
            <template v-else-if="isNegative">
              <ArrowTrendingDownIcon class="text-red-400 size-4 mr-1" />
              <span class="text-red-400 text-sm font-medium">
                {{ (priceChange * 100).toFixed(2) }}%
              </span>
            </template>
            <template v-else>
              <ArrowLongRightIcon class="text-gray-400 size-4 mr-1" />
              <span class="text-gray-400 text-sm font-medium">
                0.00%
              </span>
            </template>
          </div>
        </div>

        <!-- Trend Indicator -->
        <div class="flex items-center justify-center w-12 h-12 rounded-xl"
             :class="{
               'bg-green-500/20 border border-green-500/30': isPositive,
               'bg-red-500/20 border border-red-500/30': isNegative,
               'bg-gray-500/20 border border-gray-500/30': isNeutral
             }">
          <ArrowTrendingUpIcon v-if="isPositive" class="text-green-400 size-6" />
          <ArrowTrendingDownIcon v-else-if="isNegative" class="text-red-400 size-6" />
          <ArrowLongRightIcon v-else class="text-gray-400 size-6" />
        </div>
      </div>
    </div>

    <!-- Chart Section -->
    <div class="relative h-20 mx-4 mb-4">
      <div class="absolute inset-0 rounded-xl overflow-hidden">
        <LineChart
            :responsive="true"
            :height="height"
            :hideTooltip="onlyGraph"
            :hideLegend="onlyGraph"
            :data="marketHistoryData"
            :xDomainLine="false"
            :yDomainLine="false"
            :categories="{
                price: {
                  name: 'Preis: ' + marketHistoryData[marketHistoryData.length - 1].price + ' €',
                  color: isPositive ? '#10b981' : (isNegative ? '#ef4444' : '#6b7280'),
                }
              }"
            :yFormatter="() => ''"
            :xFormatter="() => ''"
        />
      </div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 rounded-xl"
           :class="{
             'bg-gradient-to-t from-green-500/10 to-transparent': isPositive,
             'bg-gradient-to-t from-red-500/10 to-transparent': isNegative,
             'bg-gradient-to-t from-gray-500/10 to-transparent': isNeutral
           }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>