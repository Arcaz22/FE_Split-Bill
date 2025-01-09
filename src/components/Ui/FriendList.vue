<template>
  <div class="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
    <div class="flex space-x-2">
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
    </div>
  </div>
</template>

<script setup>
import useFriends from '@/composables/useFriendsDummy'

const { friends, visibleFriends } = useFriends()
</script>
