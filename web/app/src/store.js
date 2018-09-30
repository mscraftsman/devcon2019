import Vue from "vue";
import Vuex from "vuex";

import { SET_HOME_TEXT_CONTENT } from "./constants/mutation-types";
import { FETCH_HOME_TEXT_CONTENT } from "./constants/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeTextContent: {}
  },
  mutations: {
    [SET_HOME_TEXT_CONTENT](state, homeTextContent) {
      state.homeTextContent = homeTextContent;
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
    }
  }
});
