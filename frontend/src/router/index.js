import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/kanban",
    name: "Kanban",
    component: () =>
      import(/* webpackChunkName: "kanban" */ "../views/Kanban.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
