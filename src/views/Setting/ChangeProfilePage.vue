<template>
  <div class="w-full p-6">
    <form @submit.prevent="handleUpdateProfile">
      <div class="flex flex-col items-center mb-6">
        <BaseLabel forId="profilePicture" text="Profile Picture" />
        <div class="relative">
          <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              v-if="profileImage"
              :src="profileImage"
              alt="Profile Picture"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium"
            >
              <span>{{ name.value ? name.value.charAt(0) : 'A' }}</span>
            </div>
          </div>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            class="absolute inset-0 opacity-0 cursor-pointer"
            @change="handleImageChange"
          />
        </div>
      </div>

      <div class="mb-4">
        <BaseLabel forId="name" text="Full Name" />
        <BaseInput
          id="name"
          type="text"
          placeholder="Enter your full name"
          v-model="name"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <BaseLabel forId="username" text="Username" />
        <BaseInput
          id="username"
          type="text"
          placeholder="Enter your username"
          v-model="username"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <BaseLabel forId="email" text="Email" />
        <BaseInput
          id="email"
          type="email"
          placeholder="Enter your email"
          v-model="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <BaseLabel forId="phoneNumber" text="Phone Number" />
        <BaseInput
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          v-model="phoneNumber"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p v-if="errorMessage" class="text-sm text-red-500 mb-4">
        {{ errorMessage }}
      </p>

      <BaseButton variant="primary" size="medium" additionalClass="w-full">
        Update Profile
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/Ui/BaseInput.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseLabel from '@/components/Ui/BaseLabel.vue'

const name = ref('')
const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const errorMessage = ref('')
const profileImage = ref(null)

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      profileImage.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

const handleUpdateProfile = () => {
  if (!name.value || !username.value || !email.value || !phoneNumber.value) {
    errorMessage.value = 'All fields are required!'
    return
  }

  console.log('Updating profile...')
  console.log('Name:', name.value)
  console.log('Username:', username.value)
  console.log('Email:', email.value)
  console.log('Phone Number:', phoneNumber.value)

  errorMessage.value = ''
  alert('Profile updated successfully!')
}
</script>
