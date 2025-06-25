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
import {computed} from "vue";

const loadingMarketData = ref<boolean>(true)
const loadingShopTypes = ref<boolean>(true)
const loadingVehicles = ref<boolean>(true)

const marketData = ref<MarketItem[]>()
const vehicleShopTypes = ref<VehicleShopType[]>()
const vehicles = ref<Vehicle[]>()

const selectedShopType = ref<ComboboxItem>()
const selectedVehicle = ref<ComboboxItem>()
const selectedMarketItem = ref<ComboboxItem>()

const fullSelectedVehicle = computed<Vehicle>(() => {
  if (!selectedVehicle.value) {
    return null;
  }

  return vehicles.value?.find(v => v.id === selectedVehicle.value.id) || null
})

const fullSelectedMarketItem = computed<MarketItem>(() => {
  if (!selectedMarketItem.value) {
    return null;
  }

  return marketData.value?.find(m => m.item === selectedMarketItem.value.id) || null
})

onMounted(() => {
  fetch('https://api.panthor.de/v1/market/1').then((jsonResponse) => jsonResponse.json()).then((_: MarketItemResponse) => {
    marketData.value = _.data
  }).finally(() => {
    loadingMarketData.value = false
  })

  fetch('https://api.panthor.de/v1/info/vehicles_shoptypes').then((jsonResponse) => jsonResponse.json()).then((_: VehicleShopTypesResponse) => {
    vehicleShopTypes.value = _.data
  }).finally(() => {
    loadingShopTypes.value = false
  })
})

const fetchVehiclesForShopType = (vehicleShopType: string) => {
  loadingVehicles.value = true
  selectedVehicle.value = null

  fetch(`https://api.panthor.de/v1/info/vehicles/${vehicleShopType}`).then((jsonResponse) => jsonResponse.json()).then((_: VehicleResponse) => {
    vehicles.value = _.data
  }).finally(() => {
    loadingVehicles.value = false
  })
}

watch(selectedShopType, (item: ComboboxItem) => {
  fetchVehiclesForShopType(item.id)
})

watch(selectedVehicle, (item: ComboboxItem) => {
  if (item) {
    const vehicle = vehicles.value?.find(v => v.id === item.id)

    if (vehicle) {
      console.log(`Selected vehicle`, vehicle)
    }
  }
})

</script>

<template>

  <template v-if="!loadingShopTypes && vehicleShopTypes?.length">
    <ComboboxWithImage label="Shop auswählen" :items="vehicleShopTypes.map((vehicleShopType: VehicleShopType) =>  {
      return {
        id: vehicleShopType.shoptype,
        name: vehicleShopType.shopname
      }
    } )" v-model="selectedShopType"/>
  </template>

  <template v-if="!loadingVehicles && vehicles?.length">
    <ComboboxWithImage label="Fahrzeug auswählen" :items="vehicles.map((vehicle: Vehicle) =>  {
      return {
        id: vehicle.id,
        name: vehicle.name
      }
    } )" v-model="selectedVehicle"/>
  </template>

  <template v-else-if="loadingVehicles">
    <p>Loading vehicles...</p>
  </template>
  <template v-else>
    <p>No vehicles available for this shop type.</p>
  </template>


  <template v-if="selectedVehicle">
    <div class="mt-4">
      <h2 class="text-lg font-semibold">Selected Vehicle</h2>
      <p>Name: {{ fullSelectedVehicle.name }}</p>
      <p>Price: {{ fullSelectedVehicle.price }}</p>
      <p>v Space: {{ fullSelectedVehicle.v_space }}</p>
    </div>
  </template>


  <template v-if="!loadingMarketData && marketData?.length">
    <ComboboxWithImage label="Marktitem auswählen" :items="marketData.map((marketItem: MarketItem) =>  {
      return {
        id: marketItem.item,
        name: marketItem.localized
      }
    } )" v-model="selectedMarketItem"/>
  </template>

  <template v-if="selectedMarketItem">
    <div class="mt-4">
      <h2 class="text-lg font-semibold">Selected Market Item</h2>
      <p>Name: {{ fullSelectedMarketItem.localized }}</p>
      <p>Price: {{ fullSelectedMarketItem.price }}</p>
      <p>Amount: {{ fullSelectedMarketItem.export_virt_item.sellPrice }}</p>
    </div>
  </template>
</template>

<style scoped>

</style>