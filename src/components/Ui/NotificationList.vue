<template>
  <div class="p-4 bg-white border rounded-lg shadow-sm">
    <h3 class="text-lg font-bold text-gray-800 mb-3">Notifications</h3>
    <div class="space-y-2">
      <div
        v-for="notification in paginatedNotifications"
        :key="notification.id"
        class="flex justify-between items-start"
      >
        <div class="flex items-center">
          <img :src="notification.authorImage" alt="Author" class="w-8 h-8 rounded-full" />
          <p class="ml-3 text-gray-700 text-sm">
            <span class="font-bold">{{ notification.author }}</span>
          </p>
        </div>
        <p class="text-xs text-gray-500 whitespace-nowrap">{{ notification.time }}</p>
      </div>
    </div>

    <PaginationControl
      :currentPage="currentPage"
      :totalPages="totalPages"
      :nextPage="nextPage"
      :prevPage="prevPage"
    />
  </div>
</template>

<script setup>
import PaginationControl from '@/components/Ui/PaginationControl.vue'
import { usePagination } from '@/composables/usePagination'
import { useDummyNotifications } from '@/composables/useDummyData'

const notifications = useDummyNotifications()

const {
  currentPage,
  paginatedItems: paginatedNotifications,
  totalPages,
  nextPage,
  prevPage,
} = usePagination(notifications, 6)
</script>
