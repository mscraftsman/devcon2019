<template>
  <div>
    <h1 class="mega-rainbow">Sessions</h1>
    <div class="page-all-sessions">
      <div class="tabs-container">
        <div class="right-wrapper">
          <div
            class="tab-items"
            :class="{active : getDay(group.groupName) === active}"
            @click="setActive(group.groupName)"
            v-for="group in sessions"
            :key="group.groupId"
            :label="getDay(group.groupName)"
          >
            <div class="tab-label">{{getDay(group.groupName)}}</div>
          </div>
        </div>
      </div>

      <div class="tabs-content">
        <transition name="fade" mode="out-in">
          <div
            class="tabs-panel-content"
            v-if="getDay(group.groupName) === active"
            ref="content"
            v-for="(group, index, key) in sessions"
            :key="group.groupId"
          >
            <div class="room-container">
              <div
                class="session-panesroom-wrapper educator-one"
                v-for="room in rooms"
                :key="'room_'+ room"
              >
                <!-- {{ sessionInRoom_Educator }} -->
                <div class="room-wrapper educatorone">
                  <div
                    class="session-card"
                    v-for="session in getSessionsFor(index, room)"
                    :key="room + session.id"
                  >
                    <router-link
                      @click.native="setScrollPosition()"
                      :to="{ name: 'session',  params: { id: session.id }}"
                    >
                      <!-- <div class="date-time">
                        {{ time(session.startsAt) }} - {{
                        time(session.endsAt) }}
                      </div>-->
                      <div class="session-title">{{ session.title }}</div>
                      <div
                        class="session-description"
                      >{{ session.description | truncate(120, '...') }}</div>
                      <div class="session-author">
                        <div class="name">{{ session.speakers[0].name }}</div>
                        <!-- <div class="alias">{{ session.speakers[0].name }}</div> -->
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { time as timeHelper } from "@/helpers";

export default {
  mounted() {
    // Keep Track of Scroll Position
    if (this.sessions.length !== 0) {
      this.$refs["content"][0].scrollTop = this.scrollPosition;
    }
  },
  data() {
    return {
      rooms: ["Educator 1", "Educator 2", "Accelerator", "Flying Dodo"]
    }
  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
  },
  methods: {
    time: timeHelper,
    getDay: function (str) {
      return str.split(",")[0];
    },
    setActive: function (str) {
      // Keep Track of previous Page Sessions activity in current Session
      this.$store.commit("SET_PAGESESSIONS_ACTIVE", str.split(",")[0]);
    },
    setScrollPosition: function () {
      // Keep Track of previous scroll position
      this.$store.commit(
        "SET_PAGESESSIONS_SCROLL_POSITION",
        this.$refs["content"][0].scrollTop
      );
    },
    getSessionsFor: function (day, room) {
      console.log(day + room);
      return this.sessions[day].sessions.filter(session => {
        if (session.room === room) {
          return session
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      sessions: "getSessionsByRoom",
      active: "getPageSessionsActive",
      scrollPosition: "getPageSessionsScrollPosition"
    }),
    sessionInRoom_Educator() {
      let educatorSessions = this.sessions.map(day => {
        return day.sessions.filter(session => {
          if (session.room === 'Educator 1') {
            return session
          }
        })
      })

      console.log(educatorSessions);
      return this.sessions
    }
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.page-all-sessions {
  display: grid;
  // grid-template-rows: 60px calc(100vh - 50px - 66px);
}
.tabs-container,
.tabs-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  //   box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.session-row {
  color: black;
}
.tabs-container {
  --skew-angle: 15deg;
  display: flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  transform: skewX(calc(-1 * var(--skew-angle)));
  text-transform: uppercase;

  .right-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tab-items {
      box-sizing: border-box;
      cursor: pointer;
      width: 33.3%;
      opacity: 0.7;

      border-radius: 5px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      );
      transition: all 0.2s ease-in;
      background: transparent;
      border: 0;
      color: var(--color-white);
      font-family: var(--font-shentox);
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .cursor {
        background: transparent;
      }
      &:hover {
        transition: all 0.2s ease-out;
        opacity: 1;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.2)
        );
      }
      &.active {
        opacity: 1;
        background: linear-gradient(90deg, #fdc990, #c92b33);
      }

      .tab-label {
        transform: skewX(var(--skew-angle));
        font-size: 18px;
        font-weight: 900;
        height: 60px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      }
    }
  }
}
.tabs-content {
  margin-top: 30px;
  .tabs-panel-content {
    // display: none
    // color: white;
    // height: 100%;
    // overflow-y: scroll;
    // box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
}
.tabs-container {
  .tab-items {
  }
}
.tabs-panel-content {
  // background: var(--color-white);
  // padding: 10px 20px;
  font-family: var(--font-glacial);
}

.room-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}
.room-wrapper {
  color: black;
  display: grid;
  grid-auto-rows: 200px;
  grid-row-gap: 20px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}

.session-card {
  display: flex;
  a {
    display: grid;
    background: white;
    color: black;
    border-radius: 20px;
    padding: 20px;

    grid-template-rows: 1fr 1.5fr 1fr;
    // height: 100%;
  }
  .session-title {
    color: var(--color-main);
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
    grid-row: 1/2;
  }
  .session-description {
    grid-row: 2/3;
  }
  .session-author {
    .name {
      color: #ff6a45;
    }
    .alias {
    }
    grid-row: 3/4;
  }
}
@media (max-width: 1000px) {
  .tabs-container {
    .left-wrapper {
      padding-left: 10px;
    }
  }
}
@media (max-width: 480px) {
  .tabs-panel-content {
    padding: 0 10px;
  }
  .tabs-panel-content {
    .session-panes {
      a {
        grid-template-areas: "time" "title" "author";
        grid-template-columns: 1fr;
        .date-time {
          justify-content: flex-start;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .tabs-container {
    .left-wrapper {
      width: 20%;
    }
    .right-wrapper {
      width: 80%;
    }
  }
}
</style>