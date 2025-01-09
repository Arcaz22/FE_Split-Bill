<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 my-3">
    <div class="col-span-1 lg:col-span-3 space-y-6">
      <SplitBillChart />
    </div>

    <div class="col-span-1 space-y-6">
      <FriendList />
      <Notifications />
    </div>
  </div>
</template>

<script setup>
import FriendList from '@/components/Ui/FriendList.vue'
import Notifications from '@/components/Ui/NotificationList.vue'
import SplitBillChart from '@/components/Ui/SplitBillAnalysis.vue'
</script>
