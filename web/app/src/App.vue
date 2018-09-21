<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    fetch(
      "https://raw.githubusercontent.com/mscraftsman/devcon2019/master/web/app/package.json"
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background-image: url("./assets/concept.svg");
  background-size: cover;
  background-position: center center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
