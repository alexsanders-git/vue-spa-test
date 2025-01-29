<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios from "axios";
import type {IReview} from "@/types.ts";

const reviews = ref<IReview[]>([]);

const reviewsCount = computed(() => reviews.value.length);

const averageRating = computed(() => {
  if (reviews.value.length === 0) return 0;

  const totalRating = reviews.value.reduce((sum: number, review: IReview) => sum + review.rating, 0);

  return totalRating / reviews.value.length;
});

const roundedRating = computed(() => {
  return Math.round(averageRating.value * 2) / 2;
});

onMounted(async () => {
  try {
    const {data} = await axios.get<IReview[]>('https://6798a966be2191d708b06dbf.mockapi.io/reviews');

    reviews.value = data;
  } catch (e) {
    console.error(e)
  }
});

const stars = computed(() => {
  const starIcons = [];
  for (let i = 1; i <= 5; i++) {
    if (roundedRating.value >= i) {
      starIcons.push('filled');
    } else if (roundedRating.value >= i - 0.5) {
      starIcons.push('half');
    } else {
      starIcons.push('empty');
    }
  }
  return starIcons;
});
</script>

<template>
  <div v-if="averageRating === 0" class="rating-loader"></div>

  <div class="rating" v-else>
    <span class="score">{{ averageRating }}</span>

    <div class="stars">
         <span class="star" v-for="(star, index) in stars" :key="index">
          <svg v-if="star === 'filled'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <svg v-if="star === 'half'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
                d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
          </svg>

          <svg v-if="star === 'empty'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
          </svg>
        </span>
    </div>

    <span class="count">{{ $t("reviews", reviewsCount) }}</span>
  </div>
</template>

<style scoped lang="scss">
.rating-loader {
  position: relative;
  width: 328px;
  height: 45px;
  padding: 5px;
  background-color: #eee;
  border-right: 15px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 100%;
    box-shadow: 0 0 80px 20px #fff;
    animation: skeletonSlide 0.6s infinite ease-in-out;
  }

  @media only screen and (max-width: 1200px) {
    width: 310px;
    height: 30px;
  }

  @media only screen and (max-width: 425px) {
    height: 50px;
  }
}

.rating {
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media only screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
}

.score {
  font-size: 36px;
  font-weight: 500;
  line-height: 1.25;

  @media only screen and (max-width: 1200px) {
    font-size: 24px;
  }
}

.stars {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.star {
  display: flex;
  fill: #FCC141;

  svg {
    width: 30px;
    height: 30px;
  }
}

.count {
  font-size: 14px;
  line-height: 1.5;
  color: #798595;
}
</style>