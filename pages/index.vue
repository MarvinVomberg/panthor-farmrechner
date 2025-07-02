<script setup lang="ts">
import type {
  MarketItem,
  MarketItemResponse,
  Vehicle,
  VehicleResponse,
  VehicleShopType,
  VehicleShopTypesResponse
} from "~/types/api";
import type {ComboboxItem} from "~/components/ComboboxWithImage.vue";
import {computed, onMounted, ref, watch} from 'vue'
import {farmroutes} from "~/farmroutes";
import {type GenericProduction, ProcessingStep} from "~/farmroutes/production";

useHead({
  title: "Farmrechner | Panthor.de",
  htmlAttrs: {
    class: "h-full bg-dark text-gray-200"
  },
  bodyAttrs: {
    class: "h-full"
  },
})

const loadingShopTypes = ref<boolean>(false)
const loadingVehicles = ref<boolean>(false)

const vehicleShopTypes = ref<VehicleShopType[]>([])
const vehicles = ref<Vehicle[]>([])

const selectedShopType = ref<ComboboxItem | null>(null)
const selectedVehicle = ref<ComboboxItem | null>(null)
const selectedMarketItem = ref<ComboboxItem | null>(null)

const resultSize = ref<number>(0)
const resultPrice = ref<number>(0)
const productionSteps = ref<ProcessingStep[]>([]);

const fullSelectedVehicle = computed<Vehicle | null>(() => {
  if (!selectedVehicle.value) {
    return null;
  }

  return vehicles.value?.find(v => v.id === selectedVehicle.value?.id) || null
})

onMounted(() => {
  fetch('https://api.panthor.de/v1/info/vehicles_shoptypes').then((jsonResponse) => jsonResponse.json()).then((response: VehicleShopTypesResponse) => {
    vehicleShopTypes.value = response.data
  }).finally(() => {
    loadingShopTypes.value = false
  })
})

const fetchVehiclesForShopType = (vehicleShopType: string | number) => {
  loadingVehicles.value = true
  selectedVehicle.value = null

  fetch(`https://api.panthor.de/v1/info/vehicles/${vehicleShopType}`).then((jsonResponse) => jsonResponse.json()).then((response: VehicleResponse) => {
    vehicles.value = response.data
  }).finally(() => {
    loadingVehicles.value = false
  })
}

watch([selectedMarketItem, selectedVehicle], async () => {
  if(!fullSelectedVehicle.value) return;
  if(!selectedMarketItem.value) return;

  console.log(selectedMarketItem.value.id)

  resultSize.value = farmroutes[selectedMarketItem.value.id].calculateEndProductYield(fullSelectedVehicle.value.v_space);

  const itemPrice = await farmroutes[selectedMarketItem.value.id].getPrice();
  resultPrice.value = itemPrice * resultSize.value;

  productionSteps.value = farmroutes[selectedMarketItem.value.id].getProductionSteps()
})

watch(selectedShopType, (item: ComboboxItem | null) => {
  if (item) {
    fetchVehiclesForShopType(item.id);
  }
});

</script>

<template>
  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
    <div class="shrink-0 border-gray-200 px-4 py-6 order-last sm:px-6 lg:w-96 border-t-0 lg:border-l lg:pr-8 xl:pr-6">
      <ComboboxWithImage
          label="Marktitem auswählen"
          :items="Object.values(farmroutes).map((product: GenericProduction) => {
            return {
              id: product.productName,
              name: product.productLocalizedName,
            }
          })"
          v-model="selectedMarketItem"
      />

      <div>
        <p class="mt-2 text-sm text-gray-500">
          Wähle ein Marktitem aus, um die Erträge und Kosten zu berechnen.
        </p>
      </div>

    </div>

    <div class="flex-1 order-first xl:flex">
      <div
          class="border-y border-gray-200 px-4 py-6 sm:px-6 lg:border-t-0 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6">
        <ComboboxWithImage
            label="Shop auswählen"
            :items="vehicleShopTypes.map((vehicleShopType: VehicleShopType) => ({
          id: vehicleShopType.shoptype,
          name: vehicleShopType.shopname
        }))"
            v-model="selectedShopType"
        />

        <p class="mt-2 text-sm text-gray-500">
          Wähle einen Shop aus, um die verfügbaren Fahrzeuge zu sehen.
        </p>

        <template v-if="loadingShopTypes">
          <p class="mt-2 text-sm text-gray-500">Lade Shoptypen...</p>
        </template>

        <ComboboxWithImage
            class="mt-8"
            label="Fahrzeug auswählen"
            :items="vehicles.map((vehicle: Vehicle) => ({
          id: vehicle.id,
          name: vehicle.name
        }))"
            v-model="selectedVehicle"
        />
        <p class="mt-2 text-sm text-gray-500">
          Wähle ein Fahrzeug aus, um die Details zu sehen.
        </p>

        <template v-if="loadingVehicles">
          <p class="mt-2 text-sm text-gray-500">Lade Fahrzeuge...</p>
        </template>

        <template v-if="selectedVehicle && fullSelectedVehicle">
          <div class="mt-8">
            <h3 class="text-sm font-semibold">Details zum Fahrzeug</h3>
            <p class="mt-2 text-sm text-gray-500">Name: {{ fullSelectedVehicle.name }}</p>
            <p class="text-sm text-gray-500">Kapazität: {{ fullSelectedVehicle.v_space.toLocaleString() }} Einheiten</p>
            <p class="text-sm text-gray-500">Preis: {{ fullSelectedVehicle.price.toLocaleString() }} €</p>
          </div>
        </template>
      </div>



      <template v-if="selectedVehicle && selectedMarketItem">

        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          <h2 class="text-lg font-semibold">Endergebnisse</h2>
          <p>Ertrag: {{ resultSize.toLocaleString() }} Einheiten</p>
          <p>Gesamtkosten: {{ resultPrice.toLocaleString() }} €</p>

          <template v-for="(productionStep, productionStepX) in productionSteps" :key="productionStepX">
            <div class="mt-8">
              Verarbeite

              <ul class="space-y-4">
                <template v-for="inputMaterial in productionStep.inputMaterials">
                  <li>
                    <dl>
                      <dt>{{ inputMaterial.localized_name }} <span class="text-sm text-gray-500">(Gewicht: {{ inputMaterial.weight }})</span></dt>
                      <dd class="text-sm text-gray-500">{{ inputMaterial.source }}</dd>
                    </dl>
                  </li>
                </template>
              </ul>

              zu {{ productionStep.output.localized_name }} (Gewicht: {{ productionStep.output.weight }}) an folgendem Ort: <span class="font-semibold">{{ productionStep.facility }}</span>
            </div>
          </template>
        </div>




      </template>
    </div>
  </div>
</template>