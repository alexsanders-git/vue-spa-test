<script setup lang="ts">
import ReviewsStatistic from "@/components/reviews-statistic.vue";
</script>

<template>
  <main class="wrapper">
    <div class="container">
      <ReviewsStatistic/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  width: 100%;
  max-width: 1490px;
  margin: 0 auto;
  padding: 0 40px;

  @media only screen and (max-width: 576px) {
    padding: 0 16px;
  }
}
</style>
