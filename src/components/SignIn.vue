<template>
  <v-form ref="form" v-model="valid">
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="email"
        type="email"
        label="Email"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        v-model="password"
        type="password"
        :rules="[]"
        label="Password"
        required
      ></v-text-field>
    </v-col>

    <p v-if="invalidinput">Nooo Data here ...you have to enter data</p>
    <v-row>
      <v-col>
        <v-btn class="mr-4" @click="submit" :disabled="!valid"> submit </v-btn>
        <v-btn class="mr-4" @click="logout" :disabled="!valid"> Logout </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="mr-4"
          @click="
            $router.push('/SignUp');
            compone = 'SignUp';
          "
        >
          Signup
        </v-btn>
      </v-col>
    </v-row>
    <p>{{token}}</p>
  </v-form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "admin@admin.com",
      confirm: "",
      password: "password",
      invalidinput: false,
      valid: true,

      lastitem: 0,
      isloading: false,
    };
  },
  computed: { ...mapState(["token"]), ...mapGetters(["token"]) },
  methods: {
    logout(){
      this.$store.dispatch('logout');



    },
    submit() {
      // .post(`https://api.oniki.mgsapp.com/api/dashboard/login`, {
      //     email: this.name,
      //     password: this.password,
      // }, {

      // // headers: {
      // //   Authorization: "Bearer ${token}",
      // //   token: localStorage.getItem("token")
      // // }

      // }).then(res=>{
      //     console.log(res);

      // })
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", actionPayload).then(res=>{
        console.log(res);
        // if (token && userId)
        this.$store.commit('setToken', res.data.data.token.access_token);
         console.log( "res.data.data.token",res.data.data.token.access_token)
         this.$router.push("/ToD")

    })
      

      //  created

      //     if (this.name && this.password) {
      //  console.log(this.name);
      //       }
    },
  },
};
</script>

<style></style>
