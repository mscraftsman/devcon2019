<template>
  <div class="home-component sponsor-section-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Sponsors</h2>
      <div class="sponsor-level-wrapper titanium">
        <h4 class="subtitle">Titanium</h4>
        <div class="sponsors-wrapper platinum-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/mcb.png" alt>
          </a>
        </div>
      </div>
      <div class="sponsor-level-wrapper platinum">
        <h4 class="subtitle">Platinum</h4>
        <div class="sponsors-wrapper platinum-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>

      <div class="sponsor-level-wrapper gold">
        <h4 class="subtitle">Gold</h4>
        <div class="sponsors-wrapper gold-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>

      <div class="sponsor-level-wrapper speaker">
        <h4 class="subtitle">Speaker Sponsor</h4>
        <div class="sponsors-wrapper medium-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>
      <div class="sponsor-level-wrapper silver">
        <h4 class="subtitle">Silver</h4>
        <div class="sponsors-wrapper medium-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>
      <div class="sponsor-level-wrapper bronze">
        <h4 class="subtitle">Bronze</h4>
        <div class="sponsors-wrapper small-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
          
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
          
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
          
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>
      <div class="sponsor-level-wrapper media">
        <h4 class="subtitle">Media Partner</h4>
        <div class="sponsors-wrapper small-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>
      <div class="sponsor-level-wrapper happy">
        <h4 class="subtitle">Happy Hour</h4>
        <div class="sponsors-wrapper small-wrapper">
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
          
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
          
          <a href="#" class="sponsor-logo">
            <img src="../../assets/sample-sponsors/sdworx.png" alt>
          </a>
        </div>
      </div>

      <div class="tribute-text">
        Reach out and engage with a community of IT professionals and students in IT.<br/>
        Sponsors of the Developers Conference are exposed to skilled tech
        people in Mauritius and in the region. Unlike other events, participants of
        the Developers Conference are generally people who craft software using a
        wide variety of skills that help make the lives of people easier
      </div>
    </div>

    <div class="button-center">
      <button-waw
        :theme="'#97d0e1'"
        :size="'70px'"
        :link="'https://github.com/mscraftsman/devcon2019/raw/master/assets/DevCon2019-SponsorshipProposal.pdf'"
      >
        Become
        a Sponsor
      </button-waw>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import { FETCH_SPONSORS } from "@/store";

export default {
  created() {
    this.FETCH_SPONSORS();
  },

  computed: {
    ...mapGetters(["getSponsors"])
  },

  methods: {
    ...mapActions([FETCH_SPONSORS])
  }
};
</script>


<style lang="scss" scoped>
.home-component {
  padding: $section-spacer 0;
}

.mega-rainbow {
  padding-bottom: 30px;
}

.sponsor-level-wrapper {
  &.titanium {
    --color-start: #aae3f6;
    --color-end: #4f90a2;
  }
  &.platinum {
    --color-start: #eff5f9;
    --color-end: #686d91;
  }
  &.gold {
    --color-start: #fdcc77;
    --color-end: #aa8541;
  }
  &.speaker {
    --color-start: rgb(5, 154, 97);
    --color-end: rgb(2, 130, 6);
  }
  &.silver {
    --color-start: #fdfbf9;
    --color-end: #79807b;
  }
  &.bronze {
    --color-start: #a27a42;
    --color-end: #75390b;
  }
  &.media {
    --color-start: #009687;
    --color-end: #005b7f;
  }
  &.happy {
    --color-start: #c2ba81;
    --color-end: #a54e5f;
  }
}

.sponsors-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 50px;
  justify-content: center;
  align-items: center;

  &:last-child {
    // border-bottom: 1px solid rgba(#fff, 0.3);
  }

  .sponsor-logo {
    padding: 10px;

    &:last-child {
      padding: 5px;
    }
    display: block;
    img {
      display: block;
      width: 250px;
      height: auto;
      padding: 10px;
      // margin: 0 auto;
    }
  }
}
.platinum-wrapper {
  // grid-template-columns: 1fr 1fr;

  @media screen and (max-width: $tablet) {
    // grid-template-columns: 1fr;
    // grid-row-gap: 40px;
  }
}

.gold-wrapper {
  // grid-template-columns: 1fr 1fr;

  @media screen and (max-width: $tablet) {
    // grid-template-columns: 1fr;
    // grid-row-gap: 40px;
  }
}
.medium-wrapper {
  .sponsor-logo {
    img {
      width: 200px;
    }
  }

  @media screen and (max-width: $tablet) {
    .sponsor-logo {
      &:nth-child(even) {
        padding: 5px;
      }
      img {
        width: 150px;
      }
    }
  }
}
.small-wrapper {
  .sponsor-logo {
    img {
      width: 150px;
    }
  }
  @media screen and (max-width: $tablet) {
    .sponsor-logo {
      &:nth-child(even) {
        padding: 5px;
      }
      img {
        width: 100px;
      }
    }
  }
}

.sponsor-section-wrapper {
  .subtitle {
    padding-top: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;

    background: linear-gradient(90deg, var(--color-start), var(--color-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.view-more {
  padding: $gutter * 2 0;
}

.button-center {
  // width: 300px;
  margin: $gutter auto;
}
</style>
