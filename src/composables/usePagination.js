import { ref, computed } from 'vue'

export function usePagination(items, itemsPerPage = 5) {
  const currentPage = ref(1)

  const paginatedItems = computed(() =>
    items.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage),
  )

  const totalPages = computed(() => Math.ceil(items.length / itemsPerPage))

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage,
    paginatedItems,
    totalPages,
    nextPage,
    prevPage,
  }
}
