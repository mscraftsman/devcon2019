<template>
  <div id="app">
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
}

html {
  background-image: url("./assets/concept.svg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
