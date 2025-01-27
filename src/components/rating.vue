<script setup lang="ts">

</script>

<template>
  <div class="rating">
    <span class="score">4.9</span>

    <div class="stars">
      <span class="star" v-for="i in 5" :key="i">
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.1033 0.816983C13.4701 0.0737376 14.5299 0.0737399 14.8967 0.816985L18.1757 7.46093C18.3214 7.75607 18.6029 7.96064 18.9287 8.00797L26.2607 9.07338C27.0809 9.19256 27.4084 10.2005 26.8149 10.7791L21.5094 15.9507C21.2737 16.1804 21.1662 16.5114 21.2218 16.8358L22.4743 24.1382C22.6144 24.9551 21.7569 25.5781 21.0233 25.1924L14.4653 21.7446C14.174 21.5915 13.826 21.5915 13.5347 21.7446L6.9767 25.1924C6.24307 25.5781 5.38563 24.9551 5.52574 24.1382L6.7782 16.8358C6.83384 16.5114 6.72629 16.1804 6.49061 15.9507L1.1851 10.7791C0.591586 10.2005 0.919094 9.19256 1.73931 9.07338L9.07134 8.00797C9.39705 7.96064 9.67862 7.75607 9.82428 7.46093L13.1033 0.816983Z"
            fill="#FCC141"/>
      </svg>
      </span>
    </div>

    <span class="count">233 відгуки</span>
  </div>
</template>

<style scoped lang="scss">
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