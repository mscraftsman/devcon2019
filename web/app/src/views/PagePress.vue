<template>
  <div>
    <div class="full-section-container">
      <div class="container">
        <div class="page-title-wrapper">
          <small>Free to use! Create Awareness.</small>
          <h1 class="mega-rainbow">Press Material</h1>
          <p>
            In order to create more awareness for the Developers Conference we
            prepared a variety of media files at your disposal. Please feel
            free
            to use the material to your liking and help us to make this an
            outstanding and remarkable developers conference.
          </p>
        </div>
      </div>
    </div>

    <div class="full-section-container" data-bg="grey">
      <div class="container">
        <div class="section-title-wrapper">
          <small>MSCC</small>
          <h3>Logos</h3>
        </div>
        <div class="content-wrapper">
          <div class="logos-container">
            <div class="logo-wrapper" v-for="(logo, index) in logos" :key="index">
              <div class="image">
                <img :src="logo.path" :alt="logo.name">
              </div>
              <div class="details">
                <div class="row">
                  <label>Format</label>
                  <span>{{ logo.format }}</span>
                </div>
                <div class="row">
                  <label>Style</label>
                  <span>{{ logo.style }}</span>
                </div>
                <div class="download-button">
                  <a
                    :href="logo.path"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="download"
                  >Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="full-section-container">
      <div class="container">
        <div class="section-title-wrapper">
          <small>Spread the love!</small>
          <h3>Banners</h3>
          <p>
            Feel free to put these on your website, blog or social networks to
            promote the Developers Conference.
          </p>
        </div>
        <div class="content-wrapper">
          <div class="banners-container">
            <div class="banner-wrapper" v-for="(banner, index) in banners" :key="index">
              <div class="image">
                <img :src="banner.path" :alt="banner.name">
              </div>
              <div class="details">
                <div class="row">
                  <label>Dimension</label>
                  <span>{{ banner.size }}</span>
                </div>
                <div class="code">
                  <code>
                    &lt;a href="https://www.conference.mscc.mu"
                    title="Developers Conference 2019 - The Biggest Tech Event
                    in Mauritius!"&gt;&lt;img src="https://conference.mscc.mu{{
                    banner.path
                    }}" alt="Developers Conference 2019 - The Biggest Tech
                    Event
                    in Mauritius!"&gt;&lt;/a&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.logos = [
      {
        name: "MSCC-logo-coloured",
        path: "/img/banners/MSCC-logo-coloured.svg",
        format: "SVG",
        style: "Coloured",
      },
      {
        name: "MSCC-logo-inverted",
        path: "/img/banners/MSCC-logo-inverted.svg",
        format: "SVG",
        style: "Inverted",
      },
      {
        name: "MSCC-logo-coloured",
        path: "/img/banners/MSCC-logo-coloured.png",
        format: "PNG",
        style: "Inverted",
      },
    ];
    this.banners = [
      {
        name: "facebook-cover",
        path: "/img/banners/facebook-cover.jpg",
        size: "820x462",
      },
      {
        name: "twitter-cover",
        path: "/img/banners/twitter-cover.jpg",
        size: "1500x500",
      },
      {
        name: "sticker",
        path: "/img/banners/sticker.png",
        size: "vector",
      },
      // {
      //   name: "720x200",
      //   path: "/img/banners/720x200.png",
      //   size: "720x200"
      // },
      // {
      //   name: "970x90",
      //   path: "/img/banners/970x90.png",
      //   size: "970x90"
      // },
      // {
      //   name: "409x280",
      //   path: "/img/banners/409x280.png",
      //   size: "409x280"
      // }
    ];
  },
};
</script>

<style lang="scss" scoped>
.full-section-container {
  display: grid;
  grid-template-columns:
    [full-start] 1fr [container-start] minmax(300px, 1300px)
    [container-end] 1fr [full-end];
  background: transparent;
  background-size: cover, cover;

  .container {
    grid-column: container;
    padding: calc(var(--gutter) * 2) calc(var(--gutter) / 2);
  }
}

.logos-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: calc(var(--gutter) / 1);

  .logo-wrapper {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }

    .image {
      padding: var(--gutter);
      background: rgba(0, 0, 0, 0.1);
      img {
        width: 100%;
      }
    }

    .details {
      background: var(--color-main);
      padding: calc(var(--gutter) / 2);
      font-family: var(--font-glacial);
      font-size: 17px;
      text-transform: uppercase;

      .row {
        width: 100%;
        display: flex;

        label {
          width: 35%;
          margin-right: calc(var(--gutter) / 2);
          color: var(--color-white);
          display: block;
        }

        span {
          display: block;
          font-weight: 300;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .download-button {
        width: 100%;
        margin-top: calc(var(--gutter) / 2);

        .download {
          width: 100%;
          height: 45px;
          background: $color-blue-light;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--color-white);
        }
      }
    }
  }
}

.banners-container {
  width: 100%;

  .banner-wrapper {
    background: transparent;
    transition: all 0.3s ease-in-out;
    width: 100%;
    margin-bottom: $gutter * 2;
    padding: 10px;
    background: rgba(0, 0, 0, 0.4);

    .image {
      padding: var(--gutter);
      text-align: center;

      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }

    .details {
      background: $color-blue;
      padding: calc(var(--gutter) / 2);
      font-family: var(--font-glacial);
      font-size: 17px;
      text-transform: uppercase;

      .row {
        width: 100%;
        display: flex;

        label {
          width: 100px;
          margin-right: calc(var(--gutter) / 2);
          color: var(--color-white);
          display: block;
        }

        span {
          display: block;
          font-weight: 300;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .code {
        text-transform: initial;
        padding: calc(var(--gutter) / 2);
        background: rgba(255, 255, 255, 0.2);
        margin-top: calc(var(--gutter) / 2);
        border-radius: 3px;
        color: white;
        font-weight: bold;
        overflow-y: scroll;
      }
    }
  }
}
</style>
