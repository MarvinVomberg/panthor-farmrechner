<script setup lang="ts">
import type {GenericProduction} from "~/farmroutes/production";

defineProps({
  product: Object as () => GenericProduction,
})
</script>

<template>
  <div
      v-for="(productionStep, productionStepX) in product?.getProductionSteps()"
      :key="productionStepX"
      class="my-8 p-2 border-1 border-panthor-red">
    <p class="text-lg text-panthor-red font-semibold">{{ productionStepX + 1 }}. Schritt</p>

    <ul class="space-y-2 my-2">
      <template v-for="(inputMaterial, inputMaterialX) in productionStep.inputMaterials"
                :key="inputMaterialX">
        <li class="text-gray-100">
          <dl>
            <dt>{{ inputMaterial.localized_name }}<sup class="text-xs text-gray-500">({{
                inputMaterial.weight
              }}kg)</sup></dt>
            <dd class="text-xs text-gray-500">{{ inputMaterial.source }}</dd>
          </dl>
        </li>

        <template v-if="inputMaterialX < productionStep.inputMaterials.length - 1">
          <li class="text-gray-500">+</li>
        </template>
      </template>
    </ul>

    <p class="text-gray-100 mt-8">zu {{ productionStep.output.localized_name }}<sup
        class="text-xs text-gray-500">({{ productionStep.output.weight }}kg)</sup> verarbeiten an folgendem
      Ort: {{ productionStep.facility }}</p>
  </div>
</template>

<style scoped>

</style>