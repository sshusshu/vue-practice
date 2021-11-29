<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">{{ user }}</div>
  </div>
</template>

<script>
import { fetchNewList } from "../api/index.js";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewList()
      .then((res) => (this.users = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
