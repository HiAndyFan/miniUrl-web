import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about.vue")
  },
  {
    path: "/404",
    name: "pageNotFound",
    component: () => import("@/views/error/pageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
