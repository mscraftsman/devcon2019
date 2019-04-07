<template>
  <div>
    <h1 class="mega-rainbow">My Bookmarks</h1>

    <div class="page">
      <!-- <pre>{{ allSessions }} </pre> -->
      <div class="speakers-wrapper" v-if="sessionsReady">
        <div class="speaker-row header">
          <div class="time">Time</div>
          <div class="name">Topic</div>
          <div class="score">Room</div>
        </div>
        <div class="speaker-row" v-for="(id, index) in bookmarksList" :key="index">
          <div class="rank">Thursday 22:00</div>
          <div class="name">
            <router-link :to="{ name: 'session', params: { id: id } }">{{ allSessions[id].title }}</router-link>
            <span v-for="speaker in allSessions[id].speakers" :key="speaker.id">{{ speaker.name }}</span>
          </div>
          <div class="score">Educator 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ allSessions: "getSessionsById", sessionsReady: "getSessionsReady" }),
  },
  methods: {
    ...mapActions({ userCheck: "USER_STATUS" }),
  },
  mounted() {
    this.userCheck();
  },
  data() {
    return {
      bookmarksList: ["29127119-63f8-4280-bc82-965f60731543", "115650", "80862"],
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
    grid-template-columns: 200px 1fr 100px;
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
      grid-template-columns: 80px 1fr 100px;
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
      }
    }
  }
}
</style>
