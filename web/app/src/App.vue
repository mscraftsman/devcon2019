<template>
  <div id="app">
    <SharedNavigation />
    <router-view/>
  </div>
</template>
<script>
import SharedNavigation from "@/components/shared/SharedNavigation.vue";
export default {
  components: {
    SharedNavigation
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
