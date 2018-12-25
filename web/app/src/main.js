import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import ButtonWaw from "@/components/shared/button-waw.vue";

Vue.component("button-waw", ButtonWaw);

Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  color: "#97D0E1",
  failedColor: "red",
  position: "relative",
  height: "2px"
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
