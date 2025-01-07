<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <!-- Tombol untuk membuka modal pencarian teman -->
      <BaseButton variant="primary" class="ml-auto" :fullWidth="false" @click="openAddFriendModal"
        >Add Friend</BaseButton
      >
    </div>

    <!-- No Friends Added Yet -->
    <div v-if="friends.length === 0" class="text-gray-500">
      No friends added yet. Start by adding friends.
    </div>

    <!-- Friends List -->
    <ul v-else class="space-y-4">
      <li
        v-for="(friend, index) in friends"
        :key="index"
        class="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
      >
        <div>
          <h3 class="text-lg font-medium text-gray-700">{{ friend.name }}</h3>
          <p class="text-sm text-gray-500">{{ friend.email }}</p>
        </div>
        <!-- Remove Friend Button -->
        <BaseButton variant="danger" :fullWidth="false" @click="removeFriend(index)"
          >Remove</BaseButton
        >
      </li>
    </ul>

    <!-- Add Friend Modal -->
    <AddFriendSearchModal
      v-if="showAddFriendModal"
      @close="closeAddFriendModal"
      @addFriend="addFriend"
      :friendsList="friends"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import AddFriendSearchModal from '@/components/Feature/AddFriendSearchModal.vue'

// Daftar teman awal (gunakan API atau Vuex untuk data nyata)
const friends = ref([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
])

// State untuk modal
const showAddFriendModal = ref(false)

// Fungsi untuk membuka modal pencarian teman
const openAddFriendModal = () => {
  showAddFriendModal.value = true
}

// Fungsi untuk menutup modal
const closeAddFriendModal = () => {
  showAddFriendModal.value = false
}

// Fungsi untuk menambahkan teman
const addFriend = (newFriend) => {
  friends.value.push(newFriend)
}

// Fungsi untuk menghapus teman
const removeFriend = (index) => {
  friends.value.splice(index, 1)
}
</script>
