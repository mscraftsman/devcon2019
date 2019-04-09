<template>
  <div class="logo-wrapper">
    <router-link :to="{name:'home'}">
      <img src="@/assets/logo.svg" alt>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
  width: 80px;
  height: 80px;
}

@media screen and (max-width: $tablet) {
  .logo-wrapper {
    width: 50px;
    height: 50px;
  }
}
</style>
