<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 my-0">
    <!-- Chart -->
    <div class="col-span-1 lg:col-span-3 space-y-6">
      <SplitBillChart />
    </div>

    <!-- Sidebar -->
    <div class="col-span-1 space-y-6">
      <!-- FriendList -->
      <FriendList />
      <!-- Notifications -->
      <Notifications />
    </div>
  </div>
</template>

<script setup>
import FriendList from '@/components/Ui/FriendList.vue'
import Notifications from '@/components/Ui/NotificationList.vue'
import SplitBillChart from '@/components/Ui/SplitBillAnalysis.vue'
</script>
