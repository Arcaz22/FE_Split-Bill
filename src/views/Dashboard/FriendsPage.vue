<template>
  <div class="p-3 bg-gray-50">
    <div class="flex justify-between items-center">
      <BaseButton variant="primary" class="ml-auto" :fullWidth="false">
        <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" @click="goToAddFriendPage" />
        Add Friend
      </BaseButton>
    </div>

    <div v-if="paginatedFriends.length === 0" class="text-center text-gray-500 p-10">
      <font-awesome-icon :icon="['fas', 'user-plus']" class="text-4xl text-gray-300" />
      <p class="text-lg font-medium">No friends added yet.</p>
      <p class="text-sm">Start by clicking the "Add Friend" button above.</p>
    </div>

    <div v-else>
      <ul class="space-y-1 p-6">
        <li
          v-for="(friend, index) in paginatedFriends"
          :key="index"
          class="bg-white flex justify-between items-center p-4 rounded-lg shadow-sm hover:bg-gray-200"
        >
          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg"
            >
              {{ friend.name.charAt(0) }}
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-700">{{ friend.name }}</h3>
              <p class="text-sm text-gray-500">{{ friend.email }}</p>
            </div>
          </div>

          <BaseButton
            variant="danger"
            :fullWidth="false"
            class="flex items-center space-x-2"
            @click="openDeleteModal(friend, index)"
          >
            <font-awesome-icon :icon="['fas', 'trash']" />
            <span>Remove</span>
          </BaseButton>
        </li>
      </ul>

      <!-- Pagination -->
      <div class="mt-6">
        <PaginationControl
          :currentPage="currentPage"
          :totalPages="totalPages"
          :nextPage="nextPage"
          :prevPage="prevPage"
        />
      </div>
    </div>
    <ConfirmDeleteModal
      v-if="deleteModalVisible"
      :isOpen="deleteModalVisible"
      :itemName="selectedFriend?.name || ''"
      @cancel="closeDeleteModal"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import PaginationControl from '@/components/Ui/PaginationControl.vue'
import ConfirmDeleteModal from '@/components/Feature/ConfirmDeleteModal.vue'
import { usePagination } from '@/composables/usePagination'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'vue-router'
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faUserPlus, faTrash)

const friends = ref([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
])

const router = useRouter()
const goToAddFriendPage = () => {
  router.push('/add-friend')
}

const deleteModalVisible = ref(false)
const selectedFriend = ref(null)
const selectedIndex = ref(null)
const itemsPerPage = ref(3)

const {
  currentPage,
  paginatedItems: paginatedFriends,
  totalPages,
  nextPage,
  prevPage,
} = usePagination(friends.value, itemsPerPage.value)

const openDeleteModal = (friend, index) => {
  selectedFriend.value = friend
  selectedIndex.value = index
  deleteModalVisible.value = true
}

const closeDeleteModal = () => {
  deleteModalVisible.value = false
  selectedFriend.value = null
  selectedIndex.value = null
}
const confirmDelete = () => {
  if (selectedIndex.value !== null) {
    friends.value.splice(selectedIndex.value, 1)
  }
  closeDeleteModal()
}
</script>
