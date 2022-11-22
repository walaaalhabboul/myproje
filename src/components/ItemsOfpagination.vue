<template>
  <div>
    <WaPagination v-model="page" @set-value="printdata"></WaPagination>
  </div>
</template>

<script>
import WaPagination from "../components/WaPagination";
export default {
  components: { WaPagination },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    printdata(val) {
     console.log(val)
    },
  },
};
</script>

<style></style>
