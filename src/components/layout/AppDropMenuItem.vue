<template>
  <a href="#"
    class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
    <Icon aria-hidden="true"
      class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
      :name="iconName"></Icon>
    <div class="text-sm text-gray-900 dark:text-white">
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ iconName: string }>();
</script>