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
html,
body {
  min-height: 100%;
}

html {
  background-color: $color-main;
}
</style>
