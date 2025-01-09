<template>
  <div class="flex justify-center items-center h-full">
    <div class="p-6 rounded w-full max-w-lg">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <BaseLabel forId="billName" text="Bill's Name" />
          <BaseInput
            id="billName"
            v-model="form.billName"
            placeholder="Enter bill's name"
            required
          />
        </div>

        <div class="mb-4">
          <BaseLabel forId="category" text="Category" />
          <select id="category" v-model="form.category" class="w-full p-2 border rounded" required>
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        <div class="mb-4">
          <BaseLabel forId="date" text="Date" />
          <BaseInput id="date" type="date" v-model="form.date" required />
        </div>

        <div class="mb-4">
          <BaseLabel forId="totalAmount" text="Total Amount" />
          <BaseInput
            id="totalAmount"
            type="number"
            v-model="form.totalAmount"
            placeholder="Total amount (Rp)"
            readonly
          />
        </div>

        <div class="mb-4">
          <BaseLabel forId="description" text="Description" />
          <textarea
            id="description"
            v-model="form.description"
            placeholder="Enter a brief description of the bill"
            class="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div class="mb-4">
          <BaseLabel forId="participants" text="Participants" />
          <div class="flex space-x-2 items-center">
            <div
              v-for="(participant, index) in form.participants"
              :key="index"
              class="flex items-center"
            >
              <div
                class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
              >
                {{ participant.name[0] }}
              </div>
              <span class="ml-2">{{ participant.name }}</span>
            </div>
            <button
              type="button"
              @click="openAddFriendModal"
              class="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center"
            >
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <BaseButton variant="ghost" @click="handleCancel"> Cancel </BaseButton>
          <BaseButton type="submit" variant="primary"> Save Bill </BaseButton>
        </div>
      </form>
    </div>
  </div>

  <AddFriendModal
    v-if="showAddFriendModal"
    :friendsList="friendsList"
    @close="closeAddFriendModal"
    @addFriend="addParticipantFromModal"
  />
</template>

<script setup>
import { ref } from 'vue'
import useBillForm from '@/composables/useBillForm'
import BaseInput from '@/components/Ui/BaseInput.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseLabel from '@/components/Ui/BaseLabel.vue'
import AddFriendModal from '@/components/Feature/AddFriendSearchModal.vue'
const { form, handleSubmit, handleCancel } = useBillForm()

// Modal visibility state
const showAddFriendModal = ref(false)

// List of friends (can be fetched or provided as props)
const friendsList = ref([
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
  // Add more friends here
])

const openAddFriendModal = () => {
  showAddFriendModal.value = true
}

const closeAddFriendModal = () => {
  showAddFriendModal.value = false
}

const addParticipantFromModal = (friend) => {
  form.participants.push(friend)
  closeAddFriendModal()
}
</script>
