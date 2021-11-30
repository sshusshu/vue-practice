<template>
  <div>
    <div v-for="(item, index) in fetchedAsk" v-bind:key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
    // ...mapState(["ask"]),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
