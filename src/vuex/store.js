import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

const store = new Vuex.Store({
  state : {
    //要设置的全局访问的state对象
    userToken: ""
  },
  mutations: {
    setuserToken(state, token) {
      state.userToken = token;
    }
  },
  plugins: [vuexLocal.plugin]
});

export default store;
