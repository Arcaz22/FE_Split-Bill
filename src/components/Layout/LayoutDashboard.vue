<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-gray-50">
    <BaseSidebar :sidebar-open="isDesktop || sidebarOpen" @toggle-sidebar="toggleSidebar" />

    <div :class="['flex flex-col flex-1 bg-gray-50', { 'lg:pl-64': isDesktop }]">
      <!-- Navbar -->
      <BaseNavbar @toggle-sidebar="toggleSidebar" />

      <div class="flex-1 p-6">
        <router-view />
      </div>

      <BaseFooter class="mt-auto" />
    </div>

    <div
      v-if="sidebarOpen && !isDesktop"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>
  </div>
</template>

<script setup>
import BaseSidebar from '@/components/Ui/PageSidebar.vue'
import BaseNavbar from '@/components/Ui/PageNavbar.vue'
import BaseFooter from '@/components/Ui/PageFooter.vue'
import { useResponsive } from '@/composables/useResponsive'
import useSidebar from '@/composables/useSidebar'

const { isDesktop } = useResponsive()
const { sidebarOpen, toggleSidebar } = useSidebar()
</script>
