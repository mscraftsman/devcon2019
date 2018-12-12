import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sessionizeURL = "https://sessionize.com/api/v2/351ijy5v/view/all";
const sessionizeSessions =
  "https://sessionize.com/api/v2/m1l86vhf/view/Sessions";
const sessionizeSpeakers =
  "https://sessionize.com/api/v2/m1l86vhf/view/Speakers";

export const SET_SPEAKERS = "SET_SPEAKERS";
export const SET_SESSIONS = "SET_SESSIONS";

export const FETCH_SESSIONIZE_DATA = "FETCH_SESSIONIZE_DATA";
export const FETCH_SESSIONS = "FETCH_SESSIONS";
export const FETCH_SPEAKERS = "FETCH_SPEAKERS";

export default new Vuex.Store({
  state: {
    speakers: [],
    sessions: [],
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
    getSessions: function(state) {
      return state.sessions;
    },
    getUser: function(state) {
      return state.user;
    }
  },
  mutations: {
    [SET_SPEAKERS](state, speakers) {
      state.speakers = speakers;
    },
    [SET_SESSIONS](state, sessions) {
      state.sessions = sessions;
    }
  },
  actions: {
    [FETCH_SESSIONIZE_DATA]({ commit }) {
      return fetch(sessionizeURL)
        .then(response => response.json())
        .then(({ speakers, sessions }) => {
          // commit(SET_SPEAKERS, speakers);
          // commit(SET_SESSIONS, sessions);
        })
        .catch(error => {
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
        });
    },
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
    }
  }
});
