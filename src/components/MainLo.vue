<template>
  <div>
    <v-container class="my-5">
      <v-layout row justify-space-between>
        <v-felx xs12 md3>
          <v-col>
            <v-select
              :items="items"
              filled
              label="Text Color"
              v-model="myColor"
              dense
            >
            </v-select>
          </v-col>
        </v-felx>

        <v-felx xs12 md6>
          <v-col>
            <v-select
              v-model="mybackground"
              @input="background"
              :items="items"
              filled
              label="Background Color"
              dense
            >
            </v-select>
          </v-col>
        </v-felx>

        <v-felx xs12 md6>
          <v-col>
            <v-select
              :items="items1"
              filled
              label="Font Size"
              v-model="myfont"
              dense
            >
            </v-select>
          </v-col>
        </v-felx>
        <v-felx xs12 md6>
          <v-col>
            <v-checkbox
              v-model="checked"
              label="bold"
              color="success"
              id="checkbox"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-felx>
      </v-layout>

      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["red", "green", "white", "black"],
      items1: ["50px", "100px", "80px"],
      myColor: "",
      myfont: "",
      mybackground: "",
      checked: false,
    };
  },
  computed: {
    elrment: {
      get() {
        return this.id;
      },
      set(val) {
        this.$emit("update", val);
      },
    },
  },
  watch: {
    checked(val) {
      if (val) {
        this.elrment.style.fontWeight = "bold";
      } else {
        this.elrment.style.fontWeight = "";
      }
    },
    myColor(val) {
      this.elrment.style.color = val;
    },
    mybackground(val) {
      this.elrment.style.background = val;
    },

    myfont(val) {
      this.elrment.style.fontSize = val;
    },
    id(val) {
      if (val) {
        this.myColor = val.style.color;

        this.myfont = val.style.fontSize;
        this.mybackground = val.style.background;
        if (val.style.fontWeight == "bold") {
          this.checked = true;
        } else {
          this.checked = false;
        }
      }
    },
  },

  model: {
    prop: "id",
    event: "update",
  },
  props: {
    id: { type: Object },
  },
  methods: {
    // returns 'foo'
    font(c = "30px") {
      this.elrment.style.fontSize = c.target.value;
    },
    background(c = "red") {
      this.elrment.style.background = c.target.value;
    },
  },
};
</script>

<style>
.root {
  margin: 20px;
  padding: 10px;
  float: right;
}
</style>
