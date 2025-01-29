import logo from '@/assets/icons/logo.svg'

export function useDummyNotifications() {
  return [
    {
      id: 1,
      author: 'Alex John',
      authorImage: logo,
    },
    {
      id: 2,
      author: 'Jane Doe',
      authorImage: logo
    },
    {
      id: 3,
      author: 'John Smith',
      authorImage: logo
    },
    {
      id: 4,
      author: 'Alice Brown',
      authorImage: logo
    },
    {
      id: 5,
      author: 'Mark Wilson',
      authorImage: logo,
    }
  ]
}
