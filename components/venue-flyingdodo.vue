<template>
<div>
  <div class="full-section-container dark" id="dodo">
    <div class="description-container">
      <div class="content-wrapper">
        <div class="section-title-wrapper white-title">
          <small>Recreational time and networking</small>
          <h2>Flying Dodo Brewing Company</h2>
        </div>
        <div class="section-description-wrapper">
          <p>Mauritius first and only craft brewery is the right spot to shake off the intensive
	    brain workouts during the day. Join for some recreational time enjoying good food,
	    exquisite beers and interesting conversations among other attendees and speakers.
            </p>
          <p>The company's motto is innovation through passion. Entering Flying Dodo today will
	    help visualise this motto. Flying Dodo Brewing Company opened back in 2012 at
	    Bagatelle and is part of the ICE Ltd group.
            </p>
        </div>
      </div>
      <div class="image-wrapper">
      </div>
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

    &.dark {
      background: #000000;
    }
  }

  * {
    box-sizing: border-box;
  }

  .description-container {
    grid-column: full;
    display: grid;
    grid-template-columns: 0.1fr 0.6fr 1fr;
    grid-template-rows: 1fr;

    .content-wrapper {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);
      z-index: 1;
    }

    .image-wrapper {
      grid-column: 3 / 3;
      grid-row: 1 / 2;
      background: linear-gradient(225deg, transparent, rgba(0, 0, 0, 1)), url(~/static/images/venues/flying_dodo.jpg);
      background-size: cover, cover;
      height: 100%;
      width: 100%;
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter));
    grid-column: container;

    &.white-title {
      h2 {
        color: var(--color-white);
      }
    }

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

    &.page-heading-wrapper {
      small {
        margin-bottom: 7px;
        display: block;
      }
      h2 {
        font-size: 80px;
        line-height: 80px;
      }
    }
  }

  .section-description-wrapper {
    p {
      font-family: var(--font-glacial);
      color: var(--color-white);
      font-weight: 300;
      font-size: 19px;
      line-height: 28px;
      margin-bottom: var(--gutter);
      color: rgba(255, 255, 255, 1);
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.99);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: $tablet) {
    .description-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;

      .content-wrapper {
        grid-column: 1 / 1;
        grid-row: 1 / 2;
      }

      .image-wrapper {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        height: 500px;
        clip-path: initial;
      }
    }

    .section-title-wrapper {
      h2 {
        font-size: 45px;
        line-height: 50px;
      }
    }
  }

  @media (max-width: $mobile) {
    .description-container {
      .image-wrapper {
        height: 300px;
      }
    }

    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }

    .section-description-wrapper {
      p {
        font-size: 17px;
      }
    }
  }
</style>
