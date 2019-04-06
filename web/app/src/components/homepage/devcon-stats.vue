<template>
  <div class="home-component devcon-stats-wrapper">
    <div class="container">
      <div class="devcon-stats-container">
        <div class="stat-wrapper" v-if="getStats" v-for="(stats, index) in getStats" :key="index">
          <div class="number">{{ stats.number }}</div>
          <div class="label">{{ stats.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { FETCH_STATS } from "@/store";

export default {
  created() {
    this.FETCH_STATS();
  },
  computed: {
    ...mapGetters(["getStats"]),
  },

  methods: {
    ...mapActions([FETCH_STATS]),
  },
};
</script>

<style lang="scss" scoped>
.devcon-stats-wrapper {
  padding: 100px 0;
  @media screen and (max-width: $tablet) {
    padding: 30px 0;
  }
}
.devcon-stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 100px;
  justify-items: center;

  .stat-wrapper {
    position: relative;
    padding: 30px 0 0 0;
    --width: 200px;
    width: var(--width);

    &:before {
      content: " ";
      width: var(--width);
      height: 140px;
      // left: 50%;
      top: 0px;
      left: 0;
      margin-left: -calc(var(--width) / 2);

      position: absolute;
      background-image: url("../../assets/menu-hover.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      transform: translate(0px, 10px);
      opacity: 0.5;
      transition: all 0.5s ease-out;
    }
    &:after {
      content: " ";
      --width: 100px;
      width: var(--width);
      height: 40px;
      left: calc(var(--width) * 1.2);
      top: 0px;
      // left: 0;
      // margin-left: -calc(var(--width) / 2);

      position: absolute;
      background-image: url("../../assets/menu-hover.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      transform: translate(0px, 10px);
      opacity: 0.5;
      transition: all 0.5s ease-out;
    }

    .number {
      font-size: 60px;
      font-weight: 900;
      text-align: center;
      overflow-wrap: break-word;
    }
    .label {
      text-align: center;
      font-size: 21px;
      text-transform: uppercase;
    }
  }
}
</style>
