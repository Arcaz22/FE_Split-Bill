<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <!-- Kiri: Search Bar dan Hasil Pencarian -->
      <div class="flex flex-col space-y-6">
        <!-- Search Bar -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for friends..."
            class="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="filterUsers"
          />
          <font-awesome-icon
            icon="search"
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        <!-- Hasil Pencarian -->
        <div v-if="filteredUsers.length" class="bg-white p-4 rounded-md shadow-lg">
          <p class="text-lg font-medium mb-2">Search Results:</p>
          <ul>
            <li
            v-for="(user, index) in filteredUsers.slice(0, 10)"
            :key="user"
            class="flex items-center justify-between text-gray-700 hover:bg-gray-100 cursor-pointer p-2 rounded-lg transition duration-200"
            @click="addToSelectedUsers(user)"
            >
            <span>{{ user }}</span>
            <font-awesome-icon :icon="['fas', 'plus']" class="text-green-500" />
            </li>
          </ul>
        </div>
        <div v-else class="bg-white p-4 rounded-md shadow-lg">
          <p class="text-gray-500">No users found.</p>
        </div>
      </div>

      <!-- Kanan: Pengguna yang Dipilih untuk Ditambahkan -->
      <div class="bg-white p-4 rounded-md shadow-lg">
        <p class="text-lg font-medium mb-2">Selected Users:</p>
        <div v-if="selectedUsers.length" class="space-y-2">
          <div
            v-for="(user, index) in selectedUsers"
            :key="index"
            class="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            <span>{{ user }}</span>
            <button
              @click="removeFromSelectedUsers(user)"
              class="text-red-500 hover:text-red-700"
            >
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-500">No users selected.</p>
        </div>

        <!-- Tombol untuk menambah teman -->
        <button
          @click="sendRequest"
          :disabled="selectedUsers.length === 0"
          class="w-full mt-4 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200 disabled:bg-gray-300"
        >
          <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" />
          Add Friend(s)
        </button>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSearch, faPlus, faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons'

  library.add(faSearch, faPlus, faTimes, faUserPlus)

  const searchQuery = ref('')
  const users = ref(['Anya', 'Alice', 'Bob', 'Andrew', 'Ben', 'Diana', 'David', 'Anastasia', 'Charlie'])
  const filteredUsers = computed(() => {
    return users.value.filter((user) =>
      user.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })

  const selectedUsers = ref([])

  // Fungsi untuk menambahkan pengguna ke daftar yang dipilih
  const addToSelectedUsers = (user) => {
    if (!selectedUsers.value.includes(user)) {
      selectedUsers.value.push(user)
    }
  }

  // Fungsi untuk menghapus pengguna dari daftar yang dipilih
  const removeFromSelectedUsers = (user) => {
    selectedUsers.value = selectedUsers.value.filter((selectedUser) => selectedUser !== user)
  }

  // Fungsi untuk mengirim permintaan (simulasi)
  const sendRequest = () => {
    console.log('Sending friend request for:', selectedUsers.value)
    alert(`Sent friend request to: ${selectedUsers.value.join(', ')}`)
    selectedUsers.value = [] // Reset after sending request
  }
  </script>
