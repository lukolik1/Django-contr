<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    cocktail: {
        type: Object,
        required: true,
    },
});


</script>



<template>
    <div class="headers">
      <h1>Python</h1>
  
      <div class="header-nave" style="margin: 0 200px;">
        <nav class="header" style="float: right;">
          <div>
            <nav class="nav-link">
              <li><RouterLink class="a-2" to="/">Home</RouterLink></li>
              <li><RouterLink class="a-2" to="/block-add">Block add</RouterLink></li>
              <li><RouterLink class="a-2" to="/block-update">Block update</RouterLink></li>
              <li><RouterLink class="a-2" to="/block-delete">Block delete</RouterLink></li>
            </nav>
          </div>
  
          <div>
            <nav class="nav-form">
              <li><a class="a-1">Registration</a></li>
              <li><a class="a-1">Authorization</a></li>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <style scoped>
  .headers {
    display: flex;
    flex-wrap: wrap;
    border: 20px 20px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  }
  
  .header {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-content: space-between;
    padding: 10px;
    margin: 10px;
    width: 100%;
    margin-left: 200px;
  }
  
  li,
  RouterLink {
    list-style-type: none;
  }
  
  RouterLink {
    font-size: 20px;
    text-decoration: none; /* Добавлено для убирания подчеркивания в RouterLink */
  }
  
  h1 {
    margin-top: 3px;
  }
  
  .header-nave {
    text-align: right;
    float: right;
  }
  
  .nav-form {
    display: flex;
    align-content: space-between;
    justify-content: flex-end;
    left: 1600px;
    top: 10px;
    position: absolute;
  }
  
  .a-1,
  .a-2 {
    margin-left: 20px;
    text-decoration: none;
    border: 20px;
    background-color: black;
    color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
  }
  
  .nav-link {
    display: flex;
    align-content: space-between;
    justify-content: flex-end;
    left: 750px;
    top: 10px;
    position: absolute;
  }
  </style>
