import { ref, computed } from 'vue'

export default function useFriendsSearch(friendsList) {
  const searchQuery = ref('')

  const filteredFriends = computed(() => {
    if (!searchQuery.value) return friendsList
    return friendsList.filter(
      (friend) =>
        friend.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        friend.email.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  })

  return {
    searchQuery,
    filteredFriends,
  }
}
