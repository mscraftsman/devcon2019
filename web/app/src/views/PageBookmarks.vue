<template>
  <div>
    <h1 class="mega-rainbow" v-if="getBookmarks.length === 0">No bookmarks found</h1>
    <h1 class="mega-rainbow" v-else>My Bookmarks</h1>

    <div class="page">
      <div class="speakers-wrapper" v-if="sessionsReady">
        <!-- <div class="speaker-row header">
          <div class="time">Time</div>
          <div class="name">Topic</div>
          <div class="score">Room</div>
          <div class="score">Remove</div>
        </div>-->
        <div class="speaker-row" v-for="(id, index) in getBookmarks" :key="index">
          <div class="rank">
            <label for>Date/Time</label>
            <div class="value">
              <div class="day">{{ getDay(sessionInfo(id).startsAt) }} {{ time(sessionInfo(id).startsAt) }}</div>
              <!-- <div class="time"></div> -->
            </div>
          </div>
          <div class="name" v-if="sessionsReady">
            <label class="session-label">Session</label>
            <div class="value">
              <router-link class="title" :to="{ name: 'session', params: { id: id } }">{{ sessionInfo(id).title }}</router-link>
              <small>
                <span v-for="(speaker, index) in allSessions[id].speakers" :key="speaker.id">
                  {{ speaker.name }}
                  <span v-if="index > 0">,</span>
                </span>
              </small>
            </div>
          </div>
          <div class="score">
            <label for>Room</label>
            <div class="value">{{ sessionInfo(id).room }}</div>
          </div>
          <div class="actions">
            <button @click="USER_BOOKMARK_REMOVE(id)">
              <span class="svgicons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
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
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  computed: {
    ...mapGetters({ allSessions: "getSessionsById", sessionsReady: "getSessionsReady", getBookmarks: "getBookmarks" }),
  },
  methods: {
    ...mapActions({ fetchSessions: "FETCH_SESSIONS", USER_BOOKMARK_REMOVE: "USER_BOOKMARK_REMOVE" }),
    sessionInfo(id) {
      if (this.allSessions) {
        return this.allSessions[id];
      } else {
        return {
          title: "loading",
        };
      }
    },
    sortedBookmarks() {
      if (!(this.getBookmarks instanceof Array) || !(this.allSessions instanceof Array)) {
        return []
      }
      let rawBookmarks = this.getBookmarks.reduce((p, c) => {
        p[c] = true;
        return p;
      }, {});

      return this.allSessions.filter(s => s.id in rawBookmarks).sort((a, b) => (a.startsAt < b.startsAt ? -1 : 1));
    },
    time: timeHelper,
    getDay: getDayHelper,
  },
  created() {
    // this.fetchSessions();
  },
  mounted() {
  },
  data() {
    return {
      allow: true
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

.loading__container {
  text-align: center;

  h1 {
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: white;
  }
}

.trick {
  // never forget.
  // 1 hour lost because of javascript. tried to fix it using css.
  display: block;
  width: 1px;
  height: 1px;
}
.speakers-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  .speaker-row {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.2fr 70px;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    padding: 20px;
    border-radius: 5px;
    grid-gap: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }

    label {
      width: 100%;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 12px;
      display: block;
      color: $color-blue-light;
      margin-bottom: 10px;
    }

    .value {
      width: 100%;
      display: block;
      font-size: 16px;

      .title {
        font-weight: 700;
        margin-bottom: 5px;
        display: inline-block;
      }

      .day {
        font-size: 16px;
        margin-bottom: 5px;
      }

      .time {
        font-size: 13px;
      }
    }

    &.header {
      font-weight: bolder;
      font-size: 20px;
    }

    .rank {
      //   margin-left: 10px;
      // background: var(--color-red-light);
      // display: flex;
      // align-self: center;
      // justify-content: center;
      // height: 40px;
      font-size: 20px;
    }

    .score {
      // display: flex;
      // align-items: center;
      // justify-content: center;
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      button {
        border: 0;
        background: $color-red;
        border-radius: 40px;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
        transition: all 0.2s ease-in-out;
        outline: none;

        svg {
          width: 30px;
        }

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .name {
      // padding: 10px 0;
      // padding-left: 20px;

      small {
        color: $color-blue-light;
        text-transform: initial;
        color: rgba(255, 255, 255, 0.5);
        font-size: 13px;
      }

      span {
        font-size: 15px;
        display: block;
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
      grid-template-rows: 1fr auto;
      grid-template-columns: 1fr 1fr 50px;

      .session-label {
        display: none;
      }

      .rank {
        font-size: 15px;
      }

      &.header {
        font-weight: bolder;
        font-size: 20px;
      }

      .rank {
        display: flex;
        flex-direction: column;
        align-self: top;
        justify-content: flex-start;
        height: auto;
        transform: skewX(0deg);
      }

      .name {
        padding: 10px 0;
        grid-row: 1 / 2;
        grid-column: 1 / 4;
        text-align: center;
        font-size: 20px;
        flex-direction: column;
      }

      .actions {
        justify-content: flex-end;

        button {
        }
      }
    }
  }
}

.loader-spinner,
.loader-spinner:after {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.loader-spinner {
  margin: 20px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 7px solid rgba(255, 255, 255, 0.2);
  border-right: 7px solid rgba(255, 255, 255, 0.2);
  border-bottom: 7px solid rgba(255, 255, 255, 0.2);
  border-left: 7px solid #ffffff;
  transform: translateZ(0);
  animation: loader 0.6s infinite linear;
  margin-bottom: 0;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
