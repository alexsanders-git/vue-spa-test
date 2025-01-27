<script setup lang="ts">
import Rating from "@/components/rating.vue";
import Button from "@/components/my-button.vue";

const redirectClick = () => {
  window.location.href = 'https://www.google.com';
};

const openModalClick = () => {
  console.log('Open');
};
</script>

<template>
  <div class="reviews-banner">
    <div class="wrapper">
      <div class="title">
        <img src="/google.svg" alt="Google Logo" class="logo"/>
        <span>Відгуки наших клієнтів у Google</span>
      </div>

      <Rating/>
    </div>

    <div class="buttons">
      <Button text="Переглянути" type="transparent" :onClick="redirectClick"/>
      <Button text="Написати" type="gradient" :onClick="openModalClick"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
  column-gap: 20px;
  padding: 30px;
  border-right: 8px;
  box-shadow: 0 4px 15px 0 #0000000D;

  @media only screen and (max-width: 768px) {
    align-items: initial;
    flex-direction: column;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  column-gap: 60px;
  row-gap: 10px;

  @media only screen and (max-width: 1366px) {
    column-gap: 50px;
  }

  @media only screen and (max-width: 1200px) {
    align-items: start;
    flex-direction: column;
  }
}

.title {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.buttons {
  display: flex;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }

  .button {
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>