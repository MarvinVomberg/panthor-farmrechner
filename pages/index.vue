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
  <div>
    <template #left>
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
    </template>


    <template #default>
      <template v-if="selectedVehicle">
        <div class="mt-4">
          <h2 class="text-lg font-semibold">Selected Vehicle</h2>
          <p>Name: {{ fullSelectedVehicle.name }}</p>
          <p>Price: {{ fullSelectedVehicle.price }}</p>
          <p>v Space: {{ fullSelectedVehicle.v_space }}</p>
        </div>
      </template>
    </template>


    <template #right>
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
  </div>
</template>

<style scoped>

</style>