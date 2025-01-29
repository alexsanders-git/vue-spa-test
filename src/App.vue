<script setup lang="ts">
import {provide, ref} from "vue";
import LangSwitcher from "@/components/lang-switcher.vue";
import ReviewsStatistic from "@/components/reviews-statistic.vue";
import ModalForm from "@/components/modal-form.vue";

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

provide('modalActions', {
  openModal,
  closeModal
});
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="wrapper">
        <LangSwitcher/>
        <ReviewsStatistic/>
        <ModalForm v-show="showModal"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.lang-select {
  position: absolute;
  top: -100px;
  right: 0;
}
</style>
