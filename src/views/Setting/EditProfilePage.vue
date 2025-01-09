<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-center mb-6">
      <img
        :src="profileImage"
        alt="Profile Image"
        class="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
      />
    </div>

    <div>
      <form @submit.prevent="updateProfile">
        <div class="mb-4">
          <BaseLabel forId="name" text="Full Name" />
          <BaseInput id="name" v-model="name" placeholder="Enter your full name" />
        </div>

        <div class="mb-4">
          <BaseLabel forId="username" text="Username" />
          <BaseInput id="username" v-model="username" placeholder="Enter your username" />
        </div>

        <div class="mb-4">
          <BaseLabel forId="email" text="Email" />
          <BaseInput id="email" v-model="email" placeholder="Enter your email" />
        </div>

        <div class="mb-6">
          <BaseLabel forId="phoneNumber" text="Phone Number" />
          <BaseInput id="phoneNumber" v-model="phoneNumber" placeholder="Enter your phone number" />
        </div>

        <div class="text-center">
          <BaseButton variant="primary" size="medium">Save Changes</BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseLabel from '@/components/Ui/BaseLabel.vue'
import BaseInput from '@/components/Ui/BaseInput.vue'

const profileImage = ref('https://via.placeholder.com/150')
const name = ref('John Doe')
const username = ref('john_doe')
const email = ref('johndoe@example.com')
const phoneNumber = ref('+1234567890')

const updateProfile = () => {
  console.log('Profile updated', {
    name: name.value,
    username: username.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  })
}
</script>

<style scoped>
/* Styling tambahan jika diperlukan */
</style>
