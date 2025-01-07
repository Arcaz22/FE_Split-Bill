<template>
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  additionalClass: String,
  size: {
    type: String,
    default: 'medium',
  },
  fullWidth: {
    type: Boolean,
    default: true,
  },
})

const buttonClass = computed(() => {
  return `${props.additionalClass}
        ${
          props.variant === 'outline'
            ? 'border-2 border-gray-500 bg-transparent text-gray-700'
            : props.variant === 'ghost'
              ? 'bg-transparent hover:bg-transparent text-gray-500'
              : props.variant === 'primary'
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-gray-500 text-white hover:bg-gray-400'
        }
        ${props.size === 'icon' ? 'p-0 w-10 h-10' : 'py-2 px-4'}
        ${props.size === 'icon' ? 'rounded-full' : 'rounded-lg'}
        ${props.fullWidth ? 'w-full' : ''}`
})
</script>
