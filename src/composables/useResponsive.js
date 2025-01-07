import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const isDesktop = ref(window.innerWidth >= 1024)

  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 1024
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isDesktop }
}
