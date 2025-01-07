import { ref } from 'vue'

export default function useHistoryDetails() {
  const openDetails = ref([])

  const toggleDetails = (id) => {
    if (openDetails.value.includes(id)) {
      openDetails.value = openDetails.value.filter((detailId) => detailId !== id)
    } else {
      openDetails.value.push(id)
    }
  }

  const isDetailOpen = (id) => {
    return openDetails.value.includes(id)
  }

  return { openDetails, toggleDetails, isDetailOpen }
}
