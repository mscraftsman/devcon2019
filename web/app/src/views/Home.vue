<template>
  <div class="home">
    <IntroSlider />
    <FiveYears />
    <DevconStats />
    <FeaturedSpeakers />
    <BecomeSpeaker />
    <SponsorSection />
  </div>
</template>

<script>
import TopBar from "@/components/homepage/top-bar.vue";
import HeaderStripe from "@/components/homepage/header-stripe.vue";
import IntroSlider from "@/components/homepage/intro-slider.vue";
import FiveYears from "@/components/homepage/five-years.vue";
import DevconStats from "@/components/homepage/devcon-stats.vue";
import FeaturedSpeakers from "@/components/homepage/featured-speakers.vue";
import BecomeSpeaker from "@/components/homepage/become-speaker.vue";
import SponsorSection from "@/components/homepage/sponsor-section.vue";
import SocialStripe from "@/components/homepage/social-stripe.vue";
import FooterSection from "@/components/homepage/footer-section.vue";

export default {
  name: "home",
  components: {
    TopBar,
    HeaderStripe,
    IntroSlider,
    FiveYears,
    DevconStats,
    FeaturedSpeakers,
    BecomeSpeaker,
    SponsorSection,
    SocialStripe,
    FooterSection
  }
};
</script>
