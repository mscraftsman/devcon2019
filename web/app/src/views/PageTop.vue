<template>
  <div>
    <h1 class="mega-rainbow">Top Sessions</h1>
    <div class="page">
      <div class="speakers-wrapper" v-if="sessionsReady">
        <div class="speaker-row header">
          <div class="rank">#</div>
          <div class="topic-name">Topic</div>
          <div class="score">Score</div>
        </div>
      </div>

      <transition-group name="flip-list" tag="div" class="speakers-wrapper" v-if="sessionsReady">
        <div
          class="speaker-row"
          v-for="(session, index) in getLeaderboardSessions"
          :key="session.id"
        >
          <div class="rank mega-rainbow">{{ index + 1 }}</div>
          <div class="topic-content">
            <router-link
              :to="{ name: 'session', params: { id: session.id } }"
              v-if="allSessions[session.id] !== 'undefined'"
            >{{ allSessions[session.id].title }}</router-link>
          </div>
          <div class="score value">{{ session.score }}</div>
        </div>
      </transition-group>
      <div v-else>
        <div class="loading__container">
          <div class="loader-spinner"></div>
          <h1>Loading</h1>
        </div>
      </div>
    </div>

    <h1 class="mega-rainbow">Top Speakers</h1>

    <div class="page">
      <div class="speakers-wrapper" v-if="speakerReady">
        <div class="speaker-row header">
          <div class="rank">#</div>
          <div class="speaker-name">Name</div>
          <div class="score">Score</div>
        </div>
      </div>
      <transition-group name="flip-list" tag="div" class="speakers-wrapper" v-if="sessionsReady">
        <div
          class="speaker-row"
          v-for="(speaker, index) in getLeaderboardSpeakers"
          :key="speaker.id"
          v-if="speaker.id != '' && allSpeakers[speaker.id] !== 'undefined'"
        >
          <div class="rank mega-rainbow">{{ index + 1 }}</div>
          <div class="name">
            <div
              class="speak"
              v-for="speaker in allSessions[speaker.id].speakers"
            >{{ speaker.name }}</div>
            <router-link
              :to="{ name: 'session', params: { id: speaker.id } }"
            >{{ allSessions[speaker.id].title }}</router-link>
            <!--  -->
          </div>
          <div class="score">{{ speaker.score }}</div>
        </div>
      </transition-group>
      <div v-else>
        <div class="loading__container">
          <div class="loader-spinner"></div>
          <h1>Loading</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ speakerReady: "getSpeakersReady", allSpeakers: "getSpeakersById", allSessions: "getSessionsById", sessionsReady: "getSessionsReady", getLeaderboardSessions: "getLeaderboardSessions", getLeaderboardSpeakers: "getLeaderboardSpeakers" }),
  },
  methods: {
    ...mapActions({ userCheck: "USER_STATUS", LEADERBOARD_FETCH: "LEADERBOARD_FETCH" }),
  },
  mounted() {
    // setInterval(() => {
    //   this.LEADERBOARD_FETCH();
    // }, 30000);
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
.flip-list-move {
  transition: transform 5s;
}

.page {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.speakers-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  margin-bottom: 10px;

  .speaker-row {
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    padding: 10px;
    grid-gap: 10px;

    &.header {
      font-weight: bolder;
      font-size: 20px;
      padding: 10px;
      text-transform: uppercase;
      color: $color-blue-light;
    }

    .rank {
      font-style: oblique;
      margin-left: 20px;
      // background: var(--color-red-light);
      display: flex;
      align-self: center;
      justify-content: center;
      height: 40px;
      font-size: 30px;
      transform: skewX(-15deg);
    }

    .score,
    .speaker-name,
    .topic-name {
      display: flex;
      align-items: center;

      &.value {
        justify-content: center;
      }
    }

    .topic-content {
      font-size: 17px;
      display: flex;
      align-items: center;
    }

    .name {
      // padding: 10px 0;
      font-weight: 300;
      margin-bottom: 5px;
      font-size: 15px;

      .speak {
        font-weight: 700;
        font-size: 18px;
      }
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
