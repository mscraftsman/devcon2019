<template>
  <div class="full-section-container" id="sponsors">
    <div class="section-title-wrapper">
      <small>We're backed by some big players!</small>
      <h2>Sponsors</h2>
    </div>
    <div class="section-description-wrapper">
      <div class="sponsors-container" v-if="hassponsors">
        <div class="sponsor-package" v-for="(sponsorPackage, index) in getSponsorsByPackage" :key="index">
          <h2>{{sponsorPackage.name}}</h2>
          <div class="sponsors-wrapper">
            <div class="sponsor-wrapper" v-for="(sponsor, index) in sponsorPackage.sponsors" :key="index">
              <div class="image-wrapper">
                <a target="_blank" :href="sponsor.gsx$url.$t">
                  <img :src="sponsorImage(sponsor)" :alt="sponsor.gsx$partner.$t">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <a href="/DevCon2019-SponsorshipProposal.pdf" target="_blank" class="button">Become a sponsor</a>
      </div>
    </div>
  </div>
</template>
<script>

import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return { 
      packages: [
        {
          name: 'Platinum',
          key: 'platinum'
        },
        {
          name: 'Gold',
          key: 'gold'
        },
        {
          name: 'Speaker Sponsor',
          key: 'speaker'
        },
        {
          name: 'Silver',
          key: 'silver'
        },
        {
          name: 'Bronze',
          key: 'bronze'
        },
        {
          name: 'Media Partner',
          key: 'media partner'
        },
        {
          name: 'Happy Hour',
          key: 'happy hour'
        }
      ],
      sponsors: []
    }
  },
  mounted() {
    axios.get("https://spreadsheets.google.com/feeds/list/13wJkyOGY8fkx6TyWzNQgTvVuiM9Ty8WIO6ZB4zsjeoI/ogt46nu/public/values?alt=json")
      .then( response => {this.sponsors = response.data.feed.entry})
      .catch( error => { console.log(error); })
  },
  computed: {
    hassponsors () {
      if (this.sponsors && this.sponsors.length) {
        return true
      }
    },
    getSponsorsByPackage () {
      let packages = []

      this.packages.map(p => {
        let sponsorsOfThisPackage = this.sponsors.filter(pack => {
          return pack.gsx$support.$t === "1" && pack.gsx$level.$t.toLowerCase() === p.key
        })

        if (sponsorsOfThisPackage && sponsorsOfThisPackage.length) {
          packages.push({
            name: p.name,
            sponsors: sponsorsOfThisPackage
          })
        }
      })

      return packages
    }
  },
  methods: {
    sponsorImage (sponsor) {
      if (sponsor && sponsor.gsx$image.$t && sponsor.gsx$image.$t !== null) {
        return '/images/sponsors/' + sponsor.gsx$image.$t
      } else {
        return '/images/sponsors/default.jpg'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  $tablet: 1024px;
  $tablet-portrait: 768px;
  $mobile: 540px;

  .full-section-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [container-start] minmax(300px, 1300px) [container-end] 1fr [full-end];
    background: transparent;
    background-size: cover, cover;
    padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);
  }

  * {
    box-sizing: border-box;
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter) * 3);
    grid-column: container;
    text-align: center;

    small {
      margin: 0 0 10px 0;
      text-transform: uppercase;
      color: var(--color-blue);
      font-family: var(--font-shentox);
      font-size: 18px;
    }
    h2 {
      margin: 0;
      text-transform: uppercase;
      font-size: 53px;
      line-height: 55px;
      font-family: var(--font-glacial);

    }

    p {
      line-height: 25px;
      font-size: 18px;
    }
  }

  .section-description-wrapper {
    grid-column: container;

    .sponsors-container {
      margin-bottom: calc(var(--gutter) * 2);

      .sponsor-package {
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;

        h2 {
          font-family: var(--font-shentox);
          text-transform: uppercase;
          color: var(--color-green);
          margin-bottom: var(--gutter);
          font-size: 20px;
          font-weight: 700;
        }

        .sponsors-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;

          .sponsor-wrapper {
            margin-bottom: calc(var(--gutter) / 1);
            width: calc(100% * 1/5);

            .image-wrapper {
              text-align: center;
              margin-bottom: calc(var(--gutter) / 2);

              a {
                display: block;

                &:hover {
                  img {
                    opacity: 1;
                    filter: grayscale(0);
                  }
                }

                img {
                  max-width: 70%;
                  margin: 0 auto;
                  filter: grayscale(100%);
                  opacity: 0.6;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }
      }
    }

    .button-container {
      text-align: center;

      .button {
        height: 45px;
        padding: 0 calc(var(--gutter));

        padding-top: 9px;
        display: inline-block;
        border-radius: 5px;
        border: 3px solid var(--color-blue);
        color: var(--color-blue);
        font-family: var(--font-shentox);
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        margin: 0 auto;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: var(--color-blue);
          color: var(--color-white);
        }
      }
    }
  }

  @media (max-width: $tablet) {
    .section-title-wrapper {
      h2 {
        font-size: 45px;
        line-height: 50px;
      }
    }

    .section-description-wrapper {
      .sponsors-container {
        grid-template-columns: repeat(4, 1fr);

        .sponsor-package {
          .sponsors-wrapper {
            .sponsor-wrapper {
              width: calc(100% * 1 / 4);
            }
          }
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .section-description-wrapper {
      .sponsors-container {
        .sponsor-package {
          .sponsors-wrapper {
            .sponsor-wrapper {
              width: calc(100% * 1 / 2);

              .image-wrapper {
                a {
                  img {
                    max-width: 65%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: $mobile) {
    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }

    .section-description-wrapper {
      .sponsors-container {
        .sponsor-package {
          .sponsors-wrapper {
            .sponsor-wrapper {
              .image-wrapper {
                a {
                  img {
                    max-width: 70%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

