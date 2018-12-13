<template>
  <div class="full-section-container" id="venues">
    <div class="section-title-wrapper">
      <small>Working hard can be fun</small>
      <h2>Venues</h2>
    </div>
    <div class="section-description-wrapper">
    </div>
  </div>
</template>
<script>
  import NoSSR from 'vue-no-ssr'

  export default {
    components: {
      'no-ssr': NoSSR
    }
  }
</script>
<style lang="scss" scoped>
  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];
  }

  * {
    box-sizing: border-box;
  }

</style>
