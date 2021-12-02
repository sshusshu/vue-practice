<template>
  <list-item></list-item>
</template>

<script>
// import { mapGetters } from "vuex";
import ListItem from '../components/ListItem.vue';
export default {
  components: { ListItem },
  computed: {
    // ...mapGetters(["fetchedAsk"]),
    // ...mapState(["ask"]),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
 
};
</script>
