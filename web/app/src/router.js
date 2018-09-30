import Vue from "vue";
import Router from "vue-router";
import PageHome from "./views/PageHome.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PageHome",
      component: PageHome
    },
    {
      path: "/contact",
      name: "PageContact",
      component: () => import("./views/PageContact.vue")
    },
    {
      path: "/extra",
      name: "PageExtra",
      component: () => import("./views/PageExtra.vue")
    },
    {
      path: "/sessions",
      name: "PageSessions",
      component: () => import("./views/PageSessions.vue")
    },
    {
      path: "/speakers",
      name: "PageSpeakers",
      component: () => import("./views/PageSpeakers.vue")
    }
  ]
});
