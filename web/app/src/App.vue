<template>
  <div id="app">
    <TopBar/>
    <HeaderStripe/>

    <div class="page-wrapper">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>

    <SocialStripe/>
    <FooterSection/>
  </div>
</template>

<script>
import TopBar from '@/components/homepage/top-bar.vue'
import HeaderStripe from '@/components/homepage/header-stripe.vue'
import SocialStripe from '@/components/homepage/social-stripe.vue'
import FooterSection from '@/components/homepage/footer-section.vue'
export default {
  components: {
    TopBar,
    HeaderStripe,
    SocialStripe,
    FooterSection,
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/mscraftsman/devcon2019/master/web/app/package.json"
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }
};
</script>


<style lang="scss">
html,
body {
  min-height: 100%;
}

html {
  overflow-y: scroll;
  background-color: $color-main;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
