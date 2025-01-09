import { computed, ref } from 'vue'
import logo from '@/assets/icons/logo.svg'

export default function useFriends() {
  const friends = ref([
    { id: 1, name: 'Alex John', image: logo },
    { id: 2, name: 'Jane Doe', image: logo },
    { id: 3, name: 'John Smith', image: logo },
  ])

  const visibleFriends = computed(() => friends.value.slice(0, 4))

  return { friends, visibleFriends }
}
