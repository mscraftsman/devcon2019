<template>
  <div class="page page-feedback">
    <div class="info" v-if="session">
      <strong>SESSION TITLE</strong>
      <span class="title">{{ session.title }}</span>
      <!-- <span>{{ getSessionCurrent.questionCurrent }}</span> -->
    </div>

    <div class="questions-wrapper" v-if="!voted">
      <div class="virer-mam">
        <div class="devirer-mam">
          <transition name="fade" v-for="(question, index) in questions" :key="index">
            <div class="question-holder" v-show="currentQuestion == index">
              <div class="question">{{ question.text }}</div>
              <template v-if="question.type === 'options'">
                <div class="comment-wrapper">
                  <div class="reaction-wrapper">
                    <Reactions v-model="question.value" />
                  </div>
                </div>
                <vue-slider :height="style.height" :processStyle="style.processStyle" :bgStyle="style.bgStyle" :sliderStyle="style.sliderStyle" :dotSize="style.dotSize" :tooltip="false" :show="currentQuestion == index" :ref="'slider' + index" :data="question.options" v-model="question.value"></vue-slider>
                <span class="help-text">Slide that 👆 thing left or right to rate 👈 👉</span>
              </template>
              <div v-else class="comment-wrapper">
                <div class="reaction-wrapper">
                  <textarea class="textbox" v-model="question.value" placeholder="We would be grateful if you could leave some constructive criticism."></textarea>
                </div>
              </div>
            </div>
          </transition>

          <div class="buttons-wrapper">
            <div class="button button-cancel" @click="cancel">Cancel</div>
            <div class="button button-next" v-if="currentQuestion < 3" @click="next">Next</div>
            <div class="button button-submit" v-else @click="submit">Submit</div>
          </div>
        </div>
      </div>
    </div>
    <div class="questions-wrapper voted-wrapper" v-else>
      <p>👌</p>
      <span class="title">We've received your feedback for this session. Thanks!</span>
      <p></p>
      <div class="button" @click="cancel">back</div>
    </div>

    <!-- <div class="footer">
      Developer Conference 2018
    </div>-->
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";
import Reactions from "../components/Reactions";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      dateNow: new Date().toISOString(),
      style: {
        dotSize: 50,
        height: 20,
        bgStyle: {
          // backgroundColor: "#fff",
          // backgroundImage: "-webkit-linear-gradient(left, black, #31e8b7)"
          boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.1)",
        },
        sliderStyle: [
          {
            backgroundColor: "red",
          },
          {
            backgroundColor: "white",
          },
        ],
        processStyle: {
          // backgroundImage: "-webkit-linear-gradient(left, #f05b72, #3498db)"
          backgroundColor: "transparent",
        },
      },
      currentQuestion: 0,
      questions: [
        {
          text: "How would you rate the speaker?",
          type: "options",
          options: ["1", "2", "3", "4", "5"],
          value: "2",
        },
        {
          text: "How would you rate the session content?",
          type: "options",
          options: ["1", "2", "3", "4", "5"],
          value: "2",
        },
        {
          text: "Did you learn something new?",
          type: "options",
          options: ["no", "yes"],
          value: "yes",
        },
        {
          text: "Remarks for speaker or organisation",
          type: "text",
          value: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["USER_FEEDBACK_ADD", "USER_FEEDBACK_FETCH"]),
    next: function () {
      this.currentQuestion++;
    },
    submit: function () {
      console.log("submitting");
      console.log(this.reaction);
      this.USER_FEEDBACK_ADD(this.reaction);
    },
    cancel: function () {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(["getName", "getSessionCurrent", "getUser", "getBookmarks", "getMyFeedbacks"]),
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers",
    }),
    beforeMount() {
      // this.USER_FEEDBACK_FETCH();
    },
    voted: function () {
      if (this.getMyFeedbacks instanceof Array) {
        return this.getMyFeedbacks.findIndex(f => f.session_id === this.id) !== -1;
      }

      return false;
    },
    bookmarked: function () {
      if (this.getBookmarks) {
        return this.getBookmarks.includes(this.id);
      }

      return false;
    },
    reaction: function () {
      let userid = "none";
      if (this.getUser.status) {
        userid = this.getUser.id;
      }
      let reaction = {
        session_id: this.id,
        // visitor_id: userid,
        reaction_1: this.questions[0].value,
        reaction_2: this.questions[1].value,
        reaction_3: this.questions[2].value,
        reaction_4: this.questions[3].value,
        created_at: this.dateNow,
      };
      return reaction;
    },
    session: function () {
      let sessions = this.sessions
        .map(groups => groups.sessions)
        .reduce(function (acc, curr) {
          return [...acc, ...curr];
        }, []);

      // console.log(sessions);
      let session = sessions.filter(sess => {
        if (sess.id === this.id) {
          return sess;
        }
      });
      // console.log(session);
      return session[0];
    },
  },
  components: {
    Reactions,
    vueSlider,
  },
  watch: {
    currentQuestion(val) {
      if (typeof this.$refs["slider" + val] !== "undefined") {
        this.$refs["slider" + val][0].refresh();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  //   transform: scale(0.5);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: scale(2);
  opacity: 0;
}

.info {
  grid-area: userinfo;
  padding: 5px 10px;
  align-self: center;
  justify-self: center;
  strong {
    text-transform: uppercase;
    color: var(--color-red-light);
  }
  span {
    display: block;
    text-align: center;

    &.title {
      text-transform: uppercase;
      font-size: 12px;
      color: white;

      &:not(:first-child) {
        padding-top: 10px;
      }
    }
  }
  font-size: 14px;
}

.page-feedback {
  display: grid;
  grid-template-areas:
    "userinfo userinfo"
    "questions questions";
  // "footer footer";
  grid-template-columns: 100px 1fr;
  grid-template-rows: 10vh 90vh;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-blue);
}

.questions-wrapper {
  grid-area: questions;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: grid;
  overflow: hidden;
  grid-template-rows: 1fr;

  .virer-mam {
    // transform: rotate(-5deg);
    background: no-repeat right top/200% auto url(../../src/assets/bg/bg-red-small.svg), rgba(0, 0, 0, 0.9);
    width: 120vw;
    height: 100%;
  }

  .devirer-mam {
    // transform: rotate(5deg);
    padding: 50px 10vw;
    display: grid;
    grid-row-gap: 30px;
    grid-template-areas:
      ". here ."
      ". next .";
    grid-template-columns: 10vw minmax(200px, 2fr) 10vw;
    // grid-template-rows: 40vh;
    //   width: 100vw;
    color: white;
    // height: 80vh;

    .question-holder {
      grid-area: here;

      .comment-wrapper {
        padding: 50px 0;
      }
    }
    .buttons-wrapper {
      grid-area: next;
    }
    .button-next,
    .button-submit {
      justify-self: flex-end;
    }
    .button-submit {
      background-color: var(--color-green);
    }

    .vue-slider-component {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  .question {
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    padding: 0 20px;
  }
}

.help-text {
  font-size: 12px;
}

.buttons-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  grid-gap: 10px;
  // justify-content: center;
}

.button {
  cursor: pointer;
  background: white;
  color: var(--color-blue);
  color: black;
  border-radius: 2px;
  font-size: 18px;
  padding: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 200px;
  align-self: end;

  transition: transform 0.2s ease-in-out;
  &:active,
  &:focus {
    transform: scale(0.97);
    transition: transform 0.2s ease-in-out;
  }
}

.button-next {
  background: white;
  // width: 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  &.button-submit {
    background: var(--color-green);
  }
}

.button-cancel {
  // font-size: 10px;
  background-color: #efefef;
}

.textbox {
  // border: 1px solid green;
  width: 80%;
  height: 20vh;
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 0 4px #999;
  resize: disable;
}

.voted-wrapper {
  grid-template-rows: auto;
  span.title {
    color: white;
    font-size: 16px;
    padding: 0 20px;
  }

  p {
    font-size: 100px;
    margin: 0;
    padding: 10px;
  }
  justify-items: center;
}

.footer {
  grid-area: footer;
  color: white;
  text-align: center;
  font-size: 13px;
  align-self: center;
}
</style>