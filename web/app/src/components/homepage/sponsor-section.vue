<template>
  <div class="home-component sponsor-section-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Sponsors</h2>
      <template v-if="getSponsors">
        <div class="sponsor-level-wrapper titanium">
          <h4 class="subtitle">Titanium</h4>
          <div class="sponsors-wrapper platinum-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Titanium')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                  :src="imageResolve('white_'+sponsor.image)"
                  :title="sponsor.partner + sponsor.slogan"
                  :alt="sponsor.partner"
                >
                <img class="logo-col"
                  :src="imageResolve(sponsor.image)"
                  :title="sponsor.partner + sponsor.slogan"
                  :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper platinum">
          <h4 class="subtitle">Platinum</h4>
          <div class="sponsors-wrapper platinum-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Platinum')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>

        <div class="sponsor-level-wrapper gold" v-if="sponsorsGroupedByLevel('Gold')">
          <h4 class="subtitle">Gold</h4>
          <div class="sponsors-wrapper gold-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Gold')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>

        <div class="sponsor-level-wrapper speaker">
          <h4 class="subtitle">Speaker Sponsor</h4>
          <div class="sponsors-wrapper medium-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Speaker')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper silver" v-if="sponsorsGroupedByLevel('Silver')">
          <h4 class="subtitle">Silver</h4>
          <div class="sponsors-wrapper medium-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Silver')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper bronze">
          <h4 class="subtitle">Bronze</h4>
          <div class="sponsors-wrapper small-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Bronze')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper media">
          <h4 class="subtitle">Media Partner</h4>
          <div class="sponsors-wrapper small-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Media Partner')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper happy" v-if="sponsorsGroupedByLevel('Happy Hour')">
          <h4 class="subtitle">Happy Hour</h4>
          <div class="sponsors-wrapper small-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Happy Hour')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
        <div class="sponsor-level-wrapper internet" v-if="sponsorsGroupedByLevel('Internet')">
          <h4 class="subtitle">Internet</h4>
          <div class="sponsors-wrapper small-wrapper">
            <a
              :href="sponsor.url"
              class="sponsor-logo"
              target="_blank"
              :title="sponsor.partner + sponsor.slogan"
              v-for="(sponsor, index, key) in sponsorsGroupedByLevel('Internet')"
              :key="sponsor.level + sponsor.name + index + key"
            >
              <span class="sponsor-logo-cont">
                <img class="logo-white"
                     :src="imageResolve('white_'+sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
                <img class="logo-col"
                     :src="imageResolve(sponsor.image)"
                     :title="sponsor.partner + sponsor.slogan"
                     :alt="sponsor.partner"
                >
              </span>
            </a>
          </div>
        </div>
      </template>
      <div v-else>loading sponsors...</div>

      <div class="tribute-text">
        Reach out and engage with a community of IT professionals and students in IT.
        <br>Sponsors of the Developers Conference are exposed to skilled tech
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
    ...mapActions([FETCH_SPONSORS]),
    groupBy(objectArray, property) {
      return objectArray.reduce(function(acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
      }, {});
    },
    sponsorsGroupedByLevel: function(level) {
      const activatedSponsors = this.getSponsors.filter(sponsor => {
        if (sponsor.support === "1") {
          return sponsor;
        }
      });
      return this.groupBy(activatedSponsors, "level")[level];
    },
    imageResolve: function(filename) {
      if (filename === "") {
        return "/img/sponsors/placeholder.png";
      } else {
        return "/img/sponsors/" + filename;
      }
    }
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
  &.internet {
    --color-start: #06d8cd;
    --color-end: #006685;
  }
}

.sponsors-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 30px;
  justify-content: center;
  align-items: center;

  &:last-child {
    // border-bottom: 1px solid rgba(#fff, 0.3);
  }

  .sponsor-logo {
    padding: 10px;

    &-cont {
      display: inline-block;
      position: relative;
    }

    .logo-col {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
    }

    &:hover {
      .logo-white {
        opacity: 0;
        transition: all 0.35s ease-out;
      }
      .logo-col {
        opacity: 1;
        transition: all 0.35s ease-out;
      }
    }

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
      width: 190px;
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
