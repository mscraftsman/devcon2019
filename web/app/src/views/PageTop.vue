<template>
  <div>
    <h1 class="mega-rainbow">Top Speakers</h1>

    <div class="page">
      <div class="speakers-wrapper" v-if="speakerReady">
        <div class="speaker-row header">
          <div class="rank">#</div>
          <div class="name">Name</div>
          <div class="score">Score</div>
        </div>
        <div class="speaker-row" v-for="(id, index) in topSpeakerList" :key="index">
          <div class="rank mega-rainbow">{{ index + 1 }}</div>
          <div class="name">
            <router-link :to="{ name: 'speaker', params: { id: id } }">{{ allSpeakers[id].fullName }}</router-link>
          </div>
          <!-- <div class="score">{{ speaker.score }}</div> -->
        </div>
      </div>
    </div>
    <h1 class="mega-rainbow">Top Sessions</h1>

    <div class="page">
      <div class="speakers-wrapper" v-if="sessionsReady">
        <div class="speaker-row header">
          <div class="rank">#</div>
          <div class="name">Topic</div>
          <div class="score">Score</div>
        </div>
        <div class="speaker-row" v-for="(id, index) in topSessionsList" :key="index">
          <div class="rank mega-rainbow">{{ index + 1 }}</div>
          <div class="name">
            <router-link :to="{ name: 'session', params: { id: id } }">{{ allSessions[id].title }}</router-link>
          </div>
          <!-- <div class="score">{{ speaker.score }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ speakerReady: "getSpeakersReady", allSpeakers: "getSpeakersById", allSessions: "getSessionsById", sessionsReady: "getSessionsReady" }),
  },
  methods: {
    ...mapActions({ userCheck: "USER_STATUS" }),
  },
  mounted() {
    // this.userCheck();
  },
  data() {
    return {
      topSpeakerList: ["6d92a0e5-248f-44d5-a35c-3eb5deecc559", "ce733ef3-e83e-4314-86dc-56e108e514df", "03699e05-2575-434d-821d-440d4f93877f"],
      topSessionsList: ["115650", "80862"],
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.speakers-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  .speaker-row {
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    line-height: 30px;
    font-size: 25px;
    line-height: 40px;

    &.header {
      font-weight: bolder;
      font-size: 30px;
    }

    .rank {
      font-style: oblique;
      margin-left: 20px;
      // background: var(--color-red-light);
      display: flex;
      align-self: center;
      justify-content: center;
      height: 40px;
      font-size: 40px;
      transform: skewX(-15deg);
    }

    .score {
      display: flex;
      align-items: center;
    }

    .name {
      // padding: 10px 0;
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: $tablet) {
  .speakers-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    .speaker-row {
      display: grid;
      grid-template-columns: 80px 1fr 100px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      font-size: 15px;
      line-height: 18px;

      &.header {
        font-weight: bolder;
        font-size: 20px;
      }

      .rank {
        font-style: normal;
        font-weight: bold;
        margin-left: 10px;
        background: transparent;
        display: flex;
        align-self: top;
        justify-content: center;
        height: auto;
        transform: skewX(0deg);
      }

      .name {
        padding: 10px 0;
        padding-left: 20px;
      }
    }
  }
}
</style>
