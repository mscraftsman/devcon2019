<template>
  <div class="btn effect-hover click" :style="'--theme:' + theme + '; --size:' + size">
    <a :href="link">
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
      default: '/'
    },
    theme: {
      default: '#fff'
    },
    size: {
      default: '45px'
    }
  }
}
</script>



<style lang="scss" scoped>
.btn {
  --theme: #ff4932;
  color: var(--theme);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  text-decoration: none;
  line-height: var(--size, 45px);
  text-transform: uppercase;
  width: 100%;
  text-align: center;

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: var(--theme);
  outline-offset: 0px;
  // border-radius: 5px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    text-decoration: none;
  }
  padding: 0 20px;

  a,
  a span {
    color: var(--theme);
  }

  &.effect-hover {
    // border: 1px solid var(--theme);
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
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
}
</style>
