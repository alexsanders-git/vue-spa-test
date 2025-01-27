<script setup lang="ts">
interface IProps {
  text: string;
  type: 'transparent' | 'gradient';
  onClick: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <button :class="['button', props.type]" @click="props.onClick">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 11px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s ease-in-out;

  &.transparent {
    background: linear-gradient(90deg, #E6F7F5 0, #F8FCFC 50%, #E6F7F5 100%);
    background-size: 200%;
    border-color: #BEE2E0;

    &:hover {
      background-position: right;
    }
  }

  &.gradient {
    color: #fff;
    background: linear-gradient(90deg, #3CB9A0 0, #1786AC 50%, #3CB9A0 100%);
    background-size: 200%;

    &:hover {
      background-position: right;
    }
  }
}
</style>