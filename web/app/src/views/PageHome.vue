<template>
  <div>
    <HomeLanding />
    <HomeIntro />
    <HomeRecap />
    <HomeSponsor />
    <HomeSpeakerTile />
    <HomePastEvents />
    <HomeFooter />
  </div>
</template>

<script>
import HomeLanding from "@/components/home/HomeLanding.vue";
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeRecap from "@/components/home/HomeRecap.vue";
import HomeSponsor from "@/components/home/HomeSponsor.vue";
import HomeSpeakerTile from "@/components/home/HomeSpeakerTile.vue";
import HomePastEvents from "@/components/home/HomePastEvents.vue";
import HomeFooter from "@/components/home/HomeFooter.vue";

export default {
  components: {
    HomeFooter,
    HomeIntro,
    HomeLanding,
    HomePastEvents,
    HomeRecap,
    HomeSpeakerTile,
    HomeSponsor
  }
};
</script>
