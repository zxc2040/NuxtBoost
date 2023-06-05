<template>
  <Icon :name="IconName"></Icon>
</template>

<script setup lang="ts">
const props = defineProps<{ icon: Array<String> }>();

const IconName = computed(() => {
  const [ _pack, _name ] = props.icon;

  if (_pack == 'mdi') {
    return `mdi:${_name}`;
  }

  return `${_pack}:${_name}`;
});
</script>