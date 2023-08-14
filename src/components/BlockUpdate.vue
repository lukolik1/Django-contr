<template>
 <div class="main">
    <div class="form">
      <form @submit.prevent="addItem">
        <div class="form-content">
          <h2> Обновить  <br> данные</h2>
          <select v-model="newItem.id">
            <option v-for="item in items" :value="item.id">{{ item.id }}</option>
          </select>
          <input v-model="newItem.title" placeholder="Заголовок">
          <textarea v-model="newItem.content" placeholder="Содержание" resize="none"></textarea>
        </div>
        <div class="form-btn">
          <input type="submit" value="Обновить" class="btn">
        </div>
        <p v-if="newItem.errorMessage" class="error-message">{{ newItem.errorMessage }}</p>
      </form>
    </div>
  </div>
  </template>
  
  <style scoped>
  /* ... остальной ваш CSS ... */
  
  
  textarea {
    width: 500px;
    height: 100px;
    resize: none;
  }
  
  .error-message {
    color: red;
    margin-left: 30px;
    margin-top: 30px;
    font-size: 20px;
  }
  
  
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    margin: 10px auto;
    width: 500px;
    height: auto;
  
    padding: 20px;
  
    border: 30px;
    box-shadow: 0 0 10px 5px rgb(18, 19, 20);
  
    margin-top: 120px;
    margin-bottom: 120px;
  }
  
  .form-content {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 45px;
  }
  
  .form-content h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  input, textarea {
    margin-top: 10px;
    border-radius: 20px;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .form-btn {
    text-align: center;
    margin-top: 10px;
  }
  
  .btn {
    width: 90px;
    height: 50px;
    border-radius: 0%;
    background-color: dodgerblue;
    border-color: blueviolet;
    color: white;
  }
  
  
  
  </style>
    
<script>


import axios from 'axios';
import { DB_DJANGO } from '../env';


export default {
  data() {
    return {
      newItem: {
        id: 0,
        title: '',
        content: '',
        errorMessage: null,
      },
      items: [],
    };
  },
  methods: {
    async addItem() {
      if (!this.newItem.title || !this.newItem.content) {
        this.newItem.errorMessage = "Заголовок и содержание обязательны";
        return;
      }

      try {
        const response = await axios.put(`${DB_DJANGO.PUT.replace(':id', this.newItem.id)}`, {
          title: this.newItem.title,
          content: this.newItem.content,
          id: this.newItem.id,
        });

        this.newItem.title = "";
        this.newItem.content = "";
        this.newItem.errorMessage = null;

        this.newItem.id = response.data.id;

        

        this.$emit("addItem", response.data);
      } catch (error) {
        console.log("addItem error:", error);
        this.newItem.errorMessage = "Ошибка при отправке данных. Пожалуйста, попробуйте позже.";
      }
    },

    async getItemId() {
      try {
        const response = await axios.get(DB_DJANGO.GET);

        const items = response.data;

        this.items = items;

        if (items.length > 0) {
          this.newItem.id = items[0].id;
        }
      } catch (error) {
        console.error("getItemId error:", error);
      }
    },
  },
  created() {
    this.getItemId();
  },
};
  

  </script>