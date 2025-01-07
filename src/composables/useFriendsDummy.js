import { computed, ref } from 'vue'

export default function useFriends() {
  const friends = ref([
    { id: 1, name: 'Alex John', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Doe', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'John Smith', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Alice Brown', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Alice Brown', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Alice Brown', image: 'https://via.placeholder.com/150' },
  ])

  const visibleFriends = computed(() => friends.value.slice(0, 4))

  return { friends, visibleFriends }
}
