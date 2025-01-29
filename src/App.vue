<script setup lang="ts">
import LangSwitcher from "@/components/lang-switcher.vue";
import ReviewsStatistic from "@/components/reviews-statistic.vue";
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="wrapper">
        <LangSwitcher/>
        <ReviewsStatistic/>
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
