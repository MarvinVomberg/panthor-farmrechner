<script setup lang="ts">
const inputValue = ref<string>('')

const emit = defineEmits(['update:modelValue'])
watch(inputValue, (value) => {
  emit('update:modelValue', value)
})

defineProps({
  placeholder: {
    type: String,
    default: 'Text hier eingeben'
  },
  label: {
    type: String,
    default: 'Bezeichnung'
  },
  description: {
    type: String,
    default: 'Beschreibungstext'
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: 'text-input'
  },
})

</script>

<template>
    <div>
      <label :for="id" class="block text-sm/6 font-medium text-gray-200">{{ label }}</label>
      <div class="mt-2">
        <input v-model="inputValue" :type="type" :name="id" :id="id" class="block w-full rounded-xl bg-gray-800/90 backdrop-blur-sm px-3 py-2 text-base text-gray-100 outline-none border border-gray-600/50 placeholder:text-gray-400 focus:border-panthor-red focus:ring-2 focus:ring-panthor-red/30 transition-all duration-200 sm:text-sm/6" :placeholder="placeholder" :aria-describedby="id + '-description'" />
      </div>
      <p class="mt-2 text-sm text-gray-400" :id="id + '-description'">{{ description }}</p>
    </div>
</template>

<style scoped>

</style>