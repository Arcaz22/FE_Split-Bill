<template>
  <div class="space-y-1">
    <div
      v-for="bill in bills"
      :key="bill.id"
      class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div
        class="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md"
        @click="toggleDetails(bill.id)"
      >
        <div>
          <h2 class="text-xl font-semibold text-gray-800">{{ bill.name }}</h2>
          <p class="text-sm text-gray-500">{{ bill.date }}</p>
        </div>
        <div>
          <span
            class="text-gray-600 text-xl transition-transform"
            :class="{ 'rotate-180': isDetailOpen(bill.id) }"
          >
            <font-awesome-icon :icon="['fas', 'caret-down']" />
          </span>
        </div>
      </div>

      <div v-if="isDetailOpen(bill.id)" class="mt-4 p-4 bg-gray-50 rounded-md shadow-inner">
        <p class="text-gray-700 mb-2"><strong class="font-medium">Name:</strong> {{ bill.name }}</p>
        <p class="text-gray-700 mb-2">
          <strong class="font-medium">Category:</strong> {{ bill.category }}
        </p>
        <p class="text-gray-700 mb-2">
          <strong class="font-medium">Total Amount:</strong> Rp
          {{ bill.totalAmount }}
        </p>
        <p class="text-gray-700 mb-2">
          <strong class="font-medium">Description:</strong> {{ bill.description }}
        </p>

        <div class="flex items-center justify-between space-x-4">
          <div class="flex space-x-2">
            <span v-for="participant in bill.participants" :key="participant.id">
              <img
                :src="participant.avatar"
                alt="Participant Avatar"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
            </span>
          </div>

          <div class="flex space-x-4">
            <BaseButton
              variant="ghost"
              additionalClass="text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-md flex items-center"
              @click="goToUpdateBill(bill.id)"
            >
              <font-awesome-icon :icon="['fas', 'pen']" class="mr-2" /> Update
            </BaseButton>

            <BaseButton
              variant="ghost"
              additionalClass="text-red-600 hover:bg-gray-200 px-4 py-2 rounded-md flex items-center"
              @click="openDeleteModal(bill)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" class="mr-2" /> Delete
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <ConfirmDeleteModal
      v-if="deleteModalVisible"
      :isOpen="deleteModalVisible"
      :itemName="selectedBill?.name || ''"
      @cancel="closeDeleteModal"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import useHistoryDetails from '@/composables/useHistoryDetails'
import BaseButton from '@/components/Ui/BaseButton.vue'
import ConfirmDeleteModal from '@/components/Feature/ConfirmDeleteModal.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown, faTrash, faPen)

const props = defineProps({
  bills: {
    type: Array,
    required: true,
  },
})

const deleteModalVisible = ref(false)
const selectedBill = ref(null)

const router = useRouter()

const { toggleDetails, isDetailOpen } = useHistoryDetails()

const openDeleteModal = (bill) => {
  selectedBill.value = bill
  deleteModalVisible.value = true
}

const closeDeleteModal = () => {
  deleteModalVisible.value = false
  selectedBill.value = null
}

const confirmDelete = () => {
  props.bills.splice(
    props.bills.findIndex((bill) => bill.id === selectedBill.value.id),
    1,
  )
  closeDeleteModal()
}

const goToUpdateBill = (billId) => {
  router.push({ path: `/update-bill/${billId}` })
}
</script>
