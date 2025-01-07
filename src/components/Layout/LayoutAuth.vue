<template>
  <div class="flex min-h-screen">
    <div class="flex w-full items-center justify-center lg:w-1/2">
      <slot name="form" />
    </div>

    <div class="hidden bg-blue-600 lg:block lg:w-1/2">
      <slot name="image" />
    </div>
  </div>
</template>
