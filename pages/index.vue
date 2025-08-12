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
import {HomeIcon, ShieldCheckIcon, TruckIcon, ChartBarIcon, CubeIcon} from '@heroicons/vue/20/solid';
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

const currentTabIndex = computed(() => {
  return tabs.value.findIndex(tab => tab.current);
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
  <div class="mx-auto w-full max-w-[100rem] grow mt-6 relative z-10">
    <!-- Three Panel Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-8 lg:px-12 xl:px-16">
      
      <!-- Left Panel: Vehicle Selection -->
      <div class="lg:col-span-3 order-first">
        <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-5 border border-gray-700/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <div class="mb-5">
            <h3 class="text-lg font-bold text-gray-200 mb-2">Fahrzeugauswahl</h3>
            <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
          </div>

          <!-- Tab Navigation -->
          <div class="mb-6">
            <div class="grid grid-cols-1 sm:hidden">
              <select @change="toggleTab(($event.target as HTMLSelectElement)?.value)" aria-label="Tab auswählen"
                      class="col-start-1 row-start-1 w-full appearance-none rounded-2xl bg-white/90 backdrop-blur-sm py-3 pr-8 pl-4 text-base text-gray-900 outline-none border border-gray-200 shadow-sm focus:border-panthor-red focus:ring-2 focus:ring-panthor-red/20 transition-all duration-200">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current" :value="tab.name">{{
                    tab.name
                  }}
                </option>
              </select>
              <ChevronDownIcon
                  class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end fill-gray-500"
                  aria-hidden="true"/>
            </div>
            <div class="hidden sm:block">
              <div class="relative border-b border-gray-600/40">
                <nav class="-mb-px flex" aria-label="Tabs">
                  <button v-for="tab in tabs" :key="tab.name" @click="toggleTab(tab.name)"
                          :class="[tab.current ? 'text-panthor-red' : 'text-gray-300 hover:text-gray-200', 'group relative inline-flex items-center px-6 py-3 text-sm font-semibold cursor-pointer transition-colors duration-200 flex-1 justify-center']"
                          :aria-current="tab.current ? 'page' : undefined">
                    <component :is="tab.icon"
                               :class="[tab.current ? 'text-panthor-red' : 'text-gray-300 group-hover:text-gray-200', 'mr-2 -ml-0.5 size-5 transition-colors duration-200']"
                               aria-hidden="true"/>
                    <span>{{ tab.name }}</span>
                  </button>
                </nav>
                <!-- Sliding indicator -->
                <div 
                  class="absolute bottom-0 h-0.5 bg-gradient-to-r from-panthor-red to-panthor-red-dark shadow-sm tab-indicator"
                  :style="{
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${currentTabIndex * 100}%)`
                  }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Tab Content -->
          <div class="space-y-4">
            <div v-show="selectedTab?.name === 'Shops'">
              <ComboboxWithImage
                  tabindex="1"
                  label="Shop auswählen"
                  :items="vehicleShopTypes.map((vehicleShopType: VehicleShopType) => ({
              id: vehicleShopType.shoptype,
              name: vehicleShopType.shopname
            }))"
                  v-model="selectedShopType"
              />

              <div class="mt-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/40">
                <p class="text-sm text-gray-300 leading-relaxed">
                  Wähle einen Shop aus, um die verfügbaren Fahrzeuge zu sehen.
                </p>
              </div>

              <template v-if="loadingShopTypes">
                <p class="mt-2 text-sm text-gray-300">Lade Shoptypen...</p>
              </template>

              <ComboboxWithImage
                  tabindex="2"
                  class="mt-6"
                  label="Fahrzeug auswählen"
                  :items="vehicles.map((vehicle: Vehicle) => ({
              id: vehicle.id,
              name: vehicle.name + ' (' + vehicle.v_space.toLocaleString() + ' kg)',
            }))"
                  v-model="selectedVehicle"
              />
              
              <div class="mt-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/40">
                <p class="text-sm text-gray-300 leading-relaxed">
                  Wähle ein Fahrzeug aus, um die Details zu sehen.
                </p>
              </div>

              <template v-if="loadingVehicles">
                <p class="mt-2 text-sm text-gray-300">Lade Fahrzeuge...</p>
              </template>

              <template v-if="selectedVehicle && fullSelectedVehicle">
                <div class="mt-6 bg-gradient-to-r from-panthor-red/20 to-red-900/30 backdrop-blur-sm rounded-2xl p-5 border border-panthor-red/30 shadow-sm">
                  <h3 class="text-sm font-bold text-panthor-red mb-3 flex items-center">
                    <TruckIcon class="mr-2 size-4" />
                    Fahrzeugdetails
                  </h3>
                  <div class="space-y-2">
                    <p class="text-sm text-gray-200 font-medium">{{ fullSelectedVehicle.name }}</p>
                    <p class="text-sm text-gray-300">
                      <span class="font-semibold">Kapazität:</span> {{ fullSelectedVehicle.v_space.toLocaleString() }} kg
                    </p>
                    <p class="text-sm text-gray-300">
                      <span class="font-semibold">Preis:</span> {{ fullSelectedVehicle.price.toLocaleString() }} €
                    </p>
                  </div>
                </div>
              </template>
            </div>
            
            <div v-show="selectedTab?.name === 'Garage'">
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
                          class="mt-6 inline-flex items-center gap-x-2 rounded-2xl bg-gradient-to-r from-panthor-red to-panthor-red-dark px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panthor-red transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ShieldCheckIcon class="-ml-0.5 size-5" aria-hidden="true"/>
                    Fahrzeuge laden
                  </button>

                  <template v-if="playerAPITokenError">
                    <p class="mt-4 text-sm text-red-400 leading-tight bg-red-900/20 rounded-xl p-3 border border-red-600/30">{{ playerAPITokenError }}</p>
                  </template>
                </template>

                <template v-else-if="playerVehicles.length === 0">
                  <p class="mt-4 text-sm text-red-400 leading-tight bg-red-900/20 rounded-xl p-3 border border-red-600/30">Du hast keine Fahrzeuge in deiner Zivilistengarage.</p>
                </template>

                <template v-else>
                  <ComboboxWithImage
                      tabindex="2"
                      class="mt-6"
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

            <div class="border-t border-gray-600/30 pt-6">
              <TextInput
                  v-model="backpackSize"
                  label="Rucksackgröße"
                  placeholder="Gib deine Rucksackgröße ein"
                  description="Gib die Größe deines Z-Inventars ein."
                  type="number"
                  id="backpack-size-input"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Center Panel: Farmroute Results -->
      <div class="lg:col-span-6 order-none">
        <template v-if="selectedMarketItem">
          <div class="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-300" v-auto-animate>
            <!-- Header Section -->
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-200 flex items-center mb-2">
                <ChartBarIcon class="mr-3 size-6 text-panthor-red" />
                Farmroute für {{ selectedMarketItem.name }}
              </h2>
              <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full mb-2"></div>
              <p class="text-sm text-gray-300">Schritt-für-Schritt Anleitung zur Produktion</p>
            </div>

            <!-- Production Steps -->
            <Farmroute :product="farmroutes[selectedMarketItem.id]" class="mb-8"/>

            <!-- Results Section -->
            <template v-if="selectedVehicle && selectedMarketItem">
              <div class="bg-gradient-to-r from-gray-800/40 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 shadow-sm">
                <h3 class="text-lg font-bold text-gray-200 mb-4 flex items-center">
                  <CubeIcon class="mr-2 size-5 text-panthor-red" />
                  Erwartetes Ergebnis
                </h3>
                
                <template v-if="resultPrice === resultSize">
                  <p class="text-gray-300 leading-relaxed">
                    Nutze das produzierte Material zum Craften oder verkaufe es an andere Spieler.
                  </p>
                </template>
                <template v-else>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between bg-gray-800/50 rounded-xl p-4">
                      <span class="text-gray-300">Produzierte Menge:</span>
                      <span class="text-xl font-bold text-panthor-red">{{ resultSize.toLocaleString() }}kg</span>
                    </div>
                    <div class="flex items-center justify-between bg-gray-800/50 rounded-xl p-4">
                      <span class="text-gray-300">Geschätzter Gesamtwert:</span>
                      <span class="text-xl font-bold text-panthor-red">{{ resultPrice.toLocaleString() }}€</span>
                    </div>
                    <p class="text-sm text-gray-400 text-center pt-2">
                      Basierend auf aktuellem Marktpreis für {{ selectedMarketItem.name }}
                    </p>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </template>
        
        <template v-else>
          <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 shadow-2xl">
            <div class="text-center">
              <ChartBarIcon class="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 class="text-lg font-semibold text-gray-300 mb-2">Wähle ein Marktitem</h3>
              <p class="text-gray-400">Beginne mit der Auswahl eines Marktitems, um die Farmroute und Erträge zu sehen.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- Right Panel: Market Selection -->
      <div class="lg:col-span-3 order-last">
        <div class="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <div class="mb-6">
            <h3 class="text-lg font-bold text-gray-200 mb-2">Marktauswahl</h3>
            <div class="h-0.5 bg-gradient-to-r from-panthor-red to-transparent rounded-full"></div>
          </div>

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

          <div class="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-600/40 mt-4">
            <p class="text-sm text-gray-300 leading-relaxed">
              Wähle ein Marktitem aus, um die Erträge und Kosten zu berechnen.
            </p>
          </div>

          <div v-auto-animate>
            <template v-if="marketHistoryData.length">
              <div class="chart-wrapper mt-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-600/50">
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
      </div>
    </div>
  </div>
</template>