<template>
  <div>
    <h1 class="mega-rainbow">Sessions</h1>
    <div class="loader" v-if="sessions == ''">
      <svg
        width="135"
        height="135"
        viewBox="0 0 135 135"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
      >
        <path
          d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="-360 67 67"
            dur="2.5s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
        <path
          d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="360 67 67"
            dur="8s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </div>
    <div v-else class="page-all-sessions">
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
              <div class="time-bar">
                <div class="time-value">&nbsp;</div>
                <div class="time-value">
                  9:00
                  <span>AM</span>
                </div>
                <div class="time-value">
                  9:30
                  <span>AM</span>
                </div>
                <div class="time-value">
                  10:00
                  <span>AM</span>
                </div>
                <div class="time-value">
                  10:30
                  <span>AM</span>
                </div>
                <div class="time-value">
                  11:00
                  <span>AM</span>
                </div>
                <div class="time-value">
                  11:30
                  <span>AM</span>
                </div>
                <div class="time-value">
                  12:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  12:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  1:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  1:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  2:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  2:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  3:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  3:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  4:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  4:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  5:00
                  <span>PM</span>
                </div>
                <div class="time-value">
                  5:30
                  <span>PM</span>
                </div>
                <div class="time-value">
                  6:00
                  <span>PM</span>
                </div>
              </div>
              <div
                :class="'session-panes room-wrapper  ' + room.className"
                v-for="room in rooms"
                :key="'room_'+ room.className"
              >
                <div :class="'room-wrapper ' + room.className">
                  <div class="room-title">{{ room.label }}</div>
                  <router-link
                    @click.native="setScrollPosition()"
                    :to="{ name: 'session',  params: { id: session.id }}"
                    v-for="session in getSessionsFor(index, room.label)"
                    :key="room + session.id"
                    v-bind:style="{gridRow: timeToText(session.startsAt) + ' / span 2' }"
                    class="session-card-wrapper"
                  >
                    <session-card :session="session"/>
                  </router-link>
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
import { time as timeHelper, timeSafe as timeToText } from "@/helpers";
import SessionCard from "@/components/shared/session-card.vue";

export default {
  mounted() {
    // Keep Track of Scroll Position
    if (this.sessions.length !== 0) {
      this.$refs["content"][0].scrollTop = this.scrollPosition;
    }

    this.FETCH_SPEAKERS();
  },
  data() {
    return {
      // rooms: ["Educator 1", "Educator 2", "Accelerator", "Flying Dodo"]
      rooms: [{ label: "Educator 1", className: "educatorone" }, { label: "Educator 2", className: "educatortwo" }, { label: "Accelarator", className: "accelarator" }, { label: "Flying Dodo", className: "flyingdodo" }],
    };
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length);
      // return text.substring(0, length) + suffix;
    },
  },
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS"]),

    time: timeHelper,
    timeToText: timeToText,
    sampleTime: function() {
      return "900AM";
    },
    getDay: function(str) {
      return str.split(",")[0];
    },
    setActive: function(str) {
      // Keep Track of previous Page Sessions activity in current Session
      this.$store.commit("SET_PAGESESSIONS_ACTIVE", str.split(",")[0]);
    },
    setScrollPosition: function() {
      // Keep Track of previous scroll position
      this.$store.commit("SET_PAGESESSIONS_SCROLL_POSITION", this.$refs["content"][0].scrollTop);
    },
    getSessionsFor: function(day, room) {
      // console.log(day + room);
      return this.sessions[day].sessions.filter(session => {
        if (session.room === room) {
          return session;
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      sessions: "getSessionsByRoom",
      active: "getPageSessionsActive",
      scrollPosition: "getPageSessionsScrollPosition",
    }),
  },
  components: {
    SessionCard,
  },
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

.loader {
  display: flex;
  align-content: center;
  justify-content: center;
}
.page-all-sessions {
  display: grid;
  // grid-template-rows: 60px calc(100vh - 50px - 66px);
}
.tabs-container,
.tabs-content {
  max-width: 1300px;
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
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
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
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
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
  grid-template-columns: 100px repeat(3, 1fr) 100px;
  grid-column-gap: 20px;
}

.time-bar {
  .time-value {
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-top: 1px solid #4d56a4;

    &:first-child {
      border-top: none;
    }
    &:nth-child(odd) {
      // border-top: none;
      opacity: 0.3;
    }
  }
}
.room-wrapper,
.time-bar {
  color: black;
  display: grid;
  grid-template-rows: 80px 100px;
  grid-template-columns: 1fr;
  grid-auto-rows: 100px;
  grid-row-gap: 30px;

  grid-template-areas:
    "title"
    "AM900"
    "AM930"
    "AM1000"
    "AM1030"
    "AM1100"
    "AM1130"
    "PM1200"
    "PM1230"
    "PM100"
    "PM130"
    "PM200"
    "PM230"
    "PM300"
    "PM330"
    "PM400"
    "PM430"
    "PM500"
    "PM530"
    "PM600";

  // grid-template-rows: [title-start] 50px [title-end AM900-start] 50px [AM900-end AM930-start] 50px [AM930-end AM1000-start] 50px [AM1000-end AM1030-start] 50px [AM1030-end AM1100-start] 50px [AM1100-end AM1130-start] 50px [AM1130-end AM1200-start] 50px [AM1200-end AM1230-start] 50px [AM1230-end PM100-start] 50px [PM100-end PM130-start] 50px [PM130-end PM200-start] 50px [PM200-end PM230-start] 50px [PM230-end PM300-start] 50px [PM300-end PM330-start] 50px [PM330-end PM400-start] 50px [PM400-end PM430-start] 50px [PM430-end PM500-start] 50px [PM500-end];
  .room-title {
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    border-right: 1px solid white;
    padding: 20px 0;
    grid-row: title;
  }

  &:last-child {
    margin-right: 0;

    .room-title {
      border-right: 0;
    }
  }
}

.session-card-wrapper {
  display: flex;
  row-span: 2;
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