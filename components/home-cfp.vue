<template>
  <div class="full-section-container" id="speakers">
    <div class="section-title-wrapper">
      <small>Software Craftsman speaking this year</small>
      <h2>Speakers of 2019</h2>
    </div>
    <div class="section-description-wrapper">
      <div class="speakers-container" v-if="hasSpeakers">
        <div class="speaker-wrapper" v-for="(speaker, index) in speakers" :key="index">
          <div class="image-wrapper">
            <img :src="speakerImage(speaker)" :alt="speaker.tagLine" :title="speaker.tagLine">
          </div>
          <div class="details-wrapper">
            <h3>{{speaker.fullName}}</h3>
            <div class="social-icons">
              <a target="_blank" :href="speakerLink(speaker, 'Twitter')" v-if="speakerLink(speaker, 'Twitter')"><i class="fab fa-twitter"></i></a>
              <a target="_blank" :href="speakerLink(speaker, 'LinkedIn')" v-if="speakerLink(speaker, 'LinkedIn')"><i class="fab fa-linkedin"></i></a>
              <a target="_blank" :href="speakerLink(speaker, 'Blog')" v-if="speakerLink(speaker, 'Blog')"><i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container" v-if="!hasSpeakers">
        <a href="https://sessionize.com/devcon-mauritius-2019/" target="_blank" class="button">Apply as Speaker</a>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      speakers: [
        // {
        //   name: 'Nirvan Pagooah',
        //   image: 'TejasPagooah.jpg',
        //   twitter: '@nirvanpagooah',
        //   website: 'http://www.nirvan.pagooah.com'
        // }
      ]
    }
  },
  mounted() {
    axios.get("https://sessionize.com/api/v2/m1l86vhf/view/speakers")
      .then( response => { this.speakers = response.data })
      .catch( error => { console.log(error); })
  },
  computed: {
    hasSpeakers () {
      if (this.speakers && this.speakers.length) {
        return true
      }
    }
  },
  methods: {
    // hasTwitter (speaker) {

    // },
    // hasWebsite(speaker) {

    // },
    speakerImage (speaker) {
      if (speaker && speaker.profilePicture && speaker.profilePicture !== null) {
        return speaker.profilePicture
      } else {
        return '/images/speakers/mscc-placeholder.png'
      }
    },
    speakerLink(speaker, type) {
      if (speaker && speaker.links && speaker.links !== null) {
        let link = speaker.links.filter( function (el) {
          return el.linkType === type;
        })
        if (link && link.length > 0) {
          return link[0].url;
        }
      }
      return null;
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
    background: rgba(0,0,0,.05);
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
      color: var(--color-green);
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

    .speakers-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      margin-bottom: calc(var(--gutter) * 2);

      .speaker-wrapper {
        margin-bottom: calc(var(--gutter) / 1);


        .image-wrapper {
          text-align: center;
          margin-bottom: calc(var(--gutter) / 2);

          img {
            border-radius: 200px;
            width: 150px;
            height: 150px;
            object-fit: cover;
            object-position: 50% 50%;
            margin: 0 auto;
            filter: grayscale(100%);
            box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);

          }
        }

        .details-wrapper {
          text-align: center;

          h3 {
            color: var(--color-blue);
            text-transform: uppercase;
            font-family: var(--font-glacial);
            margin-bottom: calc(var(--gutter) / 6);
          }

          .social-icons {
            a {
              padding: calc(var(--gutter) / 4);
              display: inline-block;

              i {
                color: var(--color-green);
                font-size: 17px;
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
        border: 3px solid var(--color-green);
        color: var(--color-green);
        font-family: var(--font-shentox);
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        align-items: center;
        margin: 0 auto;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: var(--color-green);
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
      .speakers-container {
        grid-template-columns: repeat(4, 1fr);

        .speaker-wrapper {
          .image-wrapper {
            img {
              height: 120px;
              width: 120px;
            }
          }
          .details-wrapper {
            h3 {
              font-size: 17px;
            }
          }
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .section-description-wrapper {
      .speakers-container {
        grid-template-columns: repeat(3, 1fr);

        .speaker-wrapper {
          .image-wrapper {
            img {
              height: 100px;
              width: 100px;
            }
          }
          .details-wrapper {
            h3 {
              font-size: 16px;
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
      .speakers-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>

