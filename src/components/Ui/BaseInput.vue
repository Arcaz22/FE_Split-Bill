<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="input w-full px-4 py-2 border border-gray-300 rounded-lg"
    v-bind="$attrs"
  />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
