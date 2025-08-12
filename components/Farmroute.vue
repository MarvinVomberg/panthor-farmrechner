<script setup lang="ts">
import type {GenericProduction} from "~/farmroutes/production";
import { ArrowRightIcon, MapPinIcon, CubeIcon } from '@heroicons/vue/20/solid';

defineProps({
  product: Object as () => GenericProduction,
})
</script>

<template>
  <div class="space-y-6">
    <div
        v-for="(productionStep, productionStepX) in product?.getProductionSteps()"
        :key="productionStepX"
        class="relative bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-200">
      
      <!-- Step Header -->
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center">
          <div class="flex items-center justify-center w-8 h-8 bg-panthor-red rounded-full text-white text-sm font-bold mr-3">
            {{ productionStepX + 1 }}
          </div>
          <h3 class="text-lg font-bold text-panthor-red">Schritt {{ productionStepX + 1 }}</h3>
        </div>
        <div class="flex items-center text-xs text-gray-400">
          <MapPinIcon class="w-4 h-4 mr-1" />
          <span class="font-medium">{{ productionStep.facility }}</span>
        </div>
      </div>

      <!-- Materials Flow -->
      <div class="flex items-center justify-between">
        <!-- Input Materials -->
        <div class="flex-1">
          <div class="space-y-3">
            <template v-for="(inputMaterial, inputMaterialX) in productionStep.inputMaterials"
                     :key="inputMaterialX">
              <div class="bg-blue-900/20 backdrop-blur-sm rounded-xl p-3 border border-blue-600/30">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <CubeIcon class="w-4 h-4 text-blue-400 mr-2" />
                    <span class="text-sm font-medium text-gray-200">{{ inputMaterial.localized_name }}</span>
                  </div>
                  <span class="text-xs font-semibold text-blue-300 bg-blue-900/40 px-2 py-1 rounded-lg">{{ inputMaterial.weight }}kg</span>
                </div>
                <p class="text-xs text-gray-400 mt-1 ml-6">{{ inputMaterial.source }}</p>
              </div>
              
              <!-- Plus icon between multiple inputs -->
              <div v-if="inputMaterialX < productionStep.inputMaterials.length - 1" 
                   class="flex justify-center">
                <span class="text-gray-500 text-lg font-bold">+</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Arrow -->
        <div class="mx-6 flex items-center">
          <ArrowRightIcon class="w-6 h-6 text-panthor-red" />
        </div>

        <!-- Output -->
        <div class="flex-1">
          <div class="bg-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-green-600/30">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <CubeIcon class="w-4 h-4 text-green-400 mr-2" />
                <span class="text-sm font-medium text-gray-200">{{ productionStep.output.localized_name }}</span>
              </div>
              <span class="text-xs font-semibold text-green-300 bg-green-900/40 px-2 py-1 rounded-lg">{{ productionStep.output.weight }}kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>