import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/code-of-conduct",
      name: "coc",
      component: () => import("./views/PageCoC.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/PageContact.vue"),
    },
    {
      path: "/extras",
      name: "extras",
      component: () => import("./views/PageExtras.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("./views/PageJobs.vue"),
    },
    {
      path: "/life-at-devcon",
      name: "lifeatdevcon",
      component: () => import("./views/PageLifeAtDevcon.vue"),
    },
    {
      path: "/press",
      name: "press",
      component: () => import("./views/PagePress.vue"),
    },
    {
      path: "/sessions",
      name: "sessions",
      component: () => import("./views/PageSessions.vue"),
    },
    {
      path: "/session/:id",
      name: "session",
      props: true,
      component: () => import("./views/PageSession.vue"),
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("./views/PageSpeakers.vue"),
    },
    {
      path: "/speaker/:id",
      name: "speaker",
      component: () => import("./views/PageSpeaker.vue"),
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: () => import("./views/PageSponsors.vue"),
    },
    {
      path: "/vote",
      name: "vote",
      component: () => import("./views/PageVote.vue"),
    },
    {
      path: "/feedback/:id",
      props: true,
      name: "feedback",
      component: () => import("./views/PageFeedback.vue"),
    },
    {
      path: "/top",
      props: true,
      name: "top",
      component: () => import("./views/PageTop.vue"),
    },
    {
      path: "/bookmarks",
      props: true,
      name: "bookmarks",
      component: () => import("./views/PageBookmarks.vue"),
    },
    {
      path: "/index.html",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name != "sessions") {
      return { x: 0, y: 0 };
    } else {
      return false;
    }
    // if (savedPosition) {
    // } else {
    // }
  },
});
