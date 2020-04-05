import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import pageNotFound from "../views/error/pageNotFound.vue";
import about from "../views/about";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/404",
    name: "pageNotFound",
    component: pageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
