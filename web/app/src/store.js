import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sessionizeURL = "https://sessionize.com/api/v2/351ijy5v/view/all";

export const SET_SPEAKERS = "SET_SPEAKERS";
export const SET_SESSIONS = "SET_SESSIONS";

export const FETCH_SESSIONIZE_DATA = "FETCH_SESSIONIZE_DATA";

export default new Vuex.Store({
  state: {
    speakers: [],
    sessions: []
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    },
    getSessions: function(state) {
      return state.sessions;
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
          commit(SET_SPEAKERS, speakers);
          commit(SET_SESSIONS, sessions);
        })
        .catch(error => {
          throw new Error(
            "Error should be caught by Vue global error handler." + error
          );
        });
    }
  }
});
