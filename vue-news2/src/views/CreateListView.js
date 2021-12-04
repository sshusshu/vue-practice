import ListView from "./ListView";
import bus from "../utils/bus";

export default function createListView(name) {
  return {
    name: name,
    created() {
      bus.$emit("start:spinner");
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(bus.$emit("end:spinner"))
        .catch((err) => console.log(err));
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
