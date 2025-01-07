<template>
  <AuthLayout>
    <template #form>
      <div class="w-full max-w-md space-y-8 px-4 sm:px-6">
        <div class="flex items-center gap-2">
          <div class="rounded p-1.5">
            <img :src="logo" alt="Split Bill Logo" width="24" height="24" />
          </div>
          <span class="text-xl font-semibold">Split Bill</span>
        </div>

        <div class="space-y-6">
          <div>
            <h1 class="text-2xl font-semibold tracking-tight">Create a New Account</h1>
            <p class="text-sm text-muted-foreground">Join us today and get started!</p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-4 w-full">
            <div class="space-y-2">
              <BaseInput
                v-model="email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div class="relative space-y-2">
              <BaseInput
                v-model="password"
                :type="passwordVisible ? 'text' : 'password'"
                placeholder="Password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div class="relative space-y-2">
              <BaseInput
                v-model="confirmPassword"
                :type="passwordVisible ? 'text' : 'password'"
                placeholder="Confirm Password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <BaseButton type="submit"> Sign Up </BaseButton>
          </form>

          <p class="text-center text-sm text-muted-foreground mt-4">
            Already have an account?
            <router-link to="/" class="text-blue-600 hover:text-blue-500"> Log In </router-link>
          </p>
        </div>
      </div>
    </template>

    <template #image>
      <div class="flex h-full flex-col items-center justify-center p-8 text-white">
        <div class="relative h-64 w-full max-w-md">
          <img
            :src="logoSrc"
            alt="Signup illustration"
            width="400"
            height="400"
            class="object-contain"
          />
        </div>
        <div class="mt-8 flex space-x-2">
          <div class="h-2 w-2 rounded-full bg-white"></div>
          <div class="h-2 w-2 rounded-full bg-blue-300"></div>
          <div class="h-2 w-2 rounded-full bg-blue-300"></div>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '@/components/Layout/LayoutAuth.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseInput from '@/components/Ui/BaseInput.vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const passwordVisible = ref(false)
const router = useRouter()

import logo from '@/assets/icons/logo.svg'

const logoSrc = ref(logo)

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    console.log('Passwords do not match')
    return
  }
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  router.push('/')
}
</script>
