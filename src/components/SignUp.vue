<template>
    <v-form ref="form" v-model="valid">
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="name"
          type="email"
         
          label="Email"
          required
        ></v-text-field>
      </v-col>


      <v-col cols="12" sm="6">
        <v-text-field
          v-model="password"
          type="password"
          :rules="[
           
          ]"
          label="Password"
          required
        ></v-text-field>
      </v-col>

      <!-- <v-col cols="12" sm="6">
        <v-text-field
          v-model="confirm"
          type="password"
          :rules="[
          
          ]"
          label="Confirm"
          required
        ></v-text-field>
      </v-col> -->
      <p v-if="invalidinput">Nooo Data here ...you have to enter data</p>
      <v-row>
        <v-col>
          <v-btn class="mr-4" @click="submit" :disabled="!valid"> submit </v-btn>
        </v-col>
  
        <v-btn class="mr-4" @click="reset"> Reset Form </v-btn>
  
        <v-btn class="mr-4" :loading="isloading" @click="loadData">
          load data
        </v-btn>
      </v-row>
      <p>{{  }}</p>
    </v-form>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        name: "",
        confirm: "",
        password:'',
        invalidinput: false,
        valid: true,
       
        lastitem: 0,
        isloading: false,
      };
    },
    methods: {
      submit() {
        // if (this.name == "") {
        //   this.invalidinput = true;
        // }
        axios
          .post(`http://192.168.10.150/api/auth/register`, {
            email: this.name,
            password: this.password,

          })
 
      },

      loadData() {
        // this.isloading = true;
        // axios.get(`https://vuango-books-api.herokuapp.com/books/`).then((res) => {
        //   console.log(res.data);
        //   if (res.data) {
        //     this.isloading = false;
        //   }
        //   this.responsdata = res.data;
        //   this.lastitem = this.responsdata.length - 1;
        // });
      },
      reset() {
        this.$refs.form.reset();
      },
    },
  };
  </script>
  
  <style></style>
  