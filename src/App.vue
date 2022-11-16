<template>
  <div>
    <v-toolbar color="purple" dark>
      <v-divider class="mx-6" vertical></v-divider>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          @click="
            $router.push('/tablo');
            compone = 'Crud';
          "
        >
          Crud
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn
          text
          @click="
            $router.push('/Editor');
            compone = 'Editor';
          "
        >
          Editor
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn
          text
          @click="
            $router.push('/ToD');
            compone = 'ToDo';
          "
        >
          ToDo
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn
          text
          @click="
            $router.push('/form');
            compone = 'Forms';
          "
        >
         Form
        </v-btn>

      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
          text
          v-if =($store.getters.getToken)
          @click="logout"
        >
       Logout
      </v-btn>
      <v-btn
          text
          v-if =!($store.getters.getToken)
          @click="
            $router.push('/SignIn');
            compone = 'SignIn';
          "
        >
        LogIn
        <!-- {{$store.getters.getToken?'userName':'Log In'}} -->
      <!-- {{mode}} -->
      <!-- v-if =!($store.getters.getToken) -->
        </v-btn>
        <v-btn
          text
          v-if =($store.getters.getToken)
          @click="
            $router.push('/UserInfo');
            compone = 'UserInfo';
          "
         
        >
        Hi {{$store.state.user.name}}
      </v-btn>
      
    </v-toolbar>

    <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <!-- <span class="font-weight-light">{{ compone }}</span> -->
        </v-toolbar-title>
      </v-toolbar>
    </nav>

    <v-container class="my-5">
      <!-- <h1>{{responsData.data.data.user.name}} </h1> -->
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      compone: "",
      mode:"SignIn",
      // responsData:{}
    };
  },
//   watch:{
// mode(val){



// }
//   },
  computed:{



  },
  methods:{
    logout(){
      this.$store.dispatch('logout');



    },

  },
//   created(){
//     // this.$store.getters.getToken
// axios.post('https://api.oniki.mgsapp.com/api/dashboard/me').then(res =>{
//   console.log(res)
//   this.responsData=res
// })

//   },
  // created() {
  //   // this.$store.dispatch('getItem');
  //   // console.log(this.state.token)
  // },
};
</script>

<style></style>
