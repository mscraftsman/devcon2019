<template>
  <div class="home-component header-stripe-wrapper">
    <div class="container header-stripe-container">
      <div class="logo-wrapper">
        <LogoSvg/>
      </div>
      <div class="menu-wrapper">
        <MainMenu/>
      </div>
      <div class="user" v-if="user.status">{{ user.data.name }}</div>
      <div class="register-button" v-else>
        <button-waw
          :theme="'#ff4932'"
          :target="'_blank'"
          :link="'https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/258586831/'"
        >Register</button-waw>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSvg from "@/components/shared/logo-svg.vue";
import MainMenu from "@/components/shared/main-menu.vue";
import { mapGetters } from "vuex";
// import ButtonWaw from '@/components/shared/button-waw.vue'

export default {
  name: "home",
  components: {
    LogoSvg,
    MainMenu,
    // ButtonWaw
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
};
</script>

<style lang="scss" scoped>
.header-stripe-wrapper {
  padding: 50px 0 10px;
}
.header-stripe-container {
  display: flex;
  align-items: center;
}
.logo-wrapper {
}
.menu-wrapper {
  flex-grow: 1;
}
.register-button {
}

.user {
  // border: 1px solid var(--color-red-light);
  // padding: 5px;
  // border-radius: 5px;
}
@media screen and (max-width: $tablet) {
  .logo-wrapper {
  }
  .menu-wrapper {
    display: none;
  }
  .register-button {
    display: none;
  }
}
</style>
