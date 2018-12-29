<template>
  <div class="home-component header-stripe-wrapper">
    <div class="container header-stripe-container">
      <div class="logo-wrapper">
        <LogoSvg />
      </div>
      <div class="menu-wrapper">
        <MainMenu />
      </div>
      <div class="register-button">
        <button-waw :theme="'#ff4932'" :link="'#'">Register</button-waw>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSvg from "@/components/shared/logo-svg.vue";
import MainMenu from "@/components/shared/main-menu.vue";
// import ButtonWaw from '@/components/shared/button-waw.vue'

export default {
  name: "home",
  components: {
    LogoSvg,
    MainMenu
    // ButtonWaw
  }
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
