<template>
  <v-form ref="form" v-model="valid">
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="name"
        :rules="[(v) => !!v || 'Name is required']"
        :counter="30"
        label="Name"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="price"
        type="number"
        :rules="[
          (v) => !!v || 'Price is required',
          (v) => v > 0 || 'price  must be more than 0 ',
        ]"
        label="Price"
        required
      ></v-text-field>
    </v-col>
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
    <p>{{ responsdata[lastitem] }}</p>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      price: "",
      invalidinput: false,
      valid: true,
      responsdata: [],
      lastitem: 0,
      isloading: false,
    };
  },
  methods: {
    submit() {
      if (this.name == "") {
        this.invalidinput = true;
      }
      axios
        .post(`https://vuango-books-api.herokuapp.com/books/`, {
          name: this.name,
          price: this.price,
        })
        .then((res) => {
          console.log(res);
        });
      console.log("Hi " + this.name);
    },
    loadData() {
      this.isloading = true;
      axios.get(`https://vuango-books-api.herokuapp.com/books/`).then((res) => {
        console.log(res.data);
        if (res.data) {
          this.isloading = false;
        }
        this.responsdata = res.data;
        this.lastitem = this.responsdata.length - 1;
      });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
