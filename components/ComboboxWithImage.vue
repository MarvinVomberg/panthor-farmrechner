<template>
  <Combobox as="div" v-model="selectedItem" @update:modelValue="query = ''">
    <ComboboxLabel class="block text-sm font-medium text-gray-300">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-2">
      <ComboboxInput
          :tabindex="tabindex"
          class="block w-full rounded-xl bg-gray-800/90 backdrop-blur-sm py-2 pr-12 pl-3 text-base text-gray-100 outline-none border border-gray-600/50 placeholder:text-gray-400 focus:border-panthor-red focus:ring-2 focus:ring-panthor-red/30 transition-all duration-200 sm:text-sm/6"
          @change="query = $event.target.value" @blur="query = ''" :display-value="(item) => item?.name"/>
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-xl px-3 focus:outline-hidden hover:bg-gray-700/20 transition-colors duration-200">
        <ChevronUpDownIcon class="size-5 text-gray-400" aria-hidden="true"/>
      </ComboboxButton>

      <ComboboxOptions v-if="filteredItems?.length"
                       @click.prevent
                       class="absolute z-10 mt-2 max-h-56 w-full overflow-auto rounded-xl bg-gray-800/95 backdrop-blur-sm py-2 text-base shadow-2xl border border-gray-600/50 focus:outline-hidden sm:text-sm">
        <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template"
                        v-slot="{ active, selected }">
          <li :class="['relative cursor-default py-3 pr-9 pl-4 select-none rounded-lg mx-1 transition-all duration-150', active ? 'bg-panthor-red text-white shadow-md' : 'text-gray-200 hover:bg-gray-700/50']">
            <div class="flex items-center">
              <template v-if="item.imageUrl">
                <img :src="item.imageUrl" alt="" class="size-6 shrink-0 rounded-full"/>
              </template>
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ item.name }}
              </span>
            </div>

            <span v-if="selected"
                  :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-panthor-red']">
              <CheckIcon class="size-5" aria-hidden="true"/>
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import {Combobox, ComboboxButton, ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions,} from '@headlessui/vue'

export interface ComboboxItem {
  id: string | number,
  name: string,
  imageUrl?: string,
}

const props = defineProps({
  items: {
    type: Array as () => ComboboxItem[],
    default: [],
    required: true,
  },
  label: {
    type: String,
    default: 'Auswahl treffen',
  },
  tabindex: {
    type: String,
    default: "0",
  },
})
const query = ref('')
const selectedItem = ref<ComboboxItem | null>(null)

const emit = defineEmits(['update:modelValue'])
watch(selectedItem, (item: ComboboxItem | null) => {
  emit('update:modelValue', item)
})

const filteredItems = computed(() =>
    query.value === ''
        ? props.items
        : props.items.filter((item) => {
          return item.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)
</script>