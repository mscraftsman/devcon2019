<template>
  <div class="home-component header-stripe-wrapper">
    <div class="container header-stripe-container">
      <div class="logo-wrapper">
        <LogoSvg/>
      </div>
      <div class="menu-wrapper">
        <MainMenu/>
      </div>
      <div class="register-button">
        <div class="button button-orange">
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LogoSvg from '@/components/shared/logo-svg.vue'
import MainMenu from '@/components/shared/main-menu.vue'

export default {
  name: "home",
  components: {
    LogoSvg,
    MainMenu,
  }
};
</script>


<style lang="scss" scoped>
.header-stripe-wrapper {
  padding: 50px 0;
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
