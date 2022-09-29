<template>
  <div >
    

    
    <MainLo v-model="targetId"></MainLo>
    
    <v-app>
  <v-container class="my-5">
    <v-layout row wrap>
<v-felx xs12 md6>
  <v-card class="text-xs-center ma-3">
    <div id="t1" v-on:click="select($event)">تعلم ببساطة 1</div>
  </v-card>
</v-felx>
<v-felx xs12 md6>
  <v-card class="text-xs-center ma-3">
    <div id="t1" v-on:click="select($event)">تعلم ببساطة 2</div>
  </v-card>
</v-felx>
<v-felx xs12 md6>
  <v-card class="text-xs-center ma-3">
    <div id="t1" v-on:click="select($event)">تعلم ببساطة 3</div>
  </v-card>
</v-felx>




    </v-layout>
   
  

  </v-container>


</v-app>
    <!-- <div id="t1" v-on:click="select($event)">تعلم ببساطة 1</div>
    <div id="t2" v-on:click="select($event)">تعلم ببساطة 2</div>
    <div id="t3" v-on:click="select($event)">تعلم ببساطة 3</div> -->
  </div>
</template>

<script>
  import axios from "axios"
import MainLo from "./MainLo.vue";
export default {
  name: "HomePage",
  components: { MainLo },
  data() {
    return {
      targetId: {},
    };
  },
  created(){
    axios.get('https://vuango-books-api.herokuapp.com/books/').then((res)=>{
      this.books = res.data
      console.log(this.books)
    })
  },
  methods: {
    select: function (event) {
      this.targetId = event.target;
      //    this.targetId.style.color = 'red'
      // this.$emit('update',this.targetId)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
