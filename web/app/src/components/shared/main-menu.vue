<template>
  <div class="main-menu-wrapper">
    <ul>
      <li>
        <router-link :to="{ name: 'sessions' }">Sessions</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'extras' }">Extras</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'lifeatdevcon' }">Life at devcon</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'pastevents' }">Past Events</router-link>
      </li>
      <li><a href="#">MCB Inovapp</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.main-menu-wrapper {
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      a {
        font-weight: 900;
        text-transform: uppercase;
        line-height: 80px;
        display: block;
        position: relative;
        text-decoration: none;

        &:before {
          content: " ";
          width: 70px;
          height: 80px;
          left: 50%;
          margin-left: -35px;

          position: absolute;
          background-image: url("../../assets/menu-hover.svg");
          background-repeat: no-repeat;
          background-position: center center;
          transform: translate(0px, 10px);
          opacity: 0;
          transition: all 0.5s ease-out;
        }

        &:hover,
        &:active,
        &.router-link-exact-active {
          color: $color-red-light;
          transition: color 0.2s ease-in-out;

          &:before {
            opacity: 1;
            transform: translate(0, 0);
            transition: all 0.2s $ease-in-quad;
          }
        }
      }
    }
  }
}
</style>
