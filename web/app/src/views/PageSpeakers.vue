<template>
  <div class="container">
    <h1 class="mega-rainbow">Speakers</h1>
    <div class="page-all-speakers page-session">
      <!--
        <div class="back-button-wrapper">
          <a @click="$router.go(-1)" class="back">
            <img src="../assets/back.svg" alt> Back
          </a>
        </div>
      -->
      <div class="page-content">
        <div class="speakers-wrapper" v-if="speakers">
          <router-link class="speaker-wrapper" v-for="speaker in speakers" :key="speaker.id"
            :to="{ name: 'speaker', params: { id: speaker.id } }">
            <SpeakerBox :speaker="speaker" />
            <!--
              <div class="avatar">
                <img :src="getSpeaker(speaker.id)" alt>
              </div>
              <p class="name">{{ speaker.fullName }}</p>
            -->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/shared/speaker-box.vue";
import { mapActions, mapGetters } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  methods: {
    ...mapActions(["fetchSessions", "fetchSpeakers"]),
    getSpeaker: function(id) {
      if (this.speakers.length === 0) {
        this.fetchSpeakers();
      }
      let theSpeaker = this.speakers.find(speaker => speaker.id === id);
      return theSpeaker.profilePicture;
    },
    time: timeHelper,
    getDay: getDayHelper
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    })
  },
  mounted: function() {
    this.fetchSessions();
  },
  components: {
    SpeakerBox
  }
};
</script>

<style lang="scss" scoped>
.page-session {
  display: grid;
  grid-template-areas:
    "session session"
    "footer footer";
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  // max-width: 900px;
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
  // background: white;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  // padding: 10px 100px;
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
}

.speakers-wrapper {
  //   display: flex;
  display: grid;
  grid-row-gap: 100px;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //   align-items: center;
  //   justify-content: center;
  margin-bottom: 20px;

  .speaker-wrapper {
    --width: 100px;
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
    text-decoration: none;

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

@media (max-width: 768px) {
  .page-content {
    padding: 10px 30px;
  }
  .speakers-wrapper {
    flex-wrap: wrap;

    .speaker-wrapper {
      --width: 80px;
      width: 100%;

      //   margin-right: 0;
      padding: 0 10px;

      .name {
        // font-size: 13px;
      }
    }
  }
}

@media (max-width: 480px) {
  .session-title {
    font-size: 25px;
  }
}
</style>
