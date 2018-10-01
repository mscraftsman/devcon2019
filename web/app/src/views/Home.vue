<template>
  <div class="home">
    <HelloWorld msg="DevCon2019" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 30vw;
  height: auto;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
