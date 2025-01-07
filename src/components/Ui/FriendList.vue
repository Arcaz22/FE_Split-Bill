<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
    <div class="flex -space-x-2">
      <template v-for="friend in visibleFriends" :key="friend.id">
        <img
          :src="friend.image"
          :alt="friend.name"
          class="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100"
        />
      </template>
    </div>

    <div class="flex items-center space-x-1 text-gray-500">
      <span class="text-sm font-medium">{{ friends.length }} Friends</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import useFriends from '@/composables/useFriendsDummy'

const { friends, visibleFriends } = useFriends()
</script>
