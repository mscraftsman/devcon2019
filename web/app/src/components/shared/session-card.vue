<template>
  <div class="session-card" :class="isWorkshop ? 'workshop' : ''">
    <div class="session-title" @click="goToSession(session.id)">{{ session.title | truncate(80, "...") }}</div>
    <div class="session-description" @click="goToSession(session.id)">{{ session.description | truncatePointPoint(120, "...") }}</div>
    <div class="session-author" v-if="session.speakers.length > 0">
      <div class="name-wrapper">
        <span class="name">{{ session.speakers[0].name }}</span>
        <br />
        <!-- <span class="alias">{{ speakersById[session.speakers[0].id].tagLine }}</span> -->
      </div>
      <div class="speaker-photo-wrapper">
        <div class="skewer">
          <img :src="getSpeakerPhoto(session.speakers[0].id)" alt />
        </div>
      </div>

      <div class="vote-button saved" title="Rated !" v-if="voted">
        <svg width="60" height="44" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5714 0H49.1606C54.5453 0 58.3923 5.21239 56.8052 10.3579L48.1688 38.3579C47.1343 41.712 44.0342 44 40.5242 44H0L13.5714 0Z" fill="var(--color-vote)" />
          <path
            d="M25 32H22C21.4696 32 20.9609 31.7893 20.5858 31.4142C20.2107 31.0391 20 30.5304 20 30V23C20 22.4696 20.2107 21.9609 20.5858 21.5858C20.9609 21.2107 21.4696 21 22 21H25M32 19V15C32 14.2044 31.6839 13.4413 31.1213 12.8787C30.5587 12.3161 29.7956 12 29 12L25 21V32H36.28C36.7623 32.0055 37.2304 31.8364 37.5979 31.524C37.9654 31.2116 38.2077 30.7769 38.28 30.3L39.66 21.3C39.7035 21.0134 39.6842 20.7207 39.6033 20.4423C39.5225 20.1638 39.3821 19.9063 39.1919 19.6875C39.0016 19.4687 38.7661 19.2939 38.5016 19.1752C38.2371 19.0565 37.9499 18.9967 37.66 19H32Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          />
        </svg>
      </div>
      <div class="vote-button" v-else>
        <svg width="60" height="44" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5714 0H49.1606C54.5453 0 58.3923 5.21239 56.8052 10.3579L48.1688 38.3579C47.1343 41.712 44.0342 44 40.5242 44H0L13.5714 0Z" fill="var(--color-vote)" />
          <path d="M30 32C35.5228 32 40 27.5228 40 22C40 16.4772 35.5228 12 30 12C24.4772 12 20 16.4772 20 22C20 27.5228 24.4772 32 30 32Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
          <path d="M27.09 19C27.3251 18.3317 27.7891 17.7681 28.4 17.4091C29.0108 17.0501 29.7289 16.9189 30.4272 17.0387C31.1255 17.1585 31.7588 17.5215 32.2151 18.0635C32.6713 18.6055 32.9211 19.2915 32.92 20C32.92 22 29.92 23 29.92 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
          <circle cx="30" cy="26" r="1" fill="white" />
        </svg>
      </div>
    </div>

    <div class="bookmark-indicator" v-if="bookmarked">
      <div class="svgicon">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 52.3157L19.5041 43.2392C18.3003 42.3984 16.6997 42.3985 15.4959 43.2392L16.7437 45.0258L15.4959 43.2392L2.5 52.3157V2.5H32.5V52.3157Z" stroke="var(--color)" fill="var(--color-fill)" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel" />
        </svg>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["session"],
  mounted() {
    // console.log(this.session);
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers",
      speakersById: "getSpeakersById",
      user: "getUser",
      getBookmarks: "getBookmarks",
      getMyFeedbacks: "getMyFeedbacks",
    }),
    isWorkshop() {
      if (this.session.room == "Flying Dodo") {
        return true;
      }
    },
    bookmarked: function () {
      if (this.getBookmarks) {
        return this.getBookmarks.includes(this.session.id);
      }

      return false;
    },
    voted: function () {
      if (this.getMyFeedbacks instanceof Array) {
        return this.getMyFeedbacks.findIndex(f => f.session_id === this.session.id) !== -1;
      }
      return false;
    },
  },
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS", "USER_LOGIN", "USER_BOOKMARK_ADD", "USER_BOOKMARK_REMOVE"]),
    getSpeakerPhoto: function (id) {
      if (typeof id === "undefined") {
        return "";
      }
      let theSpeaker = this.speakers.find(speaker => speaker.id === id);
      if (typeof theSpeaker === "undefined") {
        return "";
      } else {
        return theSpeaker.profilePicture;
      }
    },
    goToSession: function (sessionId) {
      // :to="{ name: 'session', params: { id: session.id } }"
      this.$router.push({ name: "session", params: { id: sessionId } });
    },
  },
  filters: {
    truncate: function (text, length, suffix) {
      if (text !== null) {
        return text.substring(0, length);
      }
      // return text.substring(0, length) + suffix;
    },
    truncatePointPoint: function (text, length, suffix) {
      if (text !== null) {
        return text.substring(0, length) + "...";
      }
      // return text.substring(0, length) + suffix;
    },
  },
};
</script>


<style lang="scss" scoped>
.session-card {
  display: grid;
  background: white;
  color: black;
  border-radius: 20px;
  padding: 20px 0px 0 20px;
  text-decoration: none;
  // grid-template-rows: 50px 100px 50px;
  transition: all 0.1s ease-in;
  width: 100%;
  position: relative;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    // transform: scale(1.2);
    transition: all 0.3s ease-out;
  }
}

.session-title {
  color: var(--color-main);
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
  grid-row: 1/2;
  padding-right: 10px;
  cursor: pointer;
  z-index: 100;
  text-shadow: 0 0 5px #fff;
}

.session-description {
  grid-row: 2/3;
  font-size: 14px;
  line-height: 18added px;
  padding-right: 10px;
  cursor: pointer;
}

.bookmark-indicator {
  position: absolute;
  z-index: 50;
  right: 10px;
  top: -6px;
  --color: none;
  --color-fill: var(--color-red-light);
}

.session-author {
  grid-row: 3/4;
  align-self: end;
  display: grid;
  grid-template-columns: 2fr 60px 22px;
  // grid-template-rows: 22px 22px;
  position: relative;
  height: 44px;

  .name-wrapper {
    grid-column: 1 / 2;
  }

  .name {
    color: #ff6a45;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    // grid-column: 1 / 2;
  }
  .alias {
    color: grey;
    text-transform: uppercase;
    font-size: 10px;
    padding-top: 3px;
    // grid-column: 1 / 2;
    // overflow: hidden;
    text-overflow: ellipsis;
  }

  .speaker-photo-wrapper {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    mask: url("../../assets/card-author-frame.svg");
    mask-repeat: no-repeat;
    position: relative;

    .skewer {
      // transform: skewX(-15deg);
    }
    img {
      // transform: skewX(15deg);
      // border-radius: 10px;
      width: 100%;
      height: 44px;
      object-fit: cover;
      object-position: center top;
    }
  }

  .vote-button {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    position: absolute;
    left: 44px;
    top: 0;
    --color-vote: rgba(145, 145, 145, 0.7);
    // cursor: pointer;

    // &:hover {
    //   --color-vote: rgb(29, 29, 29);
    // }

    &.saved {
      --color-vote: var(--color-green);

      // &:hover {
      //   --color-vote: rgb(104, 3, 3);
      // }
    }
  }
}

.session-card.workshop {
  .session-title {
    grid-row: 1/3;
  }
  .session-description {
    display: none;
  }

  .session-author {
    grid-row: 3/4;
    align-self: end;
    display: grid;
    // grid-template-columns: 1fr;
    // grid-template-rows: auto;

    .name {
      // grid-column: 1 / 2;
    }
    .alias {
      display: none;
    }

    .speaker-photo-wrapper {
      // grid-column: 1 / 2;
    }
  }
}

@media (max-width: 768px) {
  .session-author {
    grid-template-columns: 1fr 66px 22px 1fr;
    padding-bottom: 0;
    align-self: center;
    grid-template-areas: "title title title title" ". photo vote .";
    height: auto;
    grid-row-gap: 10px;
  }
  .session-description {
    font-size: 15px !important;
  }
  .name-wrapper {
    grid-area: title !important;
    grid-column: auto;
    text-align: center;

    .name {
      font-size: 18px !important;
    }
  }
  .speaker-photo-wrapper {
    grid-area: photo !important;

    img {
      width: 89% !important;
    }
  }
  .vote-button {
    grid-area: vote !important;
    left: -22px !important;
  }
  .session-card {
    padding: 15px;
  }
  .session-title {
    font-size: 12x;
  }
  .session-description {
    font-size: 12px;
  }
  .session-author {
    .name {
      font-size: 9px;
      letter-spacing: 0;
    }
  }
}

@media (max-width: 480px) {
  .name-wrapper {
    .name {
      font-size: 12px !important;
    }
  }
  .session-description {
    font-size: 12px !important;
  }
}
</style>
