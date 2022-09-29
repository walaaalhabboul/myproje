<template>
  <div>
   <v-toolbar
    color="purple"
    dark
  >
  
    <v-divider
      class="mx-6"
      vertical
    ></v-divider>

    
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text  @click="$router.push('/tablo'); compone='Crud'">
        Crud
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text @click="$router.push('/Editor'); compone='Editor'">
        Editor
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text @click="$router.push('/ToDo'); compone='ToDo'">
        ToDo
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <span class="subheading">My Home</span>
    

    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-toolbar>

  <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">{{compone}}</span>
          
        </v-toolbar-title>
      </v-toolbar>
    </nav>

  <!-- <v-content class="mx-4 mb-4"> -->
    <!-- <component :is="compone"></component> -->
    <!-- <TabloB v-if="compone=crud"></TabloB>
    <HomePage v-if="compone=Editor"></HomePage>
    <ListS v-if="compone=ToDo"></ListS> -->
   <v-container class="my-5">
    <router-view></router-view>
   </v-container>
    <!-- </v-content> -->
  <!-- <v-app>
    <v-navigation
    
      color="indigo"
    >
      
    <router-link to="/list">ToDo</router-link>
    <router-link to="/tablo">Crud</router-link>
    <router-link to="/Editor">Editor</router-link>
          
       
    </v-navigation>
    <router-view></router-view>
  </v-app> -->
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
  data() {
    return {
compone:""


    };
  },
  methods:{
// changname(val){this.compone=val}



  }
};
</script>

<style></style>
