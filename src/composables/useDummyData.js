import logo from '@/assets/icons/logo.svg'

export function useDummyNotifications() {
  return [
    {
      id: 1,
      author: 'Alex John',
      authorImage: logo,
      time: '2 menit yang lalu',
    },
    {
      id: 2,
      author: 'Jane Doe',
      authorImage: logo,
      time: '5 jam yang lalu',
    },
    {
      id: 3,
      author: 'John Smith',
      authorImage: logo,
      time: '1 hari yang lalu',
    },
    {
      id: 4,
      author: 'Alice Brown',
      authorImage: logo,
      time: '3 hari yang lalu',
    },
    {
      id: 5,
      author: 'Mark Wilson',
      authorImage: logo,
      time: '1 minggu yang lalu',
    },
    {
      id: 6,
      author: 'Chris Johnson',
      authorImage: logo,
      time: '2 minggu yang lalu',
    },
  ]
}
