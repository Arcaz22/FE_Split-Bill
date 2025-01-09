<template>
    <div class="p-4 bg-white border rounded-lg shadow-sm">
      <h3 class="text-lg font-bold text-gray-800 mb-4 text-center">
        Expenses Distribution
      </h3>
      <div class="w-full h-72 md:h-80 lg:h-96">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { Chart, registerables } from 'chart.js'

  // Registrasi semua elemen Chart.js
  Chart.register(...registerables)

  // Refs untuk elemen canvas dan chart instance
  const chartCanvas = ref(null)
  let chartInstance = null

  // Data dummy untuk pie chart
  const chartData = {
    labels: ['Food', 'Entertainment', 'Travel', 'Others'],
    datasets: [
      {
        data: [40, 25, 20, 15], // Persentase pengeluaran
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Food
          'rgba(153, 102, 255, 0.6)', // Entertainment
          'rgba(255, 159, 64, 0.6)', // Travel
          'rgba(201, 203, 207, 0.6)' // Others
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  // Konfigurasi chart
  const chartConfig = {
    type: 'pie',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    }
  }

  // Lifecycle hooks
  onMounted(() => {
    if (chartCanvas.value) {
      // Buat instance chart
      chartInstance = new Chart(chartCanvas.value, chartConfig)
    }
  })

  onBeforeUnmount(() => {
    if (chartInstance) {
      // Hapus chart instance sebelum komponen di-unmount
      chartInstance.destroy()
    }
  })
  </script>

  <style scoped>
  /* Pastikan canvas memenuhi area */
  .relative {
    position: relative;
    height: 100%;
    width: 100%;
  }
  </style>
