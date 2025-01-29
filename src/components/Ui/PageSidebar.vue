<template>
  <div :class="sidebarClasses">
    <div class="flex items-center justify-between px-4 h-16 lg:hidden border-b">
      <div class="rounded p-1.5">
        <img :src="logo" alt="Split Bill Logo" width="24" height="24" />
      </div>
      <span class="text-xl font-semibold">Split Bill</span>
      <button @click="$emit('toggle-sidebar')" class="focus:outline-none">
        <font-awesome-icon :icon="['fas', 'x']" />
      </button>
    </div>

    <div class="hidden lg:flex w-full h-20 border-b items-center px-4">
      <div class="rounded p-1.5">
        <img :src="logo" alt="Split Bill Logo" width="24" height="24" />
      </div>
      <span class="text-xl font-semibold">Split Bill</span>
    </div>

    <div class="my-4 px-4">
      <div
        class="w-full flex items-center text-gray-700 h-10 pl-4 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
        @click="toggleMenu('main')"
      >
        <span><font-awesome-icon :icon="['fas', 'house']" class="mr-2" />Dashboard</span>
        <svg
          :class="{ 'rotate-180': mainMenuOpen }"
          class="ml-auto h-4 w-4 transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <transition name="fade">
        <div v-if="mainMenuOpen" class="ml-8 mt-2 space-y-1">
          <router-link
            to="/dashboard"
            class="flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span><font-awesome-icon :icon="['fas', 'chart-line']" class="mr-2" />Home</span>
          </router-link>
          <router-link
            to="/history"
            class="flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span>
              <font-awesome-icon
                :icon="['fas', 'arrows-split-up-and-left']"
                class="mr-2"
              />History</span
            >
          </router-link>
          <router-link
            to="/friends"
            class="flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span><font-awesome-icon :icon="['fas', 'user-group']" class="mr-2" />Friends</span>
          </router-link>
        </div>
      </transition>
    </div>

    <div class="mb-4 px-4">
      <div
        class="w-full flex items-center text-gray-700 h-10 pl-4 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
        @click="toggleMenu('settings')"
      >
        <span><font-awesome-icon icon="gear" class="mr-2" />Settings</span>
        <svg
          :class="{ 'rotate-180': settingsMenuOpen }"
          class="ml-auto h-4 w-4 transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <transition name="fade">
        <div v-if="settingsMenuOpen" class="ml-8 mt-2 space-y-1">
          <router-link
            to="/profile"
            class="flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span><font-awesome-icon :icon="['fas', 'user']" class="mr-2" />Profile</span>
          </router-link>
          <router-link
            to="/change-password"
            class="flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span
              ><font-awesome-icon :icon="['fas', 'passport']" class="mr-2" />Change Password</span
            >
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '@/assets/icons/logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHouse,
  faChartLine,
  faArrowsSplitUpAndLeft,
  faUserGroup,
  faGear,
  faUser,
  faPassport,
  faX
} from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faChartLine, faArrowsSplitUpAndLeft, faUserGroup, faGear, faUser, faPassport, faX)

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    required: true,
  },
})

const mainMenuOpen = ref(false)
const settingsMenuOpen = ref(false)

const sidebarClasses = computed(() => [
  'fixed inset-y-0 left-0 transform bg-gray-100 border-r shadow-md z-50 transition-transform duration-300 lg:translate-x-0',
  { '-translate-x-full': !props.sidebarOpen, 'w-full lg:w-64': true },
])

const toggleMenu = (menu) => {
  if (menu === 'main') {
    mainMenuOpen.value = !mainMenuOpen.value
  } else if (menu === 'settings') {
    settingsMenuOpen.value = !settingsMenuOpen.value
  }
}
</script>
