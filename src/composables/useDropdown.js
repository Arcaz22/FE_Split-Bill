import { ref } from 'vue'

export function useDropdown() {
  const dropdownOpen = ref(false)

  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }

  return { dropdownOpen, toggleDropdown }
}
