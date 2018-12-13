<template>
  <div class="full-section-container" id="sponsorship">
    <div class="section-title-wrapper">
      <small>Your support is important</small>
      <h2>Sponsorship & Partner Opportunities</h2>
    </div>
    <div class="section-description-wrapper">
      <p>There are also openings for event sponsors. We have a wide variety of sponsorship opportunities ranging from the Platinum Level which includes half day boot camps, speaking sessions on the main stage and more, to the Bronze Level which provides branding opportunities and enables organizations to interact with attendees.</p>
      <div class="button-container">
        <a href="/DevCon2019-SponsorshipProposal.pdf" target="_blank" class="button">Become a sponsor</a>
      </div>
    </div>
  </div>
</template>
<script>

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

    p {
      font-family: var(--font-glacial);
      // color: var(--color-white);
      font-weight: 300;
      font-size: 19px;
      line-height: 28px;
      margin-bottom: var(--gutter);
      // color: rgba(255, 255, 255, 1);
      // text-shadow: 0 1px 4px rgba(0, 0, 0, 0.99);

      // &:last-child {
      //   margin-bottom: 0;
      // }
    }

    .button-container {
      text-align: center;

      .button {
        height: 45px;
        border-radius: 5px;
        border: 3px solid var(--color-blue);
        color: var(--color-blue);
        font-family: var(--font-shentox);
        padding: 0 calc(var(--gutter));
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        margin: 0 auto;
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

        .sponsor-wrapper {
          width: calc(100% * 1/4);
        }
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .section-description-wrapper {
      .sponsors-container {
        .sponsor-wrapper {
          width: calc(100% * 1/2);

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

  @media (max-width: $mobile) {
    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }

    .section-description-wrapper {
      .sponsors-container {
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
</style>
