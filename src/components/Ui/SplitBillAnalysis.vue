<template>
  <div class="p-4 bg-white border rounded-lg shadow-sm">
    <h3 class="text-lg font-bold text-gray-800 mb-4 text-center md:text-left">
      Split Bill Analysis
    </h3>
    <BarChart class="w-full h-60 md:h-96" />
  </div>
</template>

<script setup>
import { defineChartComponent } from 'vue-chart-3'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  BarController,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BarController)

// Define the BarChart component
const BarChart = defineChartComponent('bar-chart')

// Chart data
const chartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Food Expenses',
      data: [100, 150, 200, 180, 220, 300, 250],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Travel Expenses',
      data: [80, 120, 150, 200, 170, 250, 190],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
}

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly Split Bill Expenses',
    },
  },
}
</script>
