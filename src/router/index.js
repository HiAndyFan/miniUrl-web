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
    name: "PageNotFound",
    component: () => import("@/views/error/PageNotFound.vue")
  },
  {
    path: "/500",
    name: "InternalServerError",
    component: () => import("@/views/error/InternalServerError.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
