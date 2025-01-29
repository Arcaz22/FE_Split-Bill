import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default function useBreadcrumb() {
  const route = useRoute()

  const breadcrumb = computed(() => {
    const path = route.path
    const items = []

    if (path === '/dashboard') {
      items.push({ name: 'Dashboard' })
    } else if (path === '/history') {
      items.push({ name: 'Dashboard', link: '/dashboard' }, { name: 'History' })
    } else if (path === '/create-bill') {
      items.push(
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'History', link: '/history' },
        { name: 'Create Bill' },
      )
    } else if (path === '/update-bill') {
      items.push(
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'History', link: '/history' },
        { name: 'Update Profile' },
      )
    } else if (path === '/friends') {
      items.push({ name: 'Dashboard', link: '/dashboard' }, { name: 'Friends' })
    } else if (path === '/add-friend') {
      items.push(
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Friends', link: '/friends' },
        { name: 'Add Friend' },
      )
    } else if (path === '/profile') {
      items.push({ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' })
    } else if (path === '/edit-profile') {
      items.push(
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Profile', link: '/profile' },
        { name: 'Edit Profile' },
      )
    } else if (path === '/change-password') {
      items.push({ name: 'Dashboard', link: '/dashboard' }, { name: 'Change Password' })
    }

    return items
  })

  return { breadcrumb }
}
