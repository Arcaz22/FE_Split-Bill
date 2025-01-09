<template>
  <div class="fixed inset-0 z-10 bg-gray-500 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <div class="flex justify-between items-center mb-4">
        <BaseButton variant="ghost" @click="closeModal" class="ml-auto flex justify-end">
          <font-awesome-icon :icon="['fas', 'x']" />
        </BaseButton>
      </div>

      <input
        v-model="searchQuery"
        type="text"
        class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by name or email"
      />

      <div v-if="filteredFriends.length > 0" class="space-y-4">
        <div
          v-for="(friend, index) in filteredFriends"
          :key="index"
          class="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-700">{{ friend.name }}</h3>
            <p class="text-sm text-gray-500">{{ friend.email }}</p>
          </div>
          <BaseButton variant="primary" :fullWidth="false" @click="addSelectedFriend(friend)">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </BaseButton>
        </div>
      </div>

      <div v-else class="text-gray-500">No friends found.</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons'
import BaseButton from '@/components/Ui/BaseButton.vue'
import useFriendsSearch from '@/composables/useFriendsSearch'

library.add(faX, faPlus)

const props = defineProps({
  friendsList: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['close', 'addFriend'])

const { searchQuery, filteredFriends } = useFriendsSearch(props.friendsList)

const closeModal = () => {
  emit('close')
}

const addSelectedFriend = (friend) => {
  emit('addFriend', friend)
  closeModal()
}
</script>
