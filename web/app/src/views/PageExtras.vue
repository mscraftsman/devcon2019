<template>
  <div class="container">
    <h1 class="mega-rainbow">Extra Activities</h1>

    <extra-community></extra-community>
    <extra-gdg></extra-gdg>
    <!-- <extra-lugm></extra-lugm> -->
    <!-- <extra-maker></extra-maker> -->
    <!-- <extra-symfony></extra-symfony> -->
    <sponsorship></sponsorship>
  </div>
</template>

<script>
import extraGdg from "@/components/extras/extra-gdg.vue";
import extraLugm from "@/components/extras/extra-lugm.vue";
import extraMaker from "@/components/extras/extra-maker.vue";
import extraCommunity from "@/components/extras/extra-community.vue";
import sponsorship from "@/components/extras/sponsorship.vue";

export default {
  components: {
    extraGdg,
    extraLugm,
    extraMaker,
    extraCommunity,
    sponsorship
  }
};
</script>

<style lang="scss">
.full-section-container {
  display: grid;
  grid-template-columns:
    [full-start] 1fr [container-start] minmax(300px, 1300px)
    [container-end] 1fr [full-end];
  background: transparent;
  background-size: cover, cover;

  .container {
    grid-column: container;
    padding: calc(var(--gutter) * 2) calc(var(--gutter) / 2);
  }
}
</style>
