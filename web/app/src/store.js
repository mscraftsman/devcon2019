import Vue from "vue";
import Vuex from "vuex";

import {
  SET_HOME_TEXT_CONTENT,
  SET_SPEAKER_CONTENT,
  SET_SPONSOR_CONTENT
} from "./constants/mutation-types";

import {
  FETCH_HOME_TEXT_CONTENT,
  FETCH_SPEAKER_CONTENT,
  FETCH_SPONSOR_CONTENT
} from "./constants/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeTextContent: {},
    speakers: [],
    sponsors: []
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    },
    getSponsors: function(state) {
      return state.sponsors;
    }
  },
  mutations: {
    [SET_HOME_TEXT_CONTENT](state, homeTextContent) {
      state.homeTextContent = homeTextContent;
    },
    [SET_SPEAKER_CONTENT](state, speakers) {
      state.speakers = speakers;
    },
    [SET_SPONSOR_CONTENT](state, sponsors) {
      state.sponsors = sponsors;
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
      return fetch(URL)
        .then(response => response.json())
        .then(data => commit(SET_SPEAKER_CONTENT, data.speakers))
        .catch(error => console.error("Error :", error));
    },
    [FETCH_SPONSOR_CONTENT]({ commit }) {
      const URL = require("@/constants/urls.json")["sponsor-content"];
      return fetch(URL)
        .then(response => response.json())
        .then(data => commit(SET_SPONSOR_CONTENT, data.sponsors))
        .catch(error => console.error("Error :", error));
    }
  }
});
