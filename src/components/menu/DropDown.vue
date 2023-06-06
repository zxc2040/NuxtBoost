<template>
  <button type="button"
    class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    :aria-controls="linkid"
    :data-collapse-toggle="linkid">
    <Icon aria-hidden="true"
      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      :name="iconName"></Icon>
    <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ label }}</span>
    <Icon aria-hidden="true"
      class="w-6 h-6"
      name="mdi:chevron-down"></Icon>
  </button>
  <ul :id="linkid"
    class="hidden py-2 space-y-2">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
const linkid = nanoid();
const props = defineProps<{ iconName: string, label: string }>();
</script>