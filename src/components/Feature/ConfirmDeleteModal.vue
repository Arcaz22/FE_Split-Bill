<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-96 p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-4">Confirm Deletion</h3>
      <p class="text-gray-600 mb-6">
        Are you sure you want to delete <strong>{{ itemName }}</strong
        >? This action cannot be undone.
      </p>

      <div class="flex justify-end space-x-4">
        <BaseButton
          variant="ghost"
          additionalClass="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md"
          @click="cancelDelete"
        >
          Cancel
        </BaseButton>
        <BaseButton
          variant="danger"
          additionalClass="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md"
          @click="confirmDelete"
        >
          Delete
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import BaseButton from '@/components/Ui/BaseButton.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
})

// Emit event untuk komunikasi dengan parent
const emit = defineEmits(['cancel', 'confirm'])

// Fungsi untuk membatalkan penghapusan
const cancelDelete = () => {
  emit('cancel')
}

// Fungsi untuk mengonfirmasi penghapusan
const confirmDelete = () => {
  emit('confirm')
}
</script>
