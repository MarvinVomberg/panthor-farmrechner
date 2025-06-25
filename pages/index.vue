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
import {definePageMeta} from "#imports";

const loadingMarketData = ref<boolean>(true)
const loadingShopTypes = ref<boolean>(true)
const loadingVehicles = ref<boolean>(true)

const marketData = ref<MarketItem[]>([])
const vehicleShopTypes = ref<VehicleShopType[]>([])
const vehicles = ref<Vehicle[]>([])

const selectedShopType = ref<ComboboxItem | null>(null)
const selectedVehicle = ref<ComboboxItem | null>(null)
const selectedMarketItem = ref<ComboboxItem | null>(null)

const fullSelectedVehicle = computed<Vehicle | null>(() => {
  if (!selectedVehicle.value) {
    return null;
  }

  return vehicles.value?.find(v => v.id === selectedVehicle.value?.id) || null
})

const fullSelectedMarketItem = computed<MarketItem | null>(() => {
  if (!selectedMarketItem.value) {
    return null;
  }

  return marketData.value?.find(m => m.item === selectedMarketItem.value?.id) || null
})

onMounted(() => {
  fetch('https://api.panthor.de/v1/market/1').then((jsonResponse) => jsonResponse.json()).then((response: MarketItemResponse) => {
    marketData.value = response.data
  }).finally(() => {
    loadingMarketData.value = false
  })

  fetch('https://api.panthor.de/v1/info/vehicles_shoptypes').then((jsonResponse) => jsonResponse.json()).then((response: VehicleShopTypesResponse) => {
    vehicleShopTypes.value = response.data
  }).finally(() => {
    loadingShopTypes.value = false
  })
})

const fetchVehiclesForShopType = (vehicleShopType: string) => {
  loadingVehicles.value = true
  selectedVehicle.value = null

  fetch(`https://api.panthor.de/v1/info/vehicles/${vehicleShopType}`).then((jsonResponse) => jsonResponse.json()).then((response: VehicleResponse) => {
    vehicles.value = response.data
  }).finally(() => {
    loadingVehicles.value = false
  })
}

watch(selectedShopType, (item: ComboboxItem | null) => {
  if (item) {
    fetchVehiclesForShopType(item.id);
  }
});

watch(selectedVehicle, (item: ComboboxItem | null) => {
  if (item) {
    const vehicle = vehicles.value?.find(v => v.id === item.id)

    if (vehicle) {
      console.log(`Selected vehicle`, vehicle)
    }
  }
})

</script>

<template>
  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
  <div class="flex-1 xl:flex">
    <div class="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6">
      <ComboboxWithImage
          label="Shop auswählen"
          :items="vehicleShopTypes.map((vehicleShopType: VehicleShopType) => ({
        id: vehicleShopType.shoptype,
        name: vehicleShopType.shopname
      }))"
          v-model="selectedShopType"
      />

      <ComboboxWithImage
          label="Fahrzeug auswählen"
          :items="vehicles.map((vehicle: Vehicle) => ({
        id: vehicle.id,
        name: vehicle.name
      }))"
          v-model="selectedVehicle"
      />
    </div>

    <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
      <div class="mt-4">
        <h2 class="text-lg font-semibold">Selected Vehicle</h2>
        <p>Name: {{ fullSelectedVehicle?.name }}</p>
        <p>Price: {{ fullSelectedVehicle?.price }}</p>
        <p>v Space: {{ fullSelectedVehicle?.v_space }}</p>
      </div>
    </div>
  </div>

  <div class="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6">
    <ComboboxWithImage
        label="Marktitem auswählen"
        :items="marketData.map((marketItem: MarketItem) => ({
        id: marketItem.item,
        name: marketItem.localized
      }))"
        v-model="selectedMarketItem"
    />

    <div class="mt-4">
      <h2 class="text-lg font-semibold">Selected Market Item</h2>
      <p>Name: {{ fullSelectedMarketItem?.localized }}</p>
      <p>Price: {{ fullSelectedMarketItem?.price }}</p>
      <p>Amount: {{ fullSelectedMarketItem?.export_virt_item?.sellPrice ?? 'N/A' }}</p>
    </div>
  </div>
  </div>
</template>