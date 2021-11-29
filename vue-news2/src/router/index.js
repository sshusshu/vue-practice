import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

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
      //component: url과 연결된 컴포넌트
      component: NewsView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/user",
      component: UserView,
    },
    {
      path: "/item",
      component: ItemView,
    },
  ],
});
