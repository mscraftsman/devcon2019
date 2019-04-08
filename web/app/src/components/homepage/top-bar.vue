<template>
  <div class="home-component top-bar-wrapper">
    <div class="container" v-view="viewHandler">
      <div class="top-bar-container">
        <div class="rendez-vous-wrapper" v-if="user">
          <span class="svgicon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs">
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </span>
          {{ user.name }}
        </div>
        <div class="rendez-vous-wrapper" v-else>
          11
          <sup>th</sup> - 13 <sup>th</sup> April at Voila Bagatelle
        </div>

        <div class="links-wrapper">
          <ul>
            <li v-if="user">
              <router-link :to="{ name: 'bookmarks' }">My Bookmarks</router-link>
            </li>
            <li v-if="user">
              <a @click="USER_LOGOUT()">Logout</a>
            </li>
            <li v-else>
              <a @click="USER_LOGIN()">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- set progressbar -->
    <vue-progress-bar ref="pageloader"></vue-progress-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  methods: {
    ...mapActions(["USER_LOGOUT", "USER_LOGIN"]),
    viewHandler(e) {
      let el = this.$refs.pageloader.$el;
      if (e.type == "enter") {
        el.style.position = "relative";
      } else if (e.type == "exit") {
        el.style.position = "fixed";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  // height: 40px;
  background: linear-gradient(to right, rgb(252, 218, 159) 0%, rgb(255, 95, 56) 52%, rgb(192, 37, 51) 100%) bottom transparent no-repeat;

  background-size: 100% 1px;
  box-sizing: border-box;
  line-height: 40px;

  text-transform: uppercase;
  font-size: 12px;
}

.top-bar-container {
  display: flex;
  width: 100%;
  .construction-wrapper {
    flex-grow: 1;
    // text-align: center;
    color: yellow;
    font-size: 9px;
    font-weight: bold;
  }
  .rendez-vous-wrapper {
    justify-content: flex-start;
    flex-grow: 1;
    font-weight: 900;
    align-content: center;

    sup {
      text-transform: lowercase;
    }

    .svgicon {
      padding-right: 5px;
      svg {
        top: 7px;
        position: relative;
      }
    }
  }
  .links-wrapper {
    justify-content: flex-end;
    font-weight: 500;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      li {
        list-style-type: none;

        a {
          color: white;
          text-decoration: none;
          padding-left: $gutter;
          cursor: pointer;

          &:visited {
            color: white;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  .construction-wrapper {
    display: none;
  }
}
@media screen and (max-width: $tablet-portrait) {
  .rendez-vous-wrapper {
    text-align: center;
  }

  .links-wrapper {
    display: none;
  }
}
</style>
