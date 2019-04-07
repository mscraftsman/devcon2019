import Vue from "vue";
import Vuex from "vuex";
import { extractData } from "@/helpers";
import Feedback from "./feedback.js";

Vue.use(Vuex);

let feedback = new Feedback("https://devcon2019.lsl.network");

const sessionizeSessions = "https://sessionize.com/api/v2/rn3ak6vi/view/Sessions";
const sessionizeSpeakers = "https://sessionize.com/api/v2/rn3ak6vi/view/Speakers";
// https://sessionize.com/api/v2/rn3ak6vi/view/sessions
export const SET_SPEAKERS = "SET_SPEAKERS";
export const SET_SPEAKERS_READY = "SET_SPEAKERS_READY";
export const SET_SPEAKERS_BY_ID = "SET_SPEAKERS_BY_ID";
export const SET_SPONSORS = "SET_SPONSORS";
export const SET_STATS = "SET_STATS";
export const SET_SESSIONS = "SET_SESSIONS";
export const SET_SESSIONS_READY = "SET_SESSIONS_READY";
export const SET_SESSIONS_BY_ID = "SET_SESSIONS_BY_ID";
export const SET_PAGESESSIONS_ACTIVE = "SET_PAGESESSIONS_ACTIVE";
export const SET_PAGESESSIONS_SCROLL_POSITION = "SET_PAGESESSIONS_SCROLL_POSITION";

export const FETCH_SESSIONS = "FETCH_SESSIONS";
export const FETCH_SPEAKERS = "FETCH_SPEAKERS";

export const FETCH_SPONSORS = "FETCH_SPONSORS";
export const FETCH_STATS = "FETCH_STATS";

export const USER_STATUS = "USER_STATUS";
export const SET_USER = "SET_USER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_BOOKMARK_ADD = "USER_BOOKMARK_ADD";
export const USER_BOOKMARK_REMOVE = "USER_BOOKMARK_REMOVE";
export const USER_BOOKMARK_FETCH = "USER_BOOKMARK_FETCH";

export const USER_FEEDBACK_ADD = "USER_FEEDBACK_ADD";
export const USER_FEEDBACK_FETCH = "USER_FEEDBACK_FETCH";
export const USER_FEEDBACK_SET = "USER_FEEDBACK_SET";

export default new Vuex.Store({
  state: {
    pageSessions: {
      scrollPosition: 0,
      active: "Thursday",
    },
    speakers: [],
    speakersReady: false,
    speakersById: [],
    sponsors: [],
    sessions: [],
    sessionsReady: false,
    sessionsById: [],
    stats: [],
    myFeedbacks: [],

    user: false,
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    },
    getSpeakersReady: function(state) {
      return state.speakersReady;
    },
    getSpeakersById: function(state) {
      return state.speakersById;
    },
    getSponsors: function(state) {
      return state.sponsors;
    },
    getSessions: function(state) {
      return state.sessions;
    },
    getSessionsReady: function(state) {
      return state.sessionsReady;
    },
    getSessionsById: function(state) {
      return state.sessionsById;
    },
    getSessionsByRoom: function(state) {
      return state.sessions;
    },
    getStats: function(state) {
      return state.stats;
    },
    getFeaturedSpeakers: function(state) {
      let featured = state.speakers.filter(speaker => speaker.isTopSpeaker);
      return featured;
    },
    getUser: function(state) {
      return state.user;
    },
    getPageSessionsActive: function(state) {
      return state.pageSessions.active;
    },
    getPageSessionsScrollPosition: function(state) {
      return state.pageSessions.scrollPosition;
    },
    getMyFeedbacks: function(state) {
      return state.myFeedbacks;
    },
  },
  mutations: {
    [SET_SPEAKERS](state, speakers) {
      state.speakers = speakers;
    },
    [SET_SPEAKERS_READY](state, payload) {
      // state.speakersReady = payload;
      Vue.set(state, "speakersReady", payload);
    },
    [SET_SPEAKERS_BY_ID](state, speakers) {
      state.speakersById = speakers;
    },
    [SET_SESSIONS_BY_ID](state, sessions) {
      state.sessionsById = sessions;
      // state.SET_SESSIONS_READY = true;
    },
    [SET_SPONSORS](state, sponsors) {
      state.sponsors = sponsors;
    },
    [SET_SESSIONS](state, sessions) {
      state.sessions = sessions;
    },
    [SET_SESSIONS_READY](state, payload) {
      // state.sessionsReady = payload;
      Vue.set(state, "sessionsReady", payload);
    },
    [SET_PAGESESSIONS_ACTIVE](state, active) {
      state.pageSessions.active = active;
    },
    [SET_PAGESESSIONS_SCROLL_POSITION](state, scrollPosition) {
      state.pageSessions.scrollPosition = scrollPosition;
    },
    [SET_STATS](state, stats) {
      state.stats = stats;
    },
    [SET_USER](state, payload) {
      state.user = payload;
    },
    [USER_FEEDBACK_SET](state, payload) {
      state.myFeedbacks = payload;
    },
  },
  actions: {
    [USER_STATUS]({ commit }) {
      console.log("trying to get data");
      feedback
        .Me()
        .then(response => {
          // console.log(response);
          commit(SET_USER, response);
        })
        .catch(function() {
          console.log("me didnt work");
        });
    },
    [USER_LOGIN]({ commit }) {
      feedback.Login();
    },
    [USER_LOGOUT]({ commit }) {
      console.log("trying to logout now");
      feedback.Logout();
    },
    [USER_BOOKMARK_FETCH]({ commit }) {
      feedback
        .ListOwnBookmarks()
        .then(response => {
          console.log(response);
        })
        .catch(function() {
          console.log("bookmark didnt work");
        });
    },
    [USER_BOOKMARK_ADD]({ commit }, param) {
      feedback
        .AddBookmark(param)
        .then(response => {
          console.log(response);
        })
        .catch(function() {
          console.log("bookmark didnt work");
        });
    },
    [USER_BOOKMARK_REMOVE]({ commit }, param) {
      feedback
        .RemoveBookmark(param)
        .then(response => {
          console.log(response);
        })
        .catch(function() {
          console.log("bookmark didnt work");
        });
    },
    [USER_FEEDBACK_ADD]({ commit }, param) {
      feedback
        .AddFeedback(param)
        .then(response => {
          console.log(response);
        })
        .catch(function() {
          console.log("bookmark didnt work");
        });
    },
    [USER_FEEDBACK_FETCH]({ commit }) {
      feedback
        .ListOwnFeedbacks()
        .then(response => {
          console.log(response);
        })
        .catch(function() {
          console.log("bookmark didnt work");
        });
    },
    [SET_SESSIONS_READY]({ commit }, payload) {
      console.log("setting sessions to " + payload);
      commit(SET_SESSIONS_READY, payload);
    },
    [SET_SPEAKERS_READY]({ commit }, payload) {
      commit(SET_SPEAKERS_READY, payload);
    },
    [FETCH_SESSIONS]({ commit }) {
      return fetch(sessionizeSessions)
        .then(response => response.json())
        .then(payload => {
          commit(SET_SESSIONS, payload);

          let smashSessions = [...payload[0].sessions, ...payload[1].sessions, ...payload[2].sessions];
          let groupById = smashSessions.reduce(function(r, a) {
            r[a.id] = r[a.id] || [];
            r[a.id] = a;
            return r;
          }, Object.create(null));
          commit(SET_SESSIONS_BY_ID, groupById);
        })
        .then(() => {
          console.log("sessions are now ready");
        })
        .catch(error => {
          throw new Error("Error should be caught by Vue global error handler." + error);
        });
    },
    [FETCH_SPEAKERS]({ commit }) {
      return fetch(sessionizeSpeakers)
        .then(response => response.json())
        .then(payload => {
          commit(SET_SPEAKERS, payload);

          let groupById = payload.reduce(function(r, a) {
            r[a.id] = r[a.id] || [];
            r[a.id] = a;
            return r;
          }, Object.create(null));
          commit(SET_SPEAKERS_BY_ID, groupById);
          commit(SET_SPEAKERS_READY, true);
        })
        .catch(error => {
          throw new Error("Error should be caught by Vue global error handler." + error);
        });
    },

    [FETCH_SPONSORS]({ commit }) {
      const URL = require("@/constants/urls.json")["sponsor-content"];
      return fetch(URL)
        .then(response => response.json())
        .then(({ feed: { entry } }) => {
          return extractData(entry);
        })
        .then(sponsors => {
          commit(SET_SPONSORS, sponsors);
          return sponsors;
        })
        .catch(error => {
          throw new Error("Error should be caught by Vue global error handler." + error);
        });
    },
    [FETCH_STATS]({ commit }) {
      const URL = require("@/constants/urls.json")["devcon-stats"];
      return fetch(URL)
        .then(response => response.json())
        .then(({ feed }) => extractData(feed.entry))
        .then(stats => commit(SET_STATS, stats))
        .catch(error => {
          throw new Error("Error should be caught by Vue global error handler." + error);
        });
    },
  },
});
