<template>
  <div class="p-3 bg-gray-50">
    <div class="flex justify-between items-center mb-6">
      <BaseButton variant="primary" :fullWidth="false" class="ml-auto" @click="createNew">
        <font-awesome-icon :icon="['fas', 'arrows-split-up-and-left']" class="mr-2" />
        Create New
      </BaseButton>
    </div>

    <div v-if="bills.length === 0" class="text-center text-gray-500 p-10">
      <font-awesome-icon :icon="['fas', 'file-alt']" class="text-4xl text-gray-300 mb-4" />
      <p class="text-lg font-medium">No history found.</p>
      <p class="text-sm">Start by creating a new record by clicking the "Create New" button.</p>
    </div>

    <div v-else>
      <HistoryList :bills="paginatedItems" @update-bill="updateBill" @delete-bill="deleteBill" />
    </div>

    <div v-if="paginatedItems.length > 0" class="mt-6">
      <PaginationControl
        :currentPage="currentPage"
        :totalPages="totalPages"
        :nextPage="nextPage"
        :prevPage="prevPage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import HistoryList from '@/components/Feature/HistoryList.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import PaginationControl from '@/components/Ui/PaginationControl.vue'
import { useRouter } from 'vue-router'
import { usePagination } from '@/composables/usePagination'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsSplitUpAndLeft, faFileAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowsSplitUpAndLeft, faFileAlt)

const router = useRouter()

const bills = ref([
  {
    id: 1,
    name: 'Lunch Payment',
    date: '2025-01-01',
    category: 'Food',
    totalAmount: 120,
    description: 'Lunch with colleagues',
    participants: [
      { id: 1, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Dinner with Friends',
    date: '2025-01-02',
    category: 'Food',
    totalAmount: 200,
    description: 'Dinner at a restaurant',
    participants: [
      { id: 3, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Movie Night',
    date: '2025-01-03',
    category: 'Entertainment',
    totalAmount: 150,
    description: 'Movie ticket and snacks',
    participants: [
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { id: 6, avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    ],
  },
])

const itemsPerPage = ref(3)

const { currentPage, paginatedItems, totalPages, nextPage, prevPage, setItems } = usePagination(
  bills.value,
  itemsPerPage.value,
)

watch(bills, (newBills) => {
  setItems(newBills)
})

const createNew = () => {
  router.push('/create-bill')
}

const updateBill = (billId) => {
  alert(`Update bill with ID: ${billId}`)
}

const deleteBill = (billId) => {
  bills.value = bills.value.filter((b) => b.id !== billId)
}
</script>
