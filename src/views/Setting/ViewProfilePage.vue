<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-center mb-6">
      <img
        :src="profileImage"
        alt="Profile Image"
        class="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
      />
    </div>

    <div class="text-center mb-6">
      <h1 class="text-2xl font-semibold mb-2">{{ name }}</h1>
      <p class="text-lg text-gray-600 mb-2">@{{ username }}</p>
      <p class="text-sm text-gray-500 mb-2">{{ email }}</p>
      <p class="text-sm text-gray-500">{{ phoneNumber }}</p>
    </div>

    <div class="text-center">
      <router-link
        to="/edit-profile"
        class="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Edit Profile
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profileImage = ref('https://via.placeholder.com/150')
const name = ref('John Doe')
const username = ref('john_doe')
const email = ref('johndoe@example.com')
const phoneNumber = ref('+1234567890')
</script>
