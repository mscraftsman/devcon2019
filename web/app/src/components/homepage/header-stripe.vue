<template>
  <div class="home-component header-stripe-wrapper">
    <div class="container header-stripe-container">
      <div class="logo-wrapper">
        <LogoSvg/>
      </div>
      <div class="menu-wrapper" :class="{ active }">
        <MainMenu @click.native="resetMenu()"/>
      </div>
      <div class="register-button"></div>
      <button class="menu-button" @click="activateMenu()" :class="{ active }">
        <i></i>
      </button>
    </div>
  </div>
</template>

<script>
import LogoSvg from "@/components/shared/logo-svg.vue";
import MainMenu from "@/components/shared/main-menu.vue";
// import ButtonWaw from '@/components/shared/button-waw.vue'

export default {
  name: "home",
  data() {
    return {
      active: "",
    };
  },
  components: {
    LogoSvg,
    MainMenu,
    // ButtonWaw
  },
  methods: {
    activateMenu() {
      if (this.active === "") {
        this.active = "active";
      } else {
        this.active = "";
      }
    },
    resetMenu() {
      this.active = "";
    },
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

.menu-button {
  display: none;
  background: transparent;
  border: 0;
  width: 100%;
  outline: none;
  cursor: pointer;
  padding: 0;

  i {
    position: relative;
    display: block;
    text-align: center;
    width: 40px;
    height: 3px;
    color: var(--color-white);
    background: var(--color-white);
    transition: all 0.2s ease-out;

    &:after,
    &:before {
      content: "";
      width: 40px;
      height: 3px;
      background: var(--color-white);
      position: absolute;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
    &:after {
      bottom: -11px;
    }
    &:before {
      top: -11px;
    }
  }

  &.active {
    i {
      background: transparent;
      &:after {
        bottom: 0;
        transform: rotate(-45deg);
        opacity: 1;
      }
      &:before {
        top: 0;
        transform: rotate(45deg);
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  .menu-wrapper {
    position: absolute;
    width: 250px;
    transform: translateX(-250px);
    transition: all 0.3s ease-in-out;
    top: 0;
    left: 0;
    z-index: 10000000;

    &.active {
      transform: translateX(0px);
    }
  }
  .register-button {
    display: none;
  }
  .menu-button {
    height: 100%;
    justify-content: center;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .header-stripe-container {
    display: grid;
    grid-template-columns: 1fr 40px;
  }
}
</style>
