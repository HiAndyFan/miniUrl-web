import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import qs from "qs";
import store from "./vuex/store";
// import animate from "animate.css";

// Vue.use(animate);
Vue.prototype.$axios = axios; //在Vue的原型上添加$axios方法
Vue.config.productionTip = false;
Vue.use(qs);
// Vue.use(ElementUI);
Vue.use(VueAxios, axios);
//设置baseURL
switch (process.env.NODE_ENV) {
  case "development": {
    axios.defaults.baseURL = "http://121.37.5.27/";
    break;
  }
  case "test": {
    axios.defaults.baseURL = "http://127.0.0.1:8080/";
    break;
  }
}
//设置token值
//axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
//请求头
//axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";
axios.defaults.withCredentials = true; //自动cookie
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
