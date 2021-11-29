<template>
  <div>
    <div v-for="(job, index) in jobs" v-bind:key="index">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobList } from "../api/index";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobList()
      .then((res) => (this.jobs = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
