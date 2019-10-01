import Vue from "vue";
import Vuex from "vuex";
import { extractData } from "@/helpers";
import Feedback from "./feedback.js";

Vue.use(Vuex);

let feedback = new Feedback("");

const sessionizeSessions = "/api/sessionize.com/Sessions.json";
const sessionizeSpeakers = "/api/sessionize.com/Speakers.json";
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
export const USER_BOOKMARK_SET = "USER_BOOKMARK_SET";

export const USER_FEEDBACK_ADD = "USER_FEEDBACK_ADD";
export const USER_FEEDBACK_FETCH = "USER_FEEDBACK_FETCH";
export const USER_FEEDBACK_SET = "USER_FEEDBACK_SET";

export const NOTIFICATION_ADD = "NOTIFICATION_ADD";
export const NOTIFICATION_REMOVE = "NOTIFICATION_REMOVE";
export const NOTIFICATION_EXPIRE = "NOTIFICATION_EXPIRE";
export const NOTIFICATION_CLEAR_ALL = "NOTIFICATION_CLEAR_ALL";

export const LEADERBOARD_FETCH = "LEADERBOARD_FETCH";
export const LEADERBOARD_SET = "LEADERBOARD_SET";

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
    bookmarks: [],
    user: false,
    notifications: [],
    leaderboards: {
      sessions: [],
      speakers: [],
    },
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
      return state.speakers.filter(speaker => speaker.isTopSpeaker);
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
    getBookmarks: function(state) {
      return state.bookmarks;
      // if (state.user) {
      //   let bookmarksArray = state.user.bookmarks.split(";");
      //   return bookmarksArray;
      // }
    },
    getNotifications: function(state) {
      return state.notifications;
    },
    getLeaderboardSessions: function(state) {
      return state.leaderboards.sessions;
    },
    getLeaderboardSpeakers: function(state) {
      return state.leaderboards.speakers;
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
    [USER_BOOKMARK_SET](state, payload) {
      Vue.set(state, "bookmarks", payload);
      // state.bookmarks = payload;
    },
    [NOTIFICATION_ADD](state, payload) {
      let date = new Date().getTime();
      let type = "info";
      if (payload.type === "undefined") {
        payload.type = "info";
      } else {
        type = payload.type;
      }

      let notif = {
        date,
        message: payload.message,
        type: type,
      };

      // Vue.set(state, "notifications", [...state.notifications, notif]);
    },
    [NOTIFICATION_EXPIRE](state, payload) {
      let newArray = state.notifications.shift();
      // Vue.set(state, "notifications", state.notifications.shift());
    },
    [NOTIFICATION_CLEAR_ALL](state, payload) {
      // let newArray = state.notifications.shift();
      // console.log(newArray);
      Vue.set(state, "notifications", []);
    },
    [LEADERBOARD_SET](state, payload) {
      // console.log(payload);
      state.leaderboards = payload;
      // Vuet.set(state, "leaderboards", payload);
    },
  },
  actions: {
    [USER_STATUS]({ commit, dispatch }) {
      feedback
        .Me()
        .then(response => {
          commit(SET_USER, response);
          commit(NOTIFICATION_ADD, { message: "Logged in. Welcome " + response.name, type: "success" });
          dispatch(USER_FEEDBACK_FETCH);
          dispatch(USER_BOOKMARK_FETCH);
        })
        .catch(function() {
          commit(NOTIFICATION_ADD, { message: "You're not logged in.", type: "error" });
        });
    },
    [USER_LOGIN]({ commit }) {
      feedback.Login();
    },
    [USER_LOGOUT]({ commit }) {
      feedback.Logout();
    },
    [USER_BOOKMARK_FETCH]({ commit }) {
      feedback
        .ListOwnBookmarks()
        .then(response => {
          commit(USER_BOOKMARK_SET, response.bookmarks);
          commit(NOTIFICATION_ADD, { message: "Bookmarks retrieved." });
        })
        .catch(function() {
          commit(NOTIFICATION_ADD, { message: "Couldn't fetch bookmarks", type: "error" });
        });
    },
    [USER_BOOKMARK_ADD]({ state, commit, dispatch }, param) {
      feedback
        .AddBookmark(param)
        .then(response => {
          commit(USER_BOOKMARK_SET, [...state.bookmarks, param]);
          commit(NOTIFICATION_ADD, { message: "Bookmark added.", type: "success" });
        })
        .catch(error => {
          commit(NOTIFICATION_ADD, { message: "Cannot add bookmark. Are you logged in?", type: "error" });
          // console.log("bookmark add didnt work");
          // console.log(error);
        });
    },
    [USER_BOOKMARK_REMOVE]({ state, commit, dispatch }, param) {
      feedback
        .RemoveBookmark(param)
        .then(response => {
          let newArray = state.bookmarks.filter(r => r !== param);
          console.log(newArray);
          commit(USER_BOOKMARK_SET, newArray);
          commit(NOTIFICATION_ADD, { message: "Bookmark removed.", type: "success" });
        })
        .catch(error => {
          console.log("bookmark remove didnt work");
          console.log(error);
        });
    },
    [USER_FEEDBACK_ADD]({ commit, dispatch }, param) {
      commit(NOTIFICATION_ADD, { message: "Submitting feedback, please wait...", type: "success" });

      feedback
        .AddFeedback(param)
        .then(response => {
          dispatch(USER_FEEDBACK_FETCH);
          commit(NOTIFICATION_ADD, { message: "Feedback submitted.", type: "success" });
        })
        .catch(function(error) {
          console.log(error);
          commit(NOTIFICATION_ADD, { message: error.error, type: "error" });
          // console.log("feedback add didnt work");
        });
    },
    [USER_FEEDBACK_FETCH]({ commit }) {
      feedback
        .ListOwnFeedbacks()
        .then(response => {
          commit(USER_FEEDBACK_SET, response.feedbacks);
          commit(NOTIFICATION_ADD, { message: "Feedbacks retrieved" });
        })
        .catch(function() {
          console.log("feedback fetch didnt work");
        });
    },
    [NOTIFICATION_CLEAR_ALL]({ commit }, payload) {
      commit(NOTIFICATION_CLEAR_ALL);
    },
    [NOTIFICATION_EXPIRE]({ commit }, payload) {
      commit(NOTIFICATION_EXPIRE);
    },
    [NOTIFICATION_ADD]({ commit }, payload) {
      commit(NOTIFICATION_ADD, payload);
    },
    [SET_SESSIONS_READY]({ commit }, payload) {
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
          commit(NOTIFICATION_ADD, { message: "Sessions retrieved" });
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
          console.log('Speakers not loaded')
          // console.log(error)
          // throw new Error("Error should be caught by Vue global error handler." + error);
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
    [LEADERBOARD_FETCH]({ commit }) {
      feedback
        .Leaderboards()
        .then(response => {
          // console.log(response);
          commit(LEADERBOARD_SET, response);
        })
        .catch(err => {
          console.log("leaderboard fetch error");
        });
    },
  },
});
