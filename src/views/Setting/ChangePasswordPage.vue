<template>
  <div class="w-full p-6 mt-10">
    <form @submit.prevent="handleChangePassword">
      <div class="mb-4">
        <BaseLabel forId="oldPassword" text="Old Password" />
        <BaseInput
          id="oldPassword"
          type="password"
          placeholder="Enter your old password"
          v-model="oldPassword"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div class="mb-4">
        <BaseLabel forId="newPassword" text="New Password" />
        <BaseInput
          id="newPassword"
          type="password"
          placeholder="Enter your new password"
          v-model="newPassword"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div class="mb-4">
        <BaseLabel forId="confirmNewPassword" text="Confirm New Password" />
        <BaseInput
          id="confirmNewPassword"
          type="password"
          placeholder="Confirm your new password"
          v-model="confirmNewPassword"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <p v-if="errorMessage" class="text-sm text-red-500 mb-4">
        {{ errorMessage }}
      </p>

      <BaseButton variant="primary" size="medium" additionalClass="w-full">
        Change Password
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/Ui/BaseInput.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseLabel from '@/components/Ui/BaseLabel.vue'

const oldPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const errorMessage = ref('')

const handleChangePassword = () => {
  if (newPassword.value !== confirmNewPassword.value) {
    errorMessage.value = "New password and confirmation don't match!"
    return
  }

  console.log('Changing password...')
  console.log('Old Password:', oldPassword.value)
  console.log('New Password:', newPassword.value)

  errorMessage.value = ''
  oldPassword.value = ''
  newPassword.value = ''
  confirmNewPassword.value = ''
  alert('Password changed successfully!')
}
</script>
