<template>
  <div class="home-component header-stripe-wrapper">
    <div class="container header-stripe-container">
      <template v-if="this.$route.name !== 'home'">
        <div class="back-button-wrapper">
          <a @click="$router.go(-1)" class="back"> <img src="../../assets/back.svg" alt /> Back </a>
        </div>
      </template>
      <div class="logo-wrapper">
        <LogoSvg />
      </div>
      <div class="menu-wrapper" :class="{ active }">
        <MainMenu @click.native="resetMenu()" />
      </div>
      <div class="register-button" v-if="!user">
        <a class="login-button" @click="USER_LOGIN()">Login</a>
      </div>
      <button class="menu-button" @click="activateMenu()" :class="{ active }">
        <i></i>
      </button>
    </div>
  </div>
</template>

<script>
import LogoSvg from "@/components/shared/logo-svg.vue";
import MainMenu from "@/components/shared/main-menu.vue";
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  methods: {
    ...mapActions(["USER_LOGIN"]),
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
.back-button-wrapper {
  display: none;
  cursor: pointer;
  --backsize: 40px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--backsize);
    width: var(--backsize);
    padding: calc(var(--backsize) / 4);
    color: white;
    background: rgba($color-main, 0.5);
    border-radius: 100%;
    border: 3px solid #ff4932;
    padding-left: calc(var(--backsize) / 3.5);
    text-align: center;
    transition: transform 0.2s ease-in-out;
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    font-size: 13px;
    img {
      height: 60%;
      margin-right: 5px;
    }
  }
  &:hover {
    a {
      transform: translateX(-5px);
      transition: transform 0.2s ease-in-out;
    }
  }
}
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

.login-button {
  padding: 5px 20px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid var(--color-red-light);
  background: var(--color-red-light);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}
.menu-button {
  display: none;
  background: transparent;
  border: 0;
  width: 50px;
  height: 50px !important;
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
  .header-stripe-wrapper {
    padding: 20px 0 10px;
  }

  .back-button-wrapper {
    display: block;
  }
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
    display: flex;
    justify-content: space-between;
  }
}
</style>
