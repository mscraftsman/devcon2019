<template>
<div>
  <div class="full-section-container dark" id="voila">
    <div class="description-container">
      <div class="image-wrapper">
      </div>
      <div class="content-wrapper">
        <div class="section-title-wrapper white-title">
          <small>Conference sessions during the day</small>
          <h2>Voilà Hotel</h2>
        </div>
        <div class="section-description-wrapper">
            <p>Voilà Bagatelle Hotel is by Bagatelle, Mall of Mauritius. This Shopping Centre
	    opened on September 2011 and it has quickly become the Indian Ocean’s leading leisure,
	    lifestyle and shopping destination. Our hotel, Voilà Bagatelle is a cornerstone development
	    within this destination, offering business, leisure & shopping guests an
	    “urban lifestyle being one of the good hotels in Mauritius.
            </p>
            <p>Our hotel has a concept that offers style, innovation, freshness, simplicity, efficiency,
	    and remarkable affordability amongst Mauritius best hotels. We pledge to offer unsurpassed
	    value to our guests through dedication, innovation and green values.
            </p>
            <p>Part of ENL Lifestyle, Voilà Bagatelle is run by a team of seasoned Mauritian tourism
	    professionals. One of Mauritius’ leading business groups, ENL has, through its shareholdings,
	    significant involvement and understanding of the Mauritian Tourism and Hotel industry.
            </p>
            <p>Bookings can be done directly with the hotel. Please mention "Developers Conference 2019
	     by MSCC" to receive discounted price.</p>
        </div>
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
    grid-template-columns: 0.8fr 0.8fr 0.1fr;
    grid-template-rows: 1fr;

    .content-wrapper {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);
      z-index: 1;
    }

    .image-wrapper {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 1)), url(~/static/images/venues/Voila_pana_3.jpg);
      background-size: cover, cover;
      height: 100%;
      width: 100%;
      clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
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
