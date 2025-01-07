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
            <h1 class="text-2xl font-semibold tracking-tight">Log in to your Account</h1>
            <p class="text-sm text-muted-foreground">Welcome back! Select method to log in:</p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <BaseButton
              variant="outline"
              class="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-lg transition-all hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <img :src="googleLogoSrc" alt="Google" width="20" height="20" />
              <span class="text-sm font-medium text-gray-800">Google</span>
            </BaseButton>

            <BaseButton
              variant="outline"
              class="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-lg transition-all hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              <img :src="facebookLogoSrc" alt="Facebook" width="20" height="20" />
              <span class="text-sm font-medium text-gray-800">Facebook</span>
            </BaseButton>
          </div>

          <div class="relative mb-4">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-xs uppercase text-gray-500">
              <span class="bg-white px-2">or continue with email</span>
            </div>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-4 w-full">
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

            <BaseButton type="submit" variant="primary"> Log In </BaseButton>
          </form>

          <p class="text-center text-sm text-muted-foreground mt-4">
            Don't have an account?
            <router-link to="/signup" class="text-blue-600 hover:text-blue-500">
              Create an account
            </router-link>
          </p>
        </div>
      </div>
    </template>

    <template #image>
      <div class="flex h-full flex-col items-center justify-center p-8 text-white">
        <div class="relative h-64 w-full max-w-md">
          <img
            :src="logoSrc"
            alt="Dashboard illustration"
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
const passwordVisible = ref(false)
const router = useRouter()

import googleLogo from '@/assets/icons/google.svg'
import facebookLogo from '@/assets/icons/facebook.svg'
import logo from '@/assets/icons/logo.svg'

const googleLogoSrc = ref(googleLogo)
const facebookLogoSrc = ref(facebookLogo)
const logoSrc = ref(logo)
const handleLogin = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  router.push('/dashboard')
}
</script>
