<template>
  <div>
    <MainLo v-model="targetId"></MainLo>

    <v-app>
      <v-container class="my-5">
        <v-layout row wrap>
        
            <v-card class="text-xs-center ma-3">
              <div id="t1" v-on:click="select($event)">تعلم ببساطة 1</div>
            </v-card>
         
          
            <v-card class="text-xs-center ma-3">
              <div id="t1" v-on:click="select($event)">تعلم ببساطة 2</div>
            </v-card>
    
          
            <v-card class="text-xs-center ma-3">
              <div id="t1" v-on:click="select($event)">تعلم ببساطة 3</div>
            </v-card>
         
        </v-layout>
      </v-container>
    </v-app>
   
  </div>
</template>

<script>
import axios from "axios";
import MainLo from "./MainLo.vue";
export default {
  name: "HomePage",
  components: { MainLo },
  data() {
    return {
      targetId: {},
    };
  },
  created() {
    axios.get("https://vuango-books-api.herokuapp.com/books/").then((res) => {
      this.books = res.data;
      console.log(this.books);
    });
  },
  methods: {
    select: function (event) {
      this.targetId = event.target;
     
    },
  },
};
</script>


<style scoped></style>
