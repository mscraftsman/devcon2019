<template>
  <div class="page page-session">
    <div class="back-button-wrapper">
      <a @click="$router.go(-1);" class="back">
        <img src="../assets/back.svg" alt> Back
      </a>
    </div>
    <div class="page-content">{{ speaker }}</div>
    <div class="page-content" v-if="speaker">
      <!-- <span>{{id}}</span> -->
      <div class="session-title">{{ speaker.fullName }}</div>

      <div class="speakers-wrapper" v-if="speakers">
        <div class="speaker-wrapper">
          <div class="avatar">
            <img :src="speaker.profilePicture" alt>
          </div>
        </div>
      </div>

      <div class="descriptions-row">
        <div class="des-wrap" v-if="speaker.tagLine">
          <p>{{ speaker.tagLine }}</p>
        </div>
      </div>

      <div class="description-text">
        <p>{{ speaker.bio }}</p>
      </div>

      <div class="descriptions-row">
        <div class="des-wrap">
          <p>Speaking about :</p>
        </div>
      </div>

      <div class="session-title" v-for="session in speaker.sessions" :key="session.name">
        <router-link :to="{ name: 'session', params: { id: session.id } }">{{
          session.name }}</router-link>
      </div>
    </div>
    <div class="page-content" v-else>finding speaker details..</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import moment from "moment";
import { FETCH_SESSIONS, FETCH_SPEAKERS } from "@/store";

export default {
  methods: {
    ...mapActions([FETCH_SESSIONS, FETCH_SPEAKERS])
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    }),
    id: function() {
      return this.$route.params.id;
    },
    speaker: function() {
      if (this.speakers.length === 0) {
        this.FETCH_SPEAKERS();
      }
      let theSpeaker = this.speakers.find(speaker => speaker.id === this.id);
      return theSpeaker;
    },
    session: function() {
      let sessions = this.sessions
        .map(groups => groups.sessions)
        .reduce(function(acc, curr) {
          return [...acc, ...curr];
        }, []);
      let session = sessions.find(sess => (sess.id = this.id));
      return session;
    }
  },
  beforeMount() {
    if (this.$store.state.sessions.length === 0) {
      // console.error("no sessions found");
      this.FETCH_SPEAKERS();
      this.FETCH_SESSIONS();
    } else {
      // console.info("sessions found !");
    }
  }
};
</script>

<style lang="scss" scoped>
.page-session {
  display: grid;
  grid-template-areas:
    "back back"
    "session session"
    "footer footer";
  grid-template-columns: 100px 1fr;
  grid-template-rows: 70px auto;
  grid-auto-rows: auto;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

a.back {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

.back-button-wrapper {
  --backsize: 70px;
  // grid-area: back;
  text-align: left;
  // margin-top: 5px;
  transform: translateX(calc(var(--backsize) / 2 * -1))
    translateY(var(--backsize));
  position: absolute;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    height: var(--backsize);
    width: var(--backsize);
    padding: calc(var(--backsize) / 4);
    // background: var(--color-blue);
    color: var(--color-blue);
    background: white;
    border-radius: var(--backsize) 0 0 var(--backsize);
    padding-left: calc(var(--backsize) / 3.5);
    text-align: center;
    transition: transform 0.2s ease-in-out;
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

    img {
      height: 100%;
      margin-right: 15px;
    }
  }

  &:hover {
    a {
      transform: translateX(-5px);
      transition: transform 0.2s ease-in-out;
    }
  }
}

@media screen and (max-width: 1000px) {
  .back-button-wrapper {
    position: static;
    grid-area: back;
    transform: unset;
    padding: unset;
    a {
      width: auto;
      border-radius: unset;
      // padding-left: ;
    }
  }
}

.page-content {
  grid-area: session;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.session-title {
  color: #333333;
  text-transform: uppercase;
  font-family: var(--font-glacial);
  font-size: 40px;
  font-weight: 700;
  margin: 0 auto;
  padding: 30px 5vw;
  text-align: center;
  a {
    text-decoration: none;
    color: var(--color-blue);
    font-size: 20px;
  }
}

.speakers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .speaker-wrapper {
    --width: 200px;
    display: grid;
    width: 200px;
    grid-template-areas: "avatar name";
    grid-template-columns: var(--width) 1fr;
    align-items: center;
    grid-gap: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    font-family: var(--font-shentox);
    font-weight: 500;
    text-transform: uppercase;

    &:last-child {
      margin-right: 0;
    }

    .avatar {
      grid-area: avatar;
      width: var(--width);
      height: var(--width);
      border-radius: var(--width);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;

      img {
        width: var(--width);
        height: var(--width);
        border-radius: var(--width);
        display: block;
        object-position: 50% 50%;
        object-fit: cover;
      }
    }

    p {
      grid-area: name;
      text-align: left;
      font-size: 15px;
      color: var(--color-blue);
      font-weight: 700;
    }
  }
}

.descriptions-row {
  background: var(--color-blue);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  .des-wrap {
    // width: 33.3%;
    margin-right: 10px;
    color: white;
    font-family: var(--font-glacial);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    // height: 50px;

    &:last-child {
      margin-right: 0;
    }

    &.rate {
      padding: 0;

      a {
        background: var(--color-green);
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 20px;
        color: var(--color-blue);
      }
    }

    label {
      margin-right: 10px;

      img {
        width: 20px;
      }
    }

    p {
      margin: 0;
    }
  }
}

.description-text {
  padding: 20px;

  .back {
  }

  p {
    font-family: var(--font-glacial);
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
  }
}

.button-wrappers {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .back {
    grid-column: 1 / 2;
  }
}

.footer {
  grid-area: footer;
  color: black;
  text-transform: uppercase;
  font-family: var(--font-shentox);
  color: white;
  text-align: center;
  font-size: 15px;
  align-self: center;
  padding: var(--gutter) 0;
}

@media (max-width: 1000px) {
  .back-button-wrapper {
    // padding: 0 10px;
  }

  .session-title {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .descriptions-row {
    flex-wrap: wrap;

    .des-wrap {
      width: 100%;
    }
  }
}

@media (max-width: 480px) {
  .session-title {
    font-size: 25px;
  }
}
</style>
