<template>
  <div class="btn effect-hover click" :style="'--theme:' + theme + '; --size:' + size">
    <a :href="link" :target="target">
      <span>
        <slot></slot>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      default: "/"
    },
    target: {
      default: ""
    },
    theme: {
      default: "#fff"
    },
    size: {
      default: "45px"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  --theme: #ff4932;
  color: var(--theme);
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  line-height: var(--size, 45px);
  text-transform: uppercase;
  text-align: center;
  border-radius: 15px;
  border: 1px solid var(--theme);
  transition: 0.25s;
  letter-spacing: 1px;

  &:hover {
    text-decoration: none;
  }
  padding: 0px 60px;

  @media screen and (max-width: $tablet) {
    padding: 0 20px;
  }

  a,
  a span {
    color: var(--theme);
  }

  &.effect-hover {
    overflow: hidden;
    position: relative;

    span {
      z-index: 20;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  /////////////////////////////
  // Click
  ///////////////////////////

  &.click:active,
  &.click:focus {
    animation: pulse 0.3s;
    box-shadow: 0 0 0 1em rgba(black, 0);

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--theme);
      }
    }
  }
}
</style>