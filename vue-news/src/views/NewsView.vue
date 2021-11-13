<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">{{ user }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => (this.users = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
