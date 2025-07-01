<template>
  <Combobox as="div" v-model="selectedItem" @update:modelValue="query = ''">
    <ComboboxLabel class="block text-sm font-medium text-gray-300">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-2">
      <ComboboxInput
          class="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-panthor-red sm:text-sm/6"
          @change="query = $event.target.value" @blur="query = ''" :display-value="(item) => item?.name"/>
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
        <ChevronUpDownIcon class="size-5 text-gray-400" aria-hidden="true"/>
      </ComboboxButton>

      <ComboboxOptions v-if="filteredItems?.length"
                       @click.prevent
                       class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
        <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template"
                        v-slot="{ active, selected }">
          <li :class="['relative cursor-default py-2 pr-9 pl-3 select-none', active ? 'bg-panthor-red text-white outline-hidden' : 'text-gray-900']">
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
  imageUrl?: string
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