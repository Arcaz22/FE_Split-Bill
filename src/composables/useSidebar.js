import { ref } from 'vue'

export default function useSidebar() {
  const sidebarOpen = ref(false)

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  return { sidebarOpen, toggleSidebar }
}
