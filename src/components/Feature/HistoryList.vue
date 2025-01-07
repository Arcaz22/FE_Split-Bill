<template>
  <div class="space-y-4">
    <div
      v-for="history in histories"
      :key="history.id"
      class="bg-white p-4 rounded shadow hover:shadow-lg"
    >
      <div
        class="flex justify-between items-center cursor-pointer"
        @click="toggleDetails(history.id)"
      >
        <div>
          <h2 class="text-lg font-medium text-gray-700">{{ history.title }}</h2>
          <p class="text-sm text-gray-500">{{ history.date }}</p>
        </div>
        <div>
          <span
            class="text-gray-600 text-xl transform transition-transform"
            :class="{ 'rotate-180': isDetailOpen(history.id) }"
          >
            ▼
          </span>
        </div>
      </div>

      <div v-if="isDetailOpen(history.id)" class="mt-4 p-4 bg-gray-50 rounded shadow-inner">
        <p class="text-gray-700"><strong>Title:</strong> {{ history.title }}</p>
        <p class="text-gray-700"><strong>Date:</strong> {{ history.date }}</p>
        <p class="text-gray-700"><strong>Amount:</strong> Rp {{ history.amount }}</p>
        <div class="flex space-x-4 mt-4">
          <BaseButton
            variant="ghost"
            additionalClass="text-gray-600 hover:bg-gray-100"
            @click="$emit('update-history', history.id)"
          >
            Update
          </BaseButton>
          <BaseButton
            variant="ghost"
            additionalClass="text-red-600 hover:bg-gray-100"
            @click="$emit('delete-history', history.id)"
          >
            Delete
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useHistoryDetails from '@/composables/useHistoryDetails'
import BaseButton from '@/components/Ui/BaseButton.vue'

const props = defineProps({
  histories: {
    type: Array,
    required: true,
  },
})

const { toggleDetails, isDetailOpen } = useHistoryDetails()
</script>
