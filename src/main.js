import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { VuePlugin } from "vuera";
import GoogleSignInButton from 'vue-google-signin-button-directive'
import axios from "axios";
import Vueaxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VuePlugin);

Vue.use(Vueaxios, axios);

new Vue({
  GoogleSignInButton,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
