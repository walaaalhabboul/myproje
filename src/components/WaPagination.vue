<template>
   <v-app>
  <div class="text-center">
    <v-pagination v-model="page" :length="items / pageSize"></v-pagination>
    <p>{{ currentItems }}</p>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="itemsPerpage"
            label="items per page "
            @change="setvalue"
            v-model="pageSize"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  
  </div>
   </v-app>
</template>

<script>
export default {
  model: {
    prop: "pages",
    event: "update",
  },
  computed: {
    page: {
      get() {
        return this.pages;
      },
      set(val) {
        this.$emit("update", val);
      },
    },
    currentItems() {
      return (
        (this.page - 1) * this.pageSize + 1 + "-->" + this.page * this.pageSize
      );
    },
  },
  props: {
    pages: { type: Number },
    // selectedItem:{ type: Number }
  },
  data() {
    return {
      itemsPerpage: [2,10, 20],
      pageSize: 10,
      items: 20,
      // lastPage:0,
    };
  },
  methods: {
    setvalue(val) {
      // console.log(val)
      this.$emit("set-value", val);
    },
  },
};
</script>

<style></style>
