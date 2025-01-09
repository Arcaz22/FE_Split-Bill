<template>
  <div class="sticky top-0 z-40 bg-gray-100 shadow-md">
    <div class="w-full h-20 px-6 flex items-center justify-between bg-gray-100 border-b">
      <button
        @click="$emit('toggle-sidebar')"
        class="lg:hidden p-2 rounded-md focus:outline-none hover:bg-gray-200 transition duration-200"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

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
              href="/"
              @click="logout"
              class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg"
            >
              <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="mr-2" />
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '@/components/Ui/BreadcrumbNavigation.vue'

const { dropdownOpen, toggleDropdown } = useDropdown()
library.add(faBars, faRightFromBracket)
const userAvatar = ref('')
const userInitial = 'A'
const username = 'Username'

const logout = () => {
  console.log('Logging out...')
  // router.push('/login')
}
</script>
