<script setup>
import Image from './Image.vue';

</script>


<script>
import axios from 'axios'
import { DB_DJANGO } from '../env'

export default {
  data () {
    return {
        titls: [],
        errorMessage: null,
    }
  },
  mounted () {
    axios.get(DB_DJANGO.GET)
      .then(response => {
        this.titls = response.data;
        
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = "EROR 500";
      })

      
  }
}



</script>


<style scoped>

.Content {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
}

.Card {
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: 30px;
  box-shadow: 0 0 10px 5px rgb(38, 107, 172);
}

.h1 {
  font-size: 40px;
  text-align: center;
  color: cadetblue;
}

.Card-mini {
  width: 250px;
  height: 250px;
  margin: 20px;
  border: 15px;
  box-shadow: 0 0 10px 5px rgb(32, 117, 111);
}

p {
  font-size: 15px;
  font-family: cursive;
}

.error-message {
  color: red;
  font-size: 40px;
}



</style>

<template>
    <div class="main">
    <div class="Content" v-for="t in titls" :key="t._id">
      <div class="Card">
        <h1 class="h1">{{ t.title }}</h1>
        <div class="Card-mini">
          <p>{{ t.content }}</p>
        </div>
        <div class="button">
          <Button></Button>
        </div>
      </div>
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>