import Vue from "vue";
import VueRouter from "vue-router";
// import NewsView from "../views/NewsView.vue";
// import JobsView from "../views/JobsView.vue";
// import AskView from "../views/AskView.vue";
import createListView from "../views/CreateListView";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

import bus from "../utils/bus";
import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      //path:url
      path: "/news",
      name: "news",
      //component: url과 연결된 컴포넌트
      // component: NewsView,
      component: createListView("NewsView"),
      beforeEnter: (to, from, next) => {
        // console.log("to", to);
        // console.log("from", from);
        // console.log("next", next);
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => bus.$emit("end:spinner"))
          .catch((err) => console.log(err));
        next();
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: JobsView,
      component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => bus.$emit("end:spinner"))
          .catch((err) => console.log(err));
        next();
      },
    },
    {
      path: "/ask",
      name: "ask",
      // component: AskView,
      component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => bus.$emit("end:spinner"))
          .catch((err) => console.log(err));
        next();
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
