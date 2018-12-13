<template>
  <div class="full-section-container fixed">
    <header class="main-header">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.svg" alt="MSCC Logo" class="logo-svg">
        </nuxt-link>
      </div>
      <div class="menu-wrapper" :class="openState">
        <ul class="menu-items">
          <li class="menu-item" :key="index" v-for="(item, index) in menuItems">
            <nuxt-link :to="item.url" @click.native="scrollToElement(item.path, $event)" v-if="item.url">{{item.name}}</nuxt-link>
            <a :href="item.link" target="_blank" rel="noopener" v-if="item.link">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="menu-button">
        <button type="button" @click="openMenu">Menu</button>
      </div>
      <div class="register-button">
        <a target="_blank" href="https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/247729700/" v-if="allowRegistration">
          <span>Register</span>
        </a>
        <a href="#" v-if="!allowRegistration">
          <span>See you, 2019</span>
        </a>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'Sessions',
          url: '/sessions/'
        },
        {
          name: 'Speakers',
          url: '/',
          path: '#speakers'
        },
        {
          name: 'Extras',
          url: '/extras/'
        },
        {
          name: 'Sponsors',
          url: '/',
          path: '#sponsors'
        },
        {
          name: 'Contact',
          link: 'mailto:conference@mscc.mu'
        }
      ],
      openState: null
    }
  },
  computed: {
    allowRegistration () {
      var deadline = new Date(2019, 4, 11, 12, 0, 0);
      var now = new Date();
      return (now <= deadline)
    }
  },
  methods: {
    openMenu () {
      this.openState = (this.openState === null) ? 'opened' : null
    },
    scrollToElement (element, event) {
      let name = this.$route.name
      let id = element.substring(1, element.length)
      if (name === 'index') {
        this.$scrollTo('#' + id)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    width: 100%;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];

    &.fixed {
      position: fixed;
      top: 0px;
      z-index: 100;
    }
  }

  .main-header {
    --height: 80px;

    width: 100%;
    display: grid;
    height: var(--height);
    grid-column: full;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

    .logo-wrapper {
      grid-column: 1 / 2;
      height: var(--height);
      background: linear-gradient(135deg, rgba(49,232,183, 1), rgba(40,71,217, 1));
      display: grid;
      align-items: center;
      justify-content: center;
      transform: skewX(-15deg) scaleX(1.1);


      a {
        display: block;
        height: 60px;
        transform: skewX(15deg) scaleX(1);

        img {
          height: 60px;
        }
      }
    }

    .menu-wrapper {
      grid-column: 2 / 3;
      text-align: right;
      height: var(--height);
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: skewX(-15deg);


      .menu-items {
        transform: skewX(15deg);

        &, .menu-item {
          display: inline-block;
          margin: 0;
          padding: 0;
          list-style-type: none;
          align-self: center;
        }

        .menu-item {
          font-size: 23px;

          &:after {
            content: '/';
            padding: 0 calc(var(--gutter) / 1);
            font-family: var(--font-shentox);
            color: #ccc;
          }

          a {
            color: var(--color-black);
            font-family: var(--font-shentox);
            text-transform: uppercase;
            font-weight: 400;
            text-decoration: none;
            //text-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
          }

          &:last-child {
            margin-right: 0;

            &:after {
              content: none;
            }
          }
        }
      }
    }

    .menu-button {
      display: none;
      transform: skewX(-15deg) scaleX(1.1);

      button {
        color: var(--color-white);
        background: var(--color-green);
        font-family: var(--font-shentox);
        text-transform: uppercase;
        font-weight: 400;
        text-decoration: none;
        font-size: 20px;
        display: block;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--height);
        transform: skewX(15deg) scaleX(0.95);
        border: 0;
        outline: none;
        padding-left: calc(var(--gutter));
      }
    }

    .register-button {
      grid-column: 3 / 4;
      background: var(--color-blue);
      transform: skewX(-15deg) scaleX(1.1);

      a {
        color: var(--color-white);
        font-family: var(--font-shentox);
        text-transform: uppercase;
        font-weight: 400;
        text-decoration: none;
        font-size: 23px;
        display: block;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--height);
        transform: skewX(15deg) scaleX(0.95);
      }
    }
  }

  @media (max-width: 1500px) {
    .main-header {
      --height: 70px;

      .logo-wrapper {
        a {
          height: 50px;

          img {
            height: 50px;
          }
        }
      }

      .menu-wrapper {
        .menu-items {
          .menu-item {
            font-size: 18px;

            &:after {
              padding: 0 calc(var(--gutter) / 2);
            }
          }
        }
      }
      .register-button {
        a {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: $tablet) {
    .main-header {
      --height: 60px;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      grid-template-rows: 60px minmax(60px, 1fr);

      .logo-wrapper {
        grid-column: 1 / 2;
        grid-row: 1 / 2;

        a {
          height: 40px;

          img {
            height: 40px;
          }
        }
      }

      .menu-button {
        display: block;
        grid-row: 1 / 2;
      }

      .menu-wrapper {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        transform: skew(0deg) scaleX(1);
        height: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        position: relative;
        top: 0;

        &.opened {
          height: auto;
        }

        .menu-items {
          transform: skew(0deg) scaleX(1);
          display: block;
          width: 100%;
          text-align: center;

          .menu-item {
            font-size: 18px;
            display: block;
            border-bottom: 1px solid #cccccc;
            width: 100%;

            a {
              padding: calc(var(--gutter) / 2);
              width: 100%;
              display: block;
            }

            &:after {
              content: none;
              padding: 0;
            }
          }
        }
      }
      .register-button {
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        a {
          font-size: 18px;
        }
      }
    }

  }

  @media (max-width: $mobile) {
    .main-header {
      .logo-wrapper {
        transform: skewX(-15deg) scaleX(1.2);
        a {
          transform: skewX(13deg) scaleX(0.9);
        }
      }

      .menu-button {
        button {
          font-size: 17px;
        }
      }

      .register-button {
        a {
          font-size: 17px;
        }
      }
    }

  }
</style>
