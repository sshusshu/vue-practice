<template>
  <div>
    <div v-for="(job, index) in jobs" v-bind:key="index">{{ job }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";
export default {
  data() {
    return { jobs: [] };
  },
  created() {
    fetchJobsList()
      .then((res) => (this.jobs = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
