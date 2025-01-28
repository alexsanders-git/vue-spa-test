<script setup lang="ts">
import {ref, onMounted, computed} from "vue";
import axios from "axios";
import Rating from "@/components/rating.vue";
import Button from "@/components/my-button.vue";
import type {IReview} from "@/types.ts";

const reviews = ref<IReview[]>([]);

const averageRating = computed(() => {
  if (reviews.value.length === 0) return null;

  const totalRating = reviews.value.reduce((sum: number, review: IReview) => sum + review.rating, 0);

  return totalRating / reviews.value.length;
});

const reviewsCount = computed(() => reviews.value.length);

onMounted(async () => {
  try {
    const {data} = await axios.get<IReview[]>('https://6798a966be2191d708b06dbf.mockapi.io/reviews');

    reviews.value = data;
  } catch (e) {
    console.error(e)
  }
});

const redirectClick = () => {
  window.location.href = 'https://www.google.com';
};

const openModalClick = () => {
  alert('Open');
};
</script>

<template>
  <div class="reviews-banner">
    <div class="wrapper">
      <div class="title">
        <img src="/google.svg" alt="Google Logo" class="logo"/>
        <span>Відгуки наших клієнтів у Google</span>
      </div>

      <div v-if="averageRating === null" class="rating">Завантаження...</div>

      <Rating :rating="averageRating" :count="reviewsCount" v-else/>
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