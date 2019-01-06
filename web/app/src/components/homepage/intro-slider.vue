<template>
  <div class="home-component intro-slider-wrapper">
    <carousel class="slider-wrapper" :per-page="1" :loop="true" :autoplay="true"
      :autoplayTimeout="3000" :paginationActiveColor="'#ff4932'"
      :autoplayHoverPause="true" :mouse-drag="false" :navigationEnabled="true"
      :paginationColor="'#fff'" :paginationPadding="5" :paginationSize="20"
      :centerMode="true" :navigationNextLabel="'›'" :navigationPrevLabel="'‹'">
      <slide class="slide">
        <div class="slide-item slide-quote">
          The
          <span class="mega-rainbow">greatest</span> conference in the air.
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'#'">Register
            now</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote">
          The
          <span class="mega-rainbow">Best</span> conference in the water.
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote">
          The
          <span class="mega-rainbow">most woke</span> conference on ice.
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'#'">Register
            now</button-waw>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-item slide-quote">
          Innovative
          <span class="mega-rainbow">Diverse</span> and
          <span class="mega-rainbow">Inclusive</span> are just the beginnings.
        </div>
        <div class="slide-item slide-button button">
          <button-waw :theme="'#97d0e1'" :size="'70px'" :link="'#'">Register
            now</button-waw>
        </div>
      </slide>
    </carousel>
  </div>
</template>


<style lang="scss" scoped>
.intro-slider-wrapper {
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
    Slide
  }
};
</script>
