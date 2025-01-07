<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-red-600">404</h1>
      <p class="mt-4 text-xl text-gray-700">Page Not Found</p>
      <router-link
        to="/dashboard"
        class="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go back to Home
      </router-link>
    </div>
  </div>
</template>
