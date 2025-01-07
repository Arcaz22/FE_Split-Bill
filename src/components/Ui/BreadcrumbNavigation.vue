<template>
  <div class="flex items-center text-sm text-gray-700">
    <router-link to="/dashboard" class="hover:text-blue-500">Home</router-link>

    <span v-if="breadcrumb.length > 0" class="mx-2">/</span>

    <span v-for="(item, index) in breadcrumb" :key="index">
      <router-link v-if="item.link" :to="item.link" class="hover:text-blue-500">{{
        item.name
      }}</router-link>
      <span v-else>{{ item.name }}</span>

      <span v-if="index < breadcrumb.length - 1" class="mx-2">/</span>
    </span>
  </div>
</template>

<script setup>
import useBreadcrumb from '@/composables/useBreadcrumb'

const { breadcrumb } = useBreadcrumb()
</script>
