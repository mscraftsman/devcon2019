<template>
  <div>
    <h1 class="mega-rainbow">Sessions</h1>
    <div class="page-all-sessions">
      <div class="tabs-container">
        <div class="right-wrapper">
          <div class="tab-items" :class="{active : getDay(group.groupName) === active}"
            @click="setActive(group.groupName)" v-for="group in sessions" :key="group.groupId"
            :label="getDay(group.groupName)">{{getDay(group.groupName)}}</div>
        </div>
      </div>
      <div class="tabs-content">
        <transition name="fade" mode="out-in">
          <div class="tabs-panel-content" v-if="getDay(group.groupName) === active"
            ref="content" v-for="group in sessions" :key="group.groupId">
            <div class="session-panes" v-for="session in group.sessions" :key="session.id">
              <router-link class="session-row" @click.native="setScrollPosition()"
                :to="{ name: 'session',  params: { id: session.id }}">
                <div class="date-time">{{ time(session.startsAt) }} - {{
                  time(session.endsAt) }}</div>
                <div class="session-title">{{ session.title }}</div>
                <div class="session-author">{{ session.speakers[0].name }} - {{
                  session.room }}</div>
              </router-link>
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
  methods: {
    time: timeHelper,
    getDay: function(str) {
      return str.split(",")[0];
    },
    setActive: function(str) {
      // Keep Track of previous Page Sessions activity in current Session
      this.$store.commit("SET_PAGESESSIONS_ACTIVE", str.split(",")[0]);
    },
    setScrollPosition: function() {
      // Keep Track of previous scroll position
      this.$store.commit(
        "SET_PAGESESSIONS_SCROLL_POSITION",
        this.$refs["content"][0].scrollTop
      );
    }
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      active: "getPageSessionsActive",
      scrollPosition: "getPageSessionsScrollPosition"
    })
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
  grid-template-rows: 60px calc(100vh - 50px - 66px);
}
.tabs-container,
.tabs-content {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  //   box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.tabs-container {
  display: flex;
  justify-content: center;
  background: white;
  .left-wrapper {
    width: 40%;
    height: 60px;
    display: flex;
    align-items: center;
    .back {
      a {
        color: var(--color-white);
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-blue);
        height: 40px;
        width: 40px;
        border-radius: 50px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        img {
          height: 20px;
          padding-right: 5px;
        }
      }
    }
  }
  .right-wrapper {
    width: 60%;
    display: flex;
    .tab-items {
      font-size: 18px;
      height: 60px;
      text-transform: uppercase;
      box-sizing: border-box;
      cursor: pointer;
      width: 33.3%;
      &.active {
        border-bottom: 5px solid var(--color-blue);
      }
    }
  }
}
.tabs-content {
  .tabs-panel-content {
    // display: none
    color: white;
    height: 100%;
    overflow-y: scroll;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
}
.tabs-container {
  text-transform: uppercase;
  border-bottom: 0;
  // background: linear-gradient(
  //   135deg,
  //   rgba(49, 232, 183, 1) 0%,
  //   rgba(40, 71, 217, 1) 70%
  // );
  background: transparent;
  .tab-items {
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
  }
}
.tabs-panel-content {
  background: var(--color-white);
  padding: 10px 20px;
  font-family: var(--font-glacial);
  .session-panes {
    font-size: 14px;
    list-style: none;
    margin: 0;
    border-bottom: 1px solid lightgrey;
    text-align: left;
    a {
      display: block;
      padding: 8px 0;
      text-decoration: none;
      color: white;
      transition: transform 0.2s;
      display: grid;
      grid-template-areas:
        "title  time"
        "author time";
      grid-template-columns: 1fr 0.25fr;
      grid-auto-rows: auto;
      grid-column-gap: 10px;
      &:hover {
        transition: transform 0.2s;
        transform: translateX(5px);
      }
      .date-time {
        text-transform: uppercase;
        font-size: 13px;
        font-family: var(--font-shentox);
        font-weight: 700;
        color: var(--color-blue);
        grid-area: time;
        align-items: center;
        justify-content: center;
        display: flex;
      }
      .session-title {
        padding: 5px 0;
        font-size: 20px;
        color: #333;
        font-weight: 500;
        //   text-transform: uppercase;
        grid-area: title;
      }
      .session-author {
        font-size: 14px;
        color: #333;
        text-transform: uppercase;
        font-weight: 300;
        grid-area: author;
      }
    }
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