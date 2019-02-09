<template>
  <div id="app">
    <TopBar />
    <HeaderStripe />

    <div class="page-wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <SocialStripe />
    <FooterSection />
  </div>
</template>

<script>
import TopBar from "@/components/homepage/top-bar.vue";
import HeaderStripe from "@/components/homepage/header-stripe.vue";
import SocialStripe from "@/components/homepage/social-stripe.vue";
import FooterSection from "@/components/homepage/footer-section.vue";
import { mapActions } from "vuex";

import { FETCH_SESSIONS, FETCH_SPEAKERS } from "@/store";

export default {
  components: {
    TopBar,
    HeaderStripe,
    SocialStripe,
    FooterSection
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    // * We can add other requests in the array as long as they can all be ran in parallel.
    const promises = [this.FETCH_SESSIONS(), this.FETCH_SPEAKERS()];
    Promise.all(promises).then(this.handleDataFetched);

    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }

      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  methods: {
    ...mapActions([FETCH_SESSIONS, FETCH_SPEAKERS]),

    handleDataFetched() {
      // * This can be changed to something more useful when required.
      console.log("Data fetched!");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bungee+Outline");

html,
body {
  min-height: 100%;
}

html {
  overflow-y: scroll;
  // background-color: $color-main;
  background: $color-main url("/img/bg/texture.png");
  background-size: 100% auto;
  // background-attachment: fixed;
}

body {
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background: no-repeat right top/auto 70%
        url("../src/assets/bg/bg-blue-light.svg"),
      no-repeat left top/auto 80% url("../src/assets/bg/bg-red.svg"),
      no-repeat center center/contain url("/img/bg/team2018.jpg");
    width: 100%;
    height: 100%;

    // filter: blur(5px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
