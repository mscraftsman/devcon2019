<template>
  <section class="section-speaker">
    <div class="speaker-tile-wrapper">
      <div class="speaker-block" v-for="speaker in speakers" :key="speaker.name">
        <div class="speaker-avatar">
          <img :src="speaker.avatar" :alt="speaker.name">
        </div>
        <div class="speaker-name">{{ speaker.name }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_SPEAKER_CONTENT } from "@/constants/action-types";

export default {
  created() {
    this.$store.dispatch(FETCH_SPEAKER_CONTENT);
  },
  computed: {
    ...mapGetters({ speakers: "getSpeakers" })
  }
};
</script>



<style lang="scss" scoped>
.section-speaker {
  max-width: 1200px;
  margin: 0 auto;
}
.speaker-tile-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
}

.speaker-block {
  .speaker-avatar {
    img {
      width: 100%;
      height: auto;
    }
  }
  .speaker-name {
    text-align: center;
  }
}
</style>
