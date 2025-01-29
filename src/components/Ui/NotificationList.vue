<template>
    <div class="p-4 bg-white border rounded-lg shadow-sm">
      <h3 class="text-lg font-bold text-gray-800 mb-3">Friend Requests</h3>
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
          <div class="flex space-x-2">
            <button
              @click="acceptFriendRequest(notification)"
              class="bg-green-500 text-white p-2 rounded-md"
            >
              <font-awesome-icon :icon="['fas', 'check']" />
            </button>
            <button
              @click="rejectFriendRequest(notification)"
              class="bg-red-500 text-white p-2 rounded-md"
            >
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </div>
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

  import { ref } from 'vue'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

  library.add(faCheck, faTimes)

  const notifications = useDummyNotifications()

  const {
    currentPage,
    paginatedItems: paginatedNotifications,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination(notifications, 6)

  const friends = ref([])  // Untuk menyimpan teman yang diterima

  const acceptFriendRequest = (notification) => {
    // Tambahkan teman baru ke daftar teman
    friends.value.push(notification.author)
    // Hapus notifikasi yang sudah diterima
    removeNotification(notification.id)
  }

  const rejectFriendRequest = (notification) => {
    // Hapus notifikasi yang ditolak
    removeNotification(notification.id)
  }

  const removeNotification = (notificationId) => {
    // Hapus notifikasi berdasarkan ID
    const index = notifications.value.findIndex((notification) => notification.id === notificationId)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }
  </script>
