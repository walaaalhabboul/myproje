<template>
  <div>

<!-- <p>{{responsData.data.data.user.name}}</p> -->
<h1 v-if="$store.state.user">Hi   {{$store.state.user.name}}</h1>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    
    data(){
return{
}

    },
}
</script>

<style>

</style>