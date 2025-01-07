import { ref } from 'vue'

export default function useBillForm() {
  const form = ref({
    title: '',
    date: '',
    amount: '',
  })

  const handleSubmit = () => {
    const newBill = { ...form.value, id: Date.now() }
    alert(`Bill Created: ${JSON.stringify(newBill)}`)
    form.value = { title: '', date: '', amount: '' }
  }

  const handleCancel = () => {
    form.value = { title: '', date: '', amount: '' }
    alert('Create bill canceled')
  }

  return { form, handleSubmit, handleCancel }
}
