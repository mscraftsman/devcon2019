import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import inViewportDirective from "vue-in-viewport-directive";
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
  height: "2px"
});

Vue.directive("in-viewport", inViewportDirective);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
