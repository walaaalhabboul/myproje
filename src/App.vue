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
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <span class="subheading">My Home</span>
    </v-toolbar>

    <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">{{ compone }}</span>
        </v-toolbar-title>
      </v-toolbar>
    </nav>

    <v-container class="my-5">
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
    };
  },
};
</script>

<style></style>
