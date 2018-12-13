<template>
  <div class="full-section-container">
    <footer>
      <div class="logo-social-wrapper">
        <img src="~/assets/images/logo.svg" alt="MSCC">
        <h4>Mauritius Software Craftsmanship Community</h4>
        <div class="social-icons">
          <a target="_blank" class="social-icon" :href="icon.url" :key="index" v-for="(icon, index) in social">
            <i :class="icon.icon"></i>
          </a>
        </div>
      </div>
      <div class="other-sections-container">
        <div class="quick-links-wrapper">
          <h4>Quick Links</h4>
          <ul class="quick-links">
            <li class="list-item" :key="index" v-for="(item, index) in quicklinks">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="sitemap-wrapper">
          <h4>Sitemap</h4>
          <ul class="quick-links">
            <li class="list-item" :key="index" v-for="(item, index) in sitemap">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>Crafted with <i class="fa fa-heart"></i> in Mauritius.</p>
          <p>JK. w/ a keyboard & a mouse 😅</p>
        </div>
      </div>
    </footer>
  </div>
</template>
1<script>
  export default {
    data () {
      return {
        social: [
          {
            icon: 'fab fa-facebook-f',
            name: 'Facebook',
            url: 'https://www.facebook.com/MauritiusSoftwareCraftsmanshipCommunity/'
          },
          {
            icon: 'fab fa-twitter',
            name: 'Twitter',
            url: 'https://twitter.com/mscraftsman'
          },
          {
            icon: 'fab fa-google-plus-g',
            name: 'Google+',
            url: 'https://plus.google.com/109537765013108874281'
          },
          {
            icon: 'fab fa-linkedin-in',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/groups/5033639'
          },
          {
            icon: 'fab fa-github',
            name: 'Github',
            url: 'https://github.com/mscraftsman'
          }
        ],
        quicklinks: [
          {
            name: 'Code of Conduct',
            url: 'https://www.mscc.mu/code-of-conduct/'
          },
           {
            name: 'Press Material',
            url: '/press/'
          },
          {
            name: 'Become a Sponsor',
            url: '/DevCon2019SponsorshipProposal.pdf'
          },
          {
            name: 'Contact Us',
            url: 'mailto:conference@mscc.mu'
          },
          {
            name: 'Apply as a speaker',
            url: 'https://sessionize.com/devcon-mauritius-2018/'
          }
        ],
        sitemap: [
          {
            name: 'Sessions',
            url: '/sessions/'
          },
          {
            name: 'Sponsors',
            url: '/#sponsors'
          },
          {
            name: 'Speakers',
            url: '/#speakers'
          },
          {
            name: 'Jobs',
            url: '/jobs/'
          },
          {
            name: 'Extras',
            url: '/extras/'
          },
          {
            name: 'Venues',
            url: '/venues/'
          }
        ]
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
    background: black;
    background-size: cover, cover;
  }

  * {
    box-sizing: border-box;
  }

  footer {
    grid-column: container;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);

    .logo-social-wrapper {
      width: 100%;
      text-align: center;
      border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
      margin-bottom: calc(var(--gutter) * 1.5);

      img {
        height: 50px;
        margin-bottom: calc(var(--gutter) / 2);
      }

      h4 {
        text-align: center;
        font-family: var(--font-shentox);
        text-transform: uppercase;
        color: var(--color-white);
        font-weight: 400;
        margin-bottom: calc(var(--gutter));
      }

      .social-icons {
        width: 100%;
        margin-bottom: calc(var(--gutter));

        .social-icon {
          width: 50px;
          height: 50px;
          display: inline-block;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }

          &, i {
            color: var(--color-blue);
            font-size: 25px;
          }
        }
      }
    }

    .other-sections-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: auto;

      .quick-links-wrapper, .sitemap-wrapper {
        h4 {
          color: var(--color-blue);
          font-family: var(--font-glacial);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 23px;
          margin-bottom: var(--gutter);
        }

        .quick-links {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;

          .list-item {
            margin-bottom: calc(var(--gutter) / 1.4);
            width: 50%;

            &, a {
              text-transform: uppercase;
              color: var(--color-white);
              font-family: var(--font-shentox);
              text-decoration: none;
              position: relative;
            }

            a {
              display: inline-block;

              &:after {
                content: '';
                position: absolute;
                width: 0%;
                transition: all 0.3s ease-in-out;
                bottom: -5px;
                height: 2px;
                background: var(--color-white);
                left: 0;
              }

              &:hover {
                &:after {
                  width: 100%;
                }
              }
            }
          }
        }
      }

      .copyright {
        p {
          color: var(--color-white);
          font-family: var(--font-shentox);
          text-transform: uppercase;
          text-align: right;
          margin-bottom: var(--gutter);

          &:nth-child(2) {
            opacity: 0.2;
          }

          i {
            color: red;
          }
        }
      }
    }
  }

  @media (max-width: $tablet) {
    footer {
      .other-sections-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;

        .copyright {
          grid-column: 1 / 3;
          margin-top: var(--gutter);

          p {
            text-align: center;

          }
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    footer {
      .other-sections-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;

        .quick-links-wrapper {
          margin-bottom: var(--gutter);
        }

        .copyright {
          grid-column: 1 / 2;
        }
      }
    }
  }

  @media (max-width: $mobile) {
    footer {
      .other-sections-container {

        .quick-links-wrapper, .sitemap-wrapper {
          text-align: center;

          .quick-links {
            .list-item {
              width: 100%;
            }
          }
        }

        .copyright {
          grid-column: 1 / 2;
        }
      }
    }
  }
</style>
