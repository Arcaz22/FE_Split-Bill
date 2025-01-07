import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/Auth/LoginPage.vue'
import RegisterPage from '@/views/Auth/RegisterPage.vue'
import DashboardPage from '@/views/Dashboard/DashboardPage.vue'
import LayoutDashboard from '@/components/Layout/LayoutDashboard.vue'
import ChangePassword from '@/views/Setting/ChangePasswordPage.vue'
import ChangeProfile from '@/views/Setting/ChangeProfilePage.vue'
import HistoryPage from '@/views/Dashboard/HistoryPage.vue'
import CreateBill from '@/components/Feature/CreateBillForm.vue'
import UpdateBill from '@/components/Feature/UpdateBillForm.vue'
import AddFriend from '@/components/Feature/AddFriendSearchModal.vue'
import FriendList from '@/views/Dashboard/FriendsPage.vue'
import ViewProfile from '@/views/Setting/ViewProfilePage.vue'
import EditProfile from '@/views/Setting/EditProfilePage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: RegisterPage,
  },
  {
    path: '/dashboard',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: DashboardPage,
      },
    ],
  },
  {
    path: '/change-password',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: ChangePassword,
      },
    ],
  },
  {
    path: '/profile',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: ViewProfile,
      },
    ],
  },
  {
    path: '/edit-profile',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: EditProfile,
      },
    ],
  },
  {
    path: '/history',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: HistoryPage,
      },
    ],
  },
  {
    path: '/create-bill',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: CreateBill,
      },
    ],
  },
  {
    path: '/update-bill',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: UpdateBill,
      },
    ],
  },
  {
    path: '/friends',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: FriendList,
      },
    ],
  },
  {
    path: '/add-friend',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        component: AddFriend,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*', // Rute untuk halaman 404
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
