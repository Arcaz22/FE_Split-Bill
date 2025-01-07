<template>
  <label :for="forId" class="block text-sm font-medium text-gray-700 mb-1">
    {{ text }}
  </label>
</template>

<script setup>
const props = defineProps({
  forId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>
