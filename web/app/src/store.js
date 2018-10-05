import Vue from "vue";
import Vuex from "vuex";

import { extractFields, extractData } from "@/helpers/spreadsheet-helper";

import {
  SET_HOME_TEXT_CONTENT,
  SET_SPEAKER_CONTENT,
  SET_SPONSOR_CONTENT,
  SET_PAST_EVENTS_CONTENT
} from "./constants/mutation-types";

import {
  FETCH_HOME_TEXT_CONTENT,
  FETCH_SPEAKER_CONTENT,
  FETCH_SPONSOR_CONTENT,
  FETCH_PAST_EVENTS_CONTENT
} from "./constants/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeTextContent: {},
    speakers: [],
    sponsors: [],
    pastEvents: []
  },
  getters: {
    getSpeakers: function(state) {
      return state.speakers;
    },
    getSponsors: function(state) {
      return state.sponsors;
    },
    getPastEvents({ pastEvents }) {
      return pastEvents;
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
    },
    [SET_PAST_EVENTS_CONTENT](state, pastEvents) {
      state.pastEvents = pastEvents;
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
        .then(({ feed }) => extractData(feed.entry))
        .then(speakers => commit(SET_SPEAKER_CONTENT, speakers))
        .catch(error => console.error("Error :", error));
    },
    [FETCH_SPONSOR_CONTENT]({ commit }) {
      const URL = require("@/constants/urls.json")["sponsor-content"];
      const fields = ["name", "website"];
      return fetch(URL)
        .then(response => response.json())
        .then(({ feed }) => extractFields(feed.entry, fields))
        .then(sponsors => commit(SET_SPONSOR_CONTENT, sponsors))
        .catch(error => console.error("Error :", error));
    },
    [FETCH_PAST_EVENTS_CONTENT]({ commit }) {
      const URL = require("@/constants/urls.json")["past-events-content"];
      return fetch(URL)
        .then(response => response.json())
        .then(({ feed }) => extractData(feed.entry))
        .then(pastEvents => commit(SET_PAST_EVENTS_CONTENT, pastEvents))
        .catch(error => console.error("Error :", error));
    }
  }
});
