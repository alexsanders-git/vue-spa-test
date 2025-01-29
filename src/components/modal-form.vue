<script setup lang="ts">
import {inject, ref} from "vue";
import axios from "axios";
import Button from "@/components/my-button.vue";
import type {IReview} from "@/types.ts";

const {closeModal} = inject('modalActions')

const loading = ref(false)

const formData = ref<IReview>({
  name: '',
  text: '',
  rating: 1,
});

const sendReview = async (data: IReview) => {
  try {
    loading.value = true;

    const response = await axios.post('https://6798a966be2191d708b06dbf.mockapi.io/reviews', data);

    console.log(response);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

const handleSubmit = () => {
  sendReview(formData.value);
  formData.value = {name: '', text: '', rating: 1};
};
</script>

<template>
  <div class="modal" @click="closeModal">
    <div class="content" @click.stop>
      <form :class="['form', { loading }]" @submit.prevent="handleSubmit">
        <div class="input-control">
          <label for="name">{{ $t('form.name') }}</label>
          <input type="text" id="name" v-model="formData.name" required/>
        </div>

        <div class="input-control">
          <label for="text">{{ $t('form.text') }}</label>
          <textarea id="text" v-model="formData.text" required></textarea>
        </div>

        <div class="input-control">
          <label for="rating">{{ $t('form.rating') }}</label>
          <input type="number" id="rating" v-model.number="formData.rating" min="1" max="5" required/>
        </div>
        <Button :text="$t('buttons.send')" type="submit" view="gradient"/>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  padding: 25px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow-y: auto;
  background-color: rgba(19, 19, 20, .9);
  cursor: pointer;
}

form {
  &.loading {
    opacity: .8;
    pointer-events: none;
  }
}

.content {
  margin: auto;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  z-index: 9;
  width: 550px;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
  padding: 30px;
  cursor: auto;
}

.input-control {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 10px;

  label {
    font-size: 14px;
  }

  input,
  textarea {
    padding: 8px 10px;
    font: inherit;
    font-size: 14px;
    border: 1px solid #BEE2E0;
    border-radius: 5px;
  }

  textarea {
    height: 75px;
    resize: none;
  }
}
</style>