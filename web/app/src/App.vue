<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { FETCH_SESSIONIZE_DATA } from "@/store";

export default {
  created() {
    // * We can add other requests in the array as long as they can all be ran in parallel.
    const promises = [this.FETCH_SESSIONIZE_DATA()];
    Promise.all(promises).then(this.handleDataFetched);
  },

  methods: {
    ...mapActions([FETCH_SESSIONIZE_DATA]),

    handleDataFetched() {
      // * This can be changed to something more useful when required.
      console.log("Data fetched!");
    }
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
