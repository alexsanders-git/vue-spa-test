<script setup lang="ts">
interface IProps {
  text: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <button class="button">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 11px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
}
</style>