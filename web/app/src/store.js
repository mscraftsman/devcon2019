import Vue from "vue";
import Vuex from "vuex";

import { extractData } from "@/helpers";

Vue.use(Vuex);

const sessionizeSessions =
  "https://sessionize.com/api/v2/m1l86vhf/view/Sessions";
const sessionizeSpeakers =
  "https://sessionize.com/api/v2/m1l86vhf/view/Speakers";

export const SET_SPEAKERS = "SET_SPEAKERS";
export const SET_SPONSORS = "SET_SPONSORS";
export const SET_STATS = "SET_STATS";
export const SET_SESSIONS = "SET_SESSIONS";
export const SET_PAGESESSIONS_ACTIVE = "SET_PAGESESSIONS_ACTIVE";
export const SET_PAGESESSIONS_SCROLL_POSITION =
  "SET_PAGESESSIONS_SCROLL_POSITION";

export const FETCH_SESSIONS = "FETCH_SESSIONS";
export const FETCH_SPEAKERS = "FETCH_SPEAKERS";

export const FETCH_SPONSORS = "FETCH_SPONSORS";
export const FETCH_STATS = "FETCH_STATS";

export default new Vuex.Store({
  state: {
    pageSessions: {
      scrollPosition: 0,
      active: "Thursday"
    },
    speakers: [],
    sponsors: [],
    sessions: [],
    stats: [],
    user: {
      status: false, // true or false
      data: {
        id: "1234",
        name: "Dummy Name",
        photo: ""
      }
    }
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    },
    getSponsors: function(state) {
      return state.sponsors;
    },
    getSessions: function(state) {
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
    }
  },
  mutations: {
    [SET_SPEAKERS](state, speakers) {
      state.speakers = speakers;
    },
    [SET_SPONSORS](state, sponsors) {
      state.sponsors = sponsors;
    },
    [SET_SESSIONS](state, sessions) {
      state.sessions = sessions;
    },
    [SET_PAGESESSIONS_ACTIVE](state, active) {
      state.pageSessions.active = active;
    },
    [SET_PAGESESSIONS_SCROLL_POSITION](state, scrollPosition) {
      state.pageSessions.scrollPosition = scrollPosition;
    },
    [SET_STATS](state, stats) {
      state.stats = stats;
    }
  },
  actions: {
    [FETCH_SESSIONS]({ commit }) {
      return fetch(sessionizeSessions)
        .then(response => response.json())
        .then(payload => {
          commit(SET_SESSIONS, payload);
        })
        .catch(error => {
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
        });
    },
    [FETCH_SPEAKERS]({ commit }) {
      return fetch(sessionizeSpeakers)
        .then(response => response.json())
        .then(payload => {
          commit(SET_SPEAKERS, payload);
        })
        .catch(error => {
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
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
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
        });
    },

    [FETCH_STATS]({ commit }) {
      const URL = require("@/constants/urls.json")["devcon-stats"];
      return fetch(URL)
        .then(response => response.json())
        .then(({ feed }) => extractData(feed.entry))
        .then(stats => commit(SET_STATS, stats))
        .catch(error => {
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
        });
    }
  }
});
