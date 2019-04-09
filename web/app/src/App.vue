<template>
  <div id="app">
    <TopBar/>
    <HeaderStripe/>

    <div class="page-wrapper">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <NotificationSection/>
    <SocialStripe/>
    <FooterSection/>
  </div>
</template>

<script>
import TopBar from "@/components/homepage/top-bar.vue";
import HeaderStripe from "@/components/homepage/header-stripe.vue";
import SocialStripe from "@/components/homepage/social-stripe.vue";
import FooterSection from "@/components/homepage/footer-section.vue";
import NotificationSection from "@/components/homepage/notification-section.vue";
import { mapActions, mapGetters } from "vuex";
import { FETCH_SESSIONS, FETCH_SPEAKERS, USER_STATUS, SET_SESSIONS_READY, SET_SPEAKERS_READY, USER_FEEDBACK_FETCH, USER_BOOKMARK_FETCH, NOTIFICATION_ADD, LEADERBOARD_FETCH } from "@/store";

export default {
  components: {
    TopBar,
    HeaderStripe,
    SocialStripe,
    FooterSection,
    NotificationSection,
  },
  beforeMount() {},
  mounted() {
    if (this.getUser) {
      // this.NOTIFICATION_ADD('getting feedback and bookmark')
      // this.USER_FEEDBACK_FETCH();
      // this.USER_BOOKMARK_FETCH();
    }
    this.$Progress.finish();
  },
  created() {
    const promises = [this.FETCH_SESSIONS(), this.FETCH_SPEAKERS(), this.USER_STATUS(), this.LEADERBOARD_FETCH()];
    Promise.all(promises).then(this.handleDataFetched);

    this.$Progress.start();

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;

        this.$Progress.parseMeta(meta);
      }

      this.$Progress.start();

      next();
    });

    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions([FETCH_SESSIONS, FETCH_SPEAKERS, USER_STATUS, SET_SPEAKERS_READY, SET_SESSIONS_READY, USER_FEEDBACK_FETCH, USER_BOOKMARK_FETCH, NOTIFICATION_ADD, LEADERBOARD_FETCH]),

    handleDataFetched() {
      this.SET_SESSIONS_READY(true);
      this.SET_SPEAKERS_READY(true);
    },
  },
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

  background: $color-main url("/img/bg/texture.png");
  background-size: 100% auto;
}

body {
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background: no-repeat right top/45% auto url("../src/assets/bg/bg-blue-light.svg"), no-repeat left top/45% auto url("../src/assets/bg/bg-red.svg"), no-repeat center center/contain url("/img/bg/team2018.jpg");
    width: 100%;
    height: 100%;
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

@media screen and (max-width: $tablet) {
  body {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      z-index: -1;

      display: block;
      background: no-repeat right top/auto 40% url("../src/assets/bg/bg-blue-light.svg"), no-repeat left top/20% auto url("../src/assets/bg/bg-red.svg"), no-repeat center center/contain url("/img/bg/team2018.jpg");
      width: 100%;
      height: 100%;
    }
  }
}
</style>