<template>
  <div class="home-component intro-slider-wrapper">
    <carousel class="slider-wrapper" :per-page="1" :loop="true" :autoplay="true" :autoplayTimeout="3000" :paginationActiveColor="'#ff4932'" :autoplayHoverPause="true" :mouse-drag="false" :navigationEnabled="true" :paginationColor="'#fff'" :paginationPadding="5" :paginationSize="20" :centerMode="true" :navigationNextLabel="'›'" :navigationPrevLabel="'‹'">
      <slide class="slide">
        <div class="slide-item slide-quote">
          The
          <span class="mega-rainbow">most important</span> tech conference in Mauritius.
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'50px'" :link="'https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/258586831/'">Registration closed</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote"><span class="mega-rainbow">leaderboard</span> of the conference.</div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'50px'" :link="'/top'">Open Leaderboard</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote">
          <span class="mega-rainbow">For</span> Developers
          <br />
          <span class="mega-rainbow">by</span> Developers
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'/life-at-devcon'">View past events</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote"><span class="mega-rainbow">Networking</span> with Renown Speakers</div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'/speakers'">View all speakers</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote">
          <span class="mega-rainbow">3 Days</span> of Knowledge Transfer
          <span class="mega-rainbow">Free</span>
          of Charge
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/258586831/'">Registration closed</button-waw>
        </div>
      </slide>
    </carousel>
  </div>
</template>


<style lang="scss" scoped>
.intro-slider-wrapper {
  background: url("/img/hashtag.png") no-repeat top center;
  &:before {
    content: "Developers conference 2019";
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    letter-spacing: 16px;
    color: #ff5f38;
    margin-top: 90px;
    opacity: 0.4;
  }

  @media screen and (max-width: $mobile) {
    background-size: 85% auto;
    &:before {
      letter-spacing: 4px;
    }
  }
}

.slider-wrapper {
  // height: 500px; //fallback
  .slide {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .slide-item {
      padding: $gutter 0;
    }
    .slide-quote {
      width: 50%;
      font-size: 40px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;

      span {
        font-size: 150%;
        font-family: $font-headings;
      }
    }
    .slide-button {
    }
  }

  @media screen and (max-width: $tablet) {
    height: 70vh;

    .slide {
      .slide-item {
        padding: $gutter 0;
      }
      .slide-quote {
        width: 80%;
        font-size: 25px;
        span {
          font-size: 150%;
        }
      }
      .slide-button {
      }
    }
  }
}
</style>


<style lang="scss">
.slider-wrapper {
  .VueCarousel-wrapper {
    height: 100%;
  }
  .VueCarousel-navigation {
    position: absolute;
    width: 90%;
    height: 50px;
    margin: 0 auto;
    left: 5%;
    top: 45%;
    // overflow: hidden;

    @media screen and (max-width: $tablet) {
      width: 80%;
      overflow: hidden;
    }
  }

  .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .VueCarousel-navigation-button {
    color: white;
  }

  .VueCarousel-navigation-prev,
  .VueCarousel-navigation-next {
    position: absolute;
    top: 50%;
    padding: 0;
    margin: 0;
    left: 0;
    font-size: 50px;
  }

  .VueCarousel-navigation-next {
    right: 0;
    left: auto;
  }
}
</style>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
