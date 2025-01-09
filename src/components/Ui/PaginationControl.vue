<template>
  <div class="flex justify-between items-center mt-4">
    <p class="text-sm text-gray-500">Page {{ currentPage }} of {{ totalPages }}</p>

    <div class="flex space-x-2">
      <button
        @click="prevPage"
        class="text-sm text-blue-500 hover:underline disabled:text-gray-400"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        class="text-sm text-blue-500 hover:underline disabled:text-gray-400"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number,
  nextPage: Function,
  prevPage: Function,
})
</script>
