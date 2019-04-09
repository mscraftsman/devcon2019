<template>
  <div class="page page-session">
    <div class="back-button-wrapper">
      <a @click="$router.go(-1)" class="back">
        <img src="../assets/back.svg" alt> Back
      </a>
    </div>
    <div class="page-content" v-if="speaker">
      <!-- <span>{{id}}</span> -->
      <!-- <div class="session-title">{{ speaker.fullName }}</div> -->
      <h1 class="span mega-rainbow">{{ speaker.fullName }}</h1>

      <div class="speakers-wrapper" v-if="speakers">
        <div class="speaker-wrapper">
          <div class="avatar">
            <img :src="speaker.profilePicture" alt>
          </div>
        </div>
      </div>

      <h2 v-if="speaker.tagLine">
        <p>{{ speaker.tagLine }}</p>
      </h2>

      <div class="descriptions-row">
        <div class="des-wrap">
          <p>Bio</p>
        </div>
      </div>

      <div class="description-text">
        <p>{{ speaker.bio }}</p>
      </div>

      <div class="descriptions-row">
        <div class="des-wrap">
          <p>Speaking about</p>
        </div>
      </div>
      <!-- <div class="session-title">
        <a href="#">To be revealed soon... !</a>
      </div>-->

      <div class="sessions-listing">
        <div class="session-title" v-for="session in speaker.sessions" :key="session.name">
          <router-link :to="{ name: 'session', params: { id: session.id } }" v-html="session.name"></router-link>
        </div>
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
    ...mapActions([FETCH_SESSIONS, FETCH_SPEAKERS]),
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers",
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
    },
  },
  beforeMount() {
    if (this.$store.state.sessions.length === 0) {
      // console.error("no sessions found");
      this.FETCH_SPEAKERS();
      this.FETCH_SESSIONS();
    } else {
      // console.info("sessions found !");
    }
  },
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
  grid-template-rows: 90px auto;
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
  cursor: pointer;
  --backsize: 60px;
  // grid-area: back;
  text-align: left;
  // margin-top: 5px;
  transform: translateX(calc(var(--backsize) * -2)) translateY(calc(var(--backsize)));
  position: absolute;
  a {
    display: flex;
    align-items: center;
    height: var(--backsize);
    width: var(--backsize);
    padding: calc(var(--backsize) / 4);
    // background: var(--color-blue);
    // color: var(--color-red);
    color: white;
    background: rgba($color-main, 0.5);
    border-radius: 100%;
    border: 3px solid #ff4932;
    padding-left: calc(var(--backsize) / 3.5);
    text-align: center;
    transition: transform 0.2s ease-in-out;
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    img {
      height: 100%;
      // margin-right: 15px;
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
  // background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  border-radius: 15px;
  background: no-repeat left top/100% auto url(../../src/assets/bg/bg-red-small.svg), rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 50px;
    line-height: 60px;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    padding: 0 0 20px 0;
    p {
      margin: 0;
    }
  }
}

.sessions-listing {
  padding: 20px 0 40px;
}

.session-title {
  color: #333333;
  text-transform: uppercase;
  font-family: var(--font-glacial);
  font-size: 40px;
  font-weight: 700;
  margin: 0 auto;
  padding: 15px 5vw;
  // text-align: center;
  a {
    text-decoration: none;
    color: var(--color-red-light);
    font-size: 20px;
    display: flex;
    align-self: center;
    // justify-content: left;

    &:after {
      content: " →";
    }

    &:hover {
      color: white;
    }
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
      background: white;

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
  background: no-repeat center center/contain url(../../src/assets/bg/scribble.svg);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 60px;
  // background: white;

  .des-wrap {
    // width: 33.3%;
    margin-right: 10px;
    color: rgb(0, 0, 0);
    font-family: var(--font-glacial);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    // height: 50px;
    font-weight: 900;
    text-shadow: 0 0 10px #fff;

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
  padding: 10px 30px;
  color: white;

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
  .page-session {
    grid-template-rows: 5px auto;
  }

  .page-content {
    border-radius: 0;
  }

  .back-button-wrapper {
    display: none;
    .back {
      border: none;
    }

    a {
      border: none;
    }
    // padding: 0 10px;
  }

  .page-content {
    background: rgba(0, 0, 0, 0.4);
    h1 {
      font-size: 30px;
      padding: 20px;
      line-height: 35px;
    }
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
