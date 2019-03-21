<template>
  <div class="session-card" :class="isWorkshop ? 'workshop' : ''">
    <div class="session-title">{{ session.title | truncate(80, '...') }}</div>
    <div class="session-description">{{ session.description | truncate(120, '...') }}</div>
    <div class="session-author">
      <div class="name-wrapper">
        <span class="name">{{ session.speakers[0].name }}</span>
        <br>
        <!-- <span class="alias">{{ speakersById[session.speakers[0].id].tagLine }}</span> -->
      </div>
      <div class="speaker-photo-wrapper">
        <div class="skewer">
          <img :src="getSpeakerPhoto(session.speakers[0].id)" alt>
        </div>
      </div>
      <div class="vote-button">
        <svg
          width="60"
          height="44"
          viewBox="0 0 60 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8312 5.64209C12.8657 2.28799 15.9658 0 19.4758 0H49.1606C54.5453 0 58.3923 5.21239 56.8052 10.3579L48.1688 38.3579C47.1343 41.712 44.0342 44 40.5242 44H10.8394C5.4547 44 1.60772 38.7876 3.19481 33.6421L11.8312 5.64209Z"
            fill="black"
          ></path>
          <path
            d="M20 23.1053L25.2207 28.2985C25.6108 28.6865 26.2411 28.6865 26.6312 28.2985L40 15"
            stroke="white"
            stroke-width="2"
          ></path>
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
    }),
    isWorkshop() {
      if (this.session.room == "Flying Dodo") {
        return true;
      }
    },
  },
  methods: {
    getSpeakerPhoto: function(id) {
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
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length);
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
}

.session-description {
  grid-row: 2/3;
  font-size: 14px;
  line-height: 18px;
  padding-right: 10px;
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
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    .name {
      grid-column: 1 / 2;
    }
    .alias {
      display: none;
    }

    .speaker-photo-wrapper {
      grid-column: 1 / 2;
    }
  }
}
@media (max-width: 480px) {
  .session-card {
    padding: 15px;
  }
  .session-title {
    font-size: 12x;
  }
  .session-description {
    font-size: 12px;
  }
}
</style>
