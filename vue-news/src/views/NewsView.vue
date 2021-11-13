<template>
  <div>
    <div v-for="(user, index) in this.$store.state.news" v-bind:key="index">
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
