<script setup lang="ts">
import type {
  MarketItemLogsResponse, PlayerVehicle,
  PlayerVehiclesResponse,
  Vehicle,
  VehicleResponse,
  VehicleShopType,
  VehicleShopTypesResponse
} from "~/types/api";
import type {ComboboxItem} from "~/components/ComboboxWithImage.vue";
import {computed, onMounted, ref, watch} from 'vue'
import {farmroutes} from "~/farmroutes";
import {type GenericProduction, ProcessingStep} from "~/farmroutes/production";
import type {ChartItem} from "~/types/charts";
import {ChevronDownIcon} from '@heroicons/vue/16/solid';
import {HomeIcon, ShieldCheckIcon, TruckIcon} from '@heroicons/vue/20/solid';
import TextInput from "~/components/TextInput.vue";
import {vAutoAnimate} from "@formkit/auto-animate/vue";
import Farmroute from "~/components/Farmroute.vue";

const playerAPIToken = ref<string>('')
const playerAPITokenError = ref<string | null>(null)
const playerVehicles = ref<Vehicle[] | null>(null)

const backpackSize = ref<number>(0)

const loadingShopTypes = ref<boolean>(false)
const loadingVehicles = ref<boolean>(false)

const vehicleShopTypes = ref<VehicleShopType[]>([])
const vehicles = ref<Vehicle[]>([])

const selectedShopType = ref<ComboboxItem | null>(null)
const selectedVehicle = ref<ComboboxItem | null>(null)
const selectedMarketItem = ref<ComboboxItem | null>(null)

const resultSize = ref<number>(0)
const resultPrice = ref<number>(0)
const productionSteps = ref<ProcessingStep[]>([])

const marketHistoryData = ref<ChartItem[]>([])

const tabs = ref([
  {name: 'Shops', icon: TruckIcon, current: true},
  {name: 'Garage', icon: HomeIcon, current: false}
])

const toggleTab = (tabName: string) => {
  tabs.value.forEach(tab => {
    tab.current = tab.name === tabName;
  });
}

const selectedTab = computed(() => {
  return tabs.value.find(tab => tab.current);
});

const fullSelectedVehicle = computed<Vehicle | null>(() => {
  if (!selectedVehicle.value) {
    return null;
  }

  return vehicles.value?.find(v => v.id === selectedVehicle.value?.id) || playerVehicles.value?.find(v => v.id === selectedVehicle.value?.id) || null;
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

const fetchGarage = () => {
  if (!playerAPIToken.value) {
    playerAPITokenError.value = 'Bitte gib deinen API Token ein, um deine Fahrzeuge zu laden.'
    return;
  }

  loadingVehicles.value = true
  selectedVehicle.value = null

  fetch(`https://api.panthor.de/v1/player/${playerAPIToken.value}/vehicles`).then((jsonResponse) => jsonResponse.json()).then((response: PlayerVehiclesResponse) => {
    playerVehicles.value = response.data.filter((playerVehicle: PlayerVehicle) => {
      return playerVehicle.side.toLowerCase() === 'civ';
    }).map((playerVehicle: PlayerVehicle) => {
      return playerVehicle.vehicle_data;
    });
  }).catch(() => {
    playerAPITokenError.value = 'Fehler beim Laden der Fahrzeuge. Bitte überprüfe deinen API Token.'
  }).finally(() => {
    loadingVehicles.value = false
  })
}

watch(playerAPIToken, () => {
  playerAPITokenError.value = null;
  playerVehicles.value = null;
})

watch(tabs, () => {
  selectedVehicle.value = null;
}, {deep: true})

watch([selectedMarketItem, selectedVehicle, backpackSize], async () => {
  if (!selectedMarketItem.value) return;
  productionSteps.value = farmroutes[selectedMarketItem.value.id].getProductionSteps()


  if (!fullSelectedVehicle.value) return;
  resultSize.value = farmroutes[selectedMarketItem.value.id].calculateEndProductYield(fullSelectedVehicle.value.v_space + backpackSize.value);

  const itemPrice = await farmroutes[selectedMarketItem.value.id].getPrice();
  resultPrice.value = itemPrice * resultSize.value;
})

watch([selectedMarketItem], () => {
  if (!selectedMarketItem.value) return;

  fetch(`https://api.panthor.de/v1/market_logs/1/${selectedMarketItem.value.id}/50`).then(_ => _.json()).then((marketItemLogsResponse: MarketItemLogsResponse) => {
    marketHistoryData.value = marketItemLogsResponse.data[0].reverse();
  })
})

watch(selectedShopType, (item: ComboboxItem | null) => {
  if (!item) return;

  fetchVehiclesForShopType(item.id);
});
</script>

<template>
  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
    <div class="shrink-0 border-gray-200 px-4 py-6 order-last sm:px-6 lg:w-96 border-t-0 lg:border-l lg:pr-8 xl:pr-6">

      <ComboboxWithImage
          tabindex="3"
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

      <div v-auto-animate>
        <template v-if="marketHistoryData.length">
          <div class="chart-wrapper mt-8">
            <AreaChart
                :height="200"
                :data="marketHistoryData"
                :xDomainLine="true"
                :yDomainLine="true"
                :categories="{
                price: {
                  name: 'Aktueller Preis: ' + marketHistoryData[marketHistoryData.length - 1].price + ' €',
                  color: '#ff0000'
                }
              }"
                :yFormatter="(value: number) => value.toLocaleString('de-DE', { style: 'currency', trailingZeroDisplay: 'stripIfInteger', currency: 'EUR' })"
                :xFormatter="(i: number) => new Date(marketHistoryData[i].created_at).toLocaleTimeString('de-DE', {
                hour: '2-digit',
                minute: '2-digit'
              })"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="flex-1 order-first xl:flex">
      <div
          class="border-y border-gray-200 px-4 py-6 sm:px-6 lg:border-t-0 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6">

        <div class="mb-8">
          <div class="grid grid-cols-1 sm:hidden">
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select @change="toggleTab($event.target?.value)" aria-label="Select a tab"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/80 py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-panthor-red">
              <option v-for="tab in tabs" :key="tab.name" :selected="tab.current" :value="tab.name">{{
                  tab.name
                }}
              </option>
            </select>
            <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                aria-hidden="true"/>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex" aria-label="Tabs">
                <button v-for="tab in tabs" :key="tab.name" @click="toggleTab(tab.name)"
                        :class="[tab.current ? 'border-panthor-red text-panthor-red' : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300', 'group inline-flex items-center border-b px-4 pb-4 text-sm font-medium cursor-pointer transition-all ease-linear']"
                        :aria-current="tab.current ? 'page' : undefined">
                  <component :is="tab.icon"
                             :class="[tab.current ? 'text-panthor-red' : 'text-gray-400 group-hover:text-gray-400', 'mr-2 -ml-0.5 size-5 transition ease-in-out duration-150']"
                             aria-hidden="true"/>
                  <span>{{ tab.name }}</span>
                </button>
              </nav>
            </div>
          </div>
        </div>


        <div class="col-span-2" v-show="selectedTab?.name === 'Shops'">
          <ComboboxWithImage
              tabindex="1"
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
              tabindex="2"
              class="mt-8"
              label="Fahrzeug auswählen"
              :items="vehicles.map((vehicle: Vehicle) => ({
          id: vehicle.id,
          name: vehicle.name + ' (' + vehicle.v_space.toLocaleString() + ' kg)',
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
              <p class="mt-2 text-sm text-gray-500 truncate">Name: {{ fullSelectedVehicle.name }}</p>
              <p class="text-sm text-gray-500 truncate">Kapazität: {{
                  fullSelectedVehicle.v_space.toLocaleString()
                }}
                Einheiten</p>
              <p class="text-sm text-gray-500 truncate">Preis: {{ fullSelectedVehicle.price.toLocaleString() }}
                €</p>
            </div>
          </template>
        </div>
        <div class="col-span-2" v-show="selectedTab?.name === 'Garage'">
          <div>
            <TextInput
                v-model="playerAPIToken"
                label="API Token"
                placeholder="Gib deinen API Token ein"
                description="Niemand außer dir kann diesen Token sehen. Er wird benötigt, um deine Fahrzeuge zu laden, verlässt dabei aber niemals deinen Browser."
                type="text"
                id="api-token-input"
                @keydown.enter="fetchGarage"
            />

            <template v-if="playerVehicles === null">
              <button :disabled="loadingVehicles" @click="fetchGarage" type="button"
                      class="mt-4 inline-flex items-center gap-x-2 rounded-md bg-panthor-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-panthor-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panthor-red">
                <ShieldCheckIcon class="-ml-0.5 size-5" aria-hidden="true"/>
                Fahrzeuge laden
              </button>

              <template v-if="playerAPITokenError">
                <p class="mt-2 text-sm text-red-500 leading-tight">{{ playerAPITokenError }}</p>
              </template>
            </template>

            <template v-else-if="playerVehicles.length === 0">
              <p class="mt-2 text-sm text-red-500 leading-tight">Du hast keine Fahrzeuge in deiner Zivilistengarage.</p>
            </template>

            <template v-else>
              <ComboboxWithImage
                  tabindex="2"
                  class="mt-8"
                  label="Fahrzeug auswählen"
                  :items="playerVehicles.map((vehicle: Vehicle) => ({
          id: vehicle.id,
          name: vehicle.name + ' (' + vehicle.v_space.toLocaleString() + ' kg)',
        }))"
                  v-model="selectedVehicle"
              />
            </template>
          </div>
        </div>

        <hr class="my-8 border-gray-200">

        <TextInput
            v-model="backpackSize"
            label="Rucksackgröße"
            placeholder="Gib deine Rucksackgröße ein"
            description="Gib die Größe deines Z-Inventars ein."
            type="number"
            id="backpack-size-input"
        />
      </div>


      <template v-if="selectedMarketItem">

        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6" v-auto-animate>
          <h2 class="text-lg font-semibold text-panthor-red">Farmroute</h2>

          <Farmroute :product="farmroutes[selectedMarketItem.id]" class="mt-4"/>

          <template v-if="selectedVehicle  && selectedMarketItem">
            <template v-if="resultPrice === resultSize">
              <p>und nutze es dann zum craften oder verkaufe es an andere Spieler</p>
            </template>
            <template v-else>
              <p>und erhalte dafür <span class="text-panthor-red">{{ resultSize.toLocaleString() }}kg</span>
                {{ selectedMarketItem.name }} mit einem Gesamtwert von <span
                    class="text-panthor-red">{{ resultPrice.toLocaleString() }}€</span></p>
            </template>
          </template>
        </div>
      </template>
    </div>


  </div>
</template>