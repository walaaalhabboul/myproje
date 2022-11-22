<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="items/pageSize"
      color="red"

    
    ></v-pagination>
    <p>{{currentItems}}</p>
  </div>
</template>

<script>
export default {
data(){
return{
pageSize:10,
page:1,
items:20,
// lastPage:0,
}},
computed: {
  currentItems () {
 return ((this.page-1)*this.pageSize)+1 +'--'+ this.page*this.pageSize
   
  }
}




}







</script>

<style>

</style>