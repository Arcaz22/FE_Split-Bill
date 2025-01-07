<template>
  <div class="sticky top-0 z-40 bg-gray-100 shadow-md">
    <div class="w-full h-20 px-6 flex items-center justify-between bg-gray-100 border-b">
      <div class="lg:hidden flex items-center p-2">
        <button @click="toggleSidebar" class="text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center">
        <Breadcrumb />
      </div>

      <div class="flex items-center space-x-4">
        <span class="text-gray-700 text-sm font-medium hidden md:inline">{{ username }}</span>
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="flex items-center space-x-3 hover:text-blue-500 focus:outline-none transition duration-200 ease-in-out"
          >
            <div
              class="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center text-lg font-semibold"
            >
              <img
                v-if="userAvatar"
                :src="userAvatar"
                alt="User Avatar"
                class="w-full h-full rounded-full object-cover"
              />
              <span v-else>{{ userInitial }}</span>
            </div>
          </button>
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border"
          >
            <a
              href="#"
              @click="logout"
              class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg"
            >
              <svg
                class="h-5 w-5 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a7 7 0 017 7v4a7 7 0 01-7 7H3a7 7 0 017-7V10a7 7 0 017-7z" />
              </svg>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDropdown } from '@/composables/useDropdown'
import { DEFAULT_USER_INITIAL, DEFAULT_USER_AVATAR } from '@/utils/constants'
import Breadcrumb from '@/components/Ui/BreadcrumbNavigation.vue'

const { dropdownOpen, toggleDropdown } = useDropdown()

const userAvatar = ref(DEFAULT_USER_AVATAR)
const userInitial = DEFAULT_USER_INITIAL
const username = 'Username'

const logout = () => {
  console.log('Logging out...')
  // router.push('/login')
}
</script>
