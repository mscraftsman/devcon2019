import Vue from "vue";
import Vuex from "vuex";

import {
  SET_HOME_TEXT_CONTENT,
  SET_SPEAKER_CONTENT
} from "./constants/mutation-types";

import {
  FETCH_HOME_TEXT_CONTENT,
  FETCH_SPEAKER_CONTENT
} from "./constants/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeTextContent: {},
    speakers: []
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    }
  },
  mutations: {
    [SET_HOME_TEXT_CONTENT](state, homeTextContent) {
      state.homeTextContent = homeTextContent;
    },
    [SET_SPEAKER_CONTENT](state, speakers) {
      state.speakers = speakers;
    }
  },
  actions: {
    [FETCH_HOME_TEXT_CONTENT]({ commit }) {
      const URL = require("@/constants/urls.json")["home-text-content"];

      return fetch(URL)
        .then(response => response.json())
        .then(homeTextContent =>
          commit(SET_HOME_TEXT_CONTENT, homeTextContent)
        );
    },
    [FETCH_SPEAKER_CONTENT]({ commit }) {
      const URL = require("@/constants/urls.json")["speaker-content"];
      console.log("Fetching Speaker Data");
      return fetch(URL)
        .then(response => response.json())
        .then(data => commit(SET_SPEAKER_CONTENT, data.speakers))
        .catch(error => console.error("Error :", error));
    }
  }
});
