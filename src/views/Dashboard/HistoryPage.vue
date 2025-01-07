<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <BaseButton variant="primary" :fullWidth="false" class="ml-auto" @click="createNew"
        >Create New</BaseButton
      >
    </div>
    <HistoryList
      :histories="histories"
      @update-history="updateHistory"
      @delete-history="deleteHistory"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HistoryList from '@/components/Feature/HistoryList.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'

// Daftar data history
const histories = ref([
  { id: 1, title: 'Lunch Payment', date: '2025-01-01', amount: 120 },
  { id: 2, title: 'Dinner with Friends', date: '2025-01-02', amount: 200 },
])

// Fungsi untuk membuat data baru
const createNew = () => {
  alert('Redirect to Create Page')
}

// Fungsi untuk mengupdate data
const updateHistory = (historyId) => {
  alert(`Update history with ID: ${historyId}`)
}

// Fungsi untuk menghapus data
const deleteHistory = (historyId) => {
  histories.value = histories.value.filter((h) => h.id !== historyId)
}
</script>
