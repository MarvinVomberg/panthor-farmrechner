<script setup lang="ts">
const inputValue = ref<string>('')

const emit = defineEmits(['update:modelValue'])
watch(inputValue, (value) => {
  emit('update:modelValue', value)
})

defineProps({
  placeholder: {
    type: String,
    default: 'Enter text here'
  },
  label: {
    type: String,
    default: 'Label'
  },
  description: {
    type: String,
    default: 'Description text'
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
      <label :for="id" class="block text-sm/6 font-medium text-gray-100">{{ label }}</label>
      <div class="mt-2">
        <input v-model="inputValue" :type="type" :name="id" id="email" class="block w-full rounded-md bg-white/80 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-panthor-red sm:text-sm/6" :placeholder="placeholder" :aria-describedby="id + '-description'" />
      </div>
      <p class="mt-2 text-sm text-gray-500" :id="id + '-description'">{{ description }}</p>
    </div>
</template>

<style scoped>

</style>