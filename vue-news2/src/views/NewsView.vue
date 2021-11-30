<template>
  <div>
    <div v-for="(item, index) in this.$store.state.news" v-bind:key="index">
      {{ item }}
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
