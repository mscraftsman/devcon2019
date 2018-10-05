<template>
  <section class="fdb-block fp-active">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Past Events</h1>
        </div>
      </div>

      <div class="row text-left justify-content-center pt-5">
        <div v-for="(pastEvent, index) in pastEventsFirstPart" :key="index" class="col-12 col-md-6 col-lg-5 m-auto">
          <h3><strong>{{pastEvent.title}}</strong></h3>
          <p class="text-h3">{{pastEvent.content}}</p>
        </div>
      </div>

      <div class="row text-left justify-content-center pt-lg-4">
        <div v-for="(pastEvent, index) in pastEventsSecondPart" :key="index" class="col-12 col-md-6 col-lg-5 m-auto">
          <h3><strong>{{pastEvent.title}}</strong></h3>
          <p class="text-h3">{{pastEvent.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { FETCH_PAST_EVENTS_CONTENT } from "@/constants/action-types";

export default {
  computed: {
    ...mapGetters({ pastEvents: "getPastEvents" }),
    pastEventsFirstPart() {
      return this.pastEvents.slice(0, 2);
    },
    pastEventsSecondPart() {
      return this.pastEvents.slice(2, 4);
    }
  },

  created() {
    this.$store.dispatch(FETCH_PAST_EVENTS_CONTENT);
  }
};
</script>
