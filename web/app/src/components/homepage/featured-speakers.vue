<template>
  <div class="home-component featured-speakers-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Featured Speakers</h2>
      <div class="featured-speakers-container">
        <SpeakerBox v-for="speaker in getFeaturedSpeakers" :key="speaker.id" :speaker="speaker" />
      </div>
      <div class="button-center">
        <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'/speakers'">
          View all speakers
        </button-waw>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/shared/speaker-box.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getFeaturedSpeakers"])
  },
  components: {
    SpeakerBox
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

.home-component {
  padding: $section-spacer 0;
}

.featured-speakers-wrapper {
  overflow: hidden;
}
.featured-speakers-container {
  // --size: 215px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 100px;
  padding-top: $gutter * 2;
  padding-bottom: $gutter * 2;
}

@media screen and (max-width: $tablet) {
  .featured-speakers-container {
    justify-items: center;
  }
}
</style>