import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/code-of-conduct",
      name: "coc",
      component: () => import("./views/PageCoC.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/PageContact.vue")
    },
    {
      path: "/extras",
      name: "extras",
      component: () => import("./views/PageExtras.vue")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("./views/PageJobs.vue")
    },
    {
      path: "/life-at-devcon",
      name: "lifeatdevcon",
      component: () => import("./views/PageLifeAtDevcon.vue")
    },
    {
      path: "/past-events",
      name: "pastevents",
      component: () => import("./views/PagePastEvents.vue")
    },
    {
      path: "/press",
      name: "press",
      component: () => import("./views/PagePress.vue")
    },
    {
      path: "/sessions",
      name: "sessions",
      component: () => import("./views/PageSessions.vue")
    },
    {
      path: "/session/:id",
      name: "session",
      props: true,
      component: () => import("./views/PageSession.vue")
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("./views/PageSpeakers.vue")
    },
    {
      path: "/speaker/:id",
      name: "speaker",
      component: () => import("./views/PageSpeaker.vue")
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: () => import("./views/PageSponsors.vue")
    },
    {
      path: "/vote",
      name: "vote",
      component: () => import("./views/PageVote.vue")
    }
  ]
});
