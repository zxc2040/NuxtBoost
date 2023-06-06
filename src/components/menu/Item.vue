<template>
  <a href="#"
    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <Icon aria-hidden="true"
      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      :name="iconName"></Icon>
    <span :class="{ 'flex-1 ml-3 whitespace-nowrap': badge, 'ml-3': !badge }">
      <slot></slot>
    </span>
    <span v-if="badge"
      class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
      {{ badge }}
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ iconName: string, badge?: string }>();
</script>