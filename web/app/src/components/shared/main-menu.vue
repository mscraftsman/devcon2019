<template>
  <div class="main-menu-wrapper">
    <ul>
      <li>
        <a href="#">Sessions</a>
      </li>
      <li>
        <a href="#">Extras</a>
      </li>
      <li>
        <a href="#">Life at devcon</a>
      </li>
      <li>
        <a href="#">MCB Innovapp</a>
      </li>
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
        &:active {
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

