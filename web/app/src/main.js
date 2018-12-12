import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import ButtonWaw from "@/components/shared/button-waw.vue";
import VueLodash from "vue-lodash";

Vue.use(VueLodash); // options is optional
Vue.component("button-waw", ButtonWaw);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
