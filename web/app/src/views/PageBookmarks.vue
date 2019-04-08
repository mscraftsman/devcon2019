<template>
  <div>
    <h1 class="mega-rainbow">My Bookmarks</h1>

    <div class="page">
      <div class="speakers-wrapper" v-if="sessionsReady">
        <!-- <div class="speaker-row header">
          <div class="time">Time</div>
          <div class="name">Topic</div>
          <div class="score">Room</div>
          <div class="score">Remove</div>
        </div>-->
        <!-- <pre>{{ sortedBookmarks() }}</pre> -->
        <div class="speaker-row" v-for="(id, index) in getBookmarks" :key="index">
          <div class="rank">Thursday 22:00</div>
          <div class="name">
            <router-link :to="{ name: 'session', params: { id: id } }">{{ sessionInfo(id).title }}</router-link>
            <span v-for="speaker in allSessions[id].speakers" :key="speaker.id">{{ speaker.name }}</span>
          </div>
          <div class="score">Educator 1</div>
          <div class="actions">
            <span class="svgicons" @click="USER_BOOKMARK_REMOVE(id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Loading</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ allSessions: "getSessionsById", sessionsReady: "getSessionsReady", getBookmarks: "getBookmarks" })
  },
  methods: {
    ...mapActions({ userCheck: "USER_STATUS", fetchSessions: "FETCH_SESSIONS", USER_BOOKMARK_REMOVE: "USER_BOOKMARK_REMOVE" }),
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
      let rawBookmarks = this.getBookmarks.reduce((p, c) => { p[c] = true; return p }, {});
      return this.allSessions.filter(s => s.id in rawBookmarks).sort((a, b) => a.startsAt < b.startsAt ? -1 : 1);
    }
  },
  created() {
    // this.fetchSessions();
  },
  mounted() {
    this.userCheck();
  },
  data() {
    return {
      bookmarksList: ["115650", "80862"],
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
    grid-template-columns: 200px 1fr 100px 100px;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    line-height: 30px;
    font-size: 20px;
    line-height: 40px;

    &.header {
      font-weight: bolder;
      font-size: 20px;
    }

    .rank {
      //   margin-left: 10px;
      // background: var(--color-red-light);
      display: flex;
      align-self: center;
      justify-content: center;
      height: 40px;
      font-size: 20px;
    }

    .score {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .name {
      // padding: 10px 0;
      padding-left: 20px;

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
      grid-template-columns: 1fr 1fr 1fr;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      font-size: 15px;
      line-height: 18px;

      .rank {
        font-size: 15px;
      }

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
        grid-row: 1 / 2;
        grid-column: 1 / 4;
        text-align: center;
        font-size: 20px;
      }
    }
  }
}
</style>
