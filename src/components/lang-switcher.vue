<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {defaultLocale} from "@/i18n";

const {locale} = useI18n();

const savedLang = localStorage.getItem('lang') || defaultLocale;
const selectedLang = ref(savedLang);

const switchLang = () => {
  const newLang = selectedLang.value;

  locale.value = newLang;

  localStorage.setItem('lang', newLang);
  document.querySelector('html')?.setAttribute('lang', newLang);
}
</script>

<template>
  <select class="lang-select" v-model="selectedLang" @change="switchLang">
    <option value="en">EN</option>
    <option value="ua">UA</option>
  </select>
</template>

<style scoped lang="scss">
.lang-select {
  padding: 8px;
  background: #F8FCFC;
  border: 1px solid #BEE2E0;
  border-radius: 5px;
}
</style>