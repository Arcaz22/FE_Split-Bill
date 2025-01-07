<template>
  <div class="flex justify-center items-center h-full">
    <div class="p-6 rounded w-full">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <BaseLabel forId="title" text="Bill Title" />
          <BaseInput id="title" v-model="form.title" placeholder="Enter bill title" required />
        </div>

        <div class="mb-4">
          <BaseLabel forId="date" text="Bill Date" />
          <BaseInput id="date" type="date" v-model="form.date" required />
        </div>

        <div class="mb-4">
          <BaseLabel forId="amount" text="Bill Amount" />
          <BaseInput
            id="amount"
            type="number"
            v-model="form.amount"
            placeholder="Enter amount (Rp)"
            required
          />
        </div>

        <div class="flex justify-end space-x-4">
          <BaseButton variant="ghost" @click="handleCancel"> Cancel </BaseButton>
          <BaseButton type="submit" variant="primary"> Save Bill </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import useBillForm from '@/composables/useBillForm'
import BaseInput from '@/components/Ui/BaseInput.vue'
import BaseButton from '@/components/Ui/BaseButton.vue'
import BaseLabel from '@/components/Ui/BaseLabel.vue'

const { form, handleSubmit, handleCancel } = useBillForm()
</script>
