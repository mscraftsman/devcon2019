<template>
  <div>
    <div class="full-section-container">
      <div class="description-container">
        <div class="content-wrapper">
          <div class="section-title-wrapper white-title">
            <small>2017 Recap (Credit: L'Express Maurice)</small>
            <h2>What you can expect to see this year</h2>
          </div>
          <div class="section-description-wrapper">
          </div>
        </div>
        <div class="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ITHnbYgglo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
    background: linear-gradient(to top, rgba(40,71,217, 0.8), rgba(40,71,217, 0.8)), url(~/static/images/video-bg.jpg);
    background-size: cover, cover;
  }

  * {
    box-sizing: border-box;
  }

  .description-container {
    grid-column: container;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    padding: calc(var(--gutter) * 3) calc(var(--gutter) / 2);

    .content-wrapper {
      grid-column: 1 / 2;
      padding: calc(var(--gutter) * 2.5) calc(var(--gutter) / 2);
      z-index: 1;
      padding-bottom: 0;
    }

    .video-wrapper {
      grid-column: 1 / 2;
      text-align: center;
      position: relative;

      &:before {
        content: '';
        display: block;
        /* 9 / 16 = 56.25 */
        padding-top: 56.25%;
      }

      iframe {
        line-height: 0;
        position: absolute;
        left:0;right:0;top:0;bottom:0;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        border: 20px solid var(--color-white);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .section-title-wrapper {
    margin-bottom: calc(var(--gutter));
    grid-column: container;
    text-align: center;

    &.white-title {
      h2 {
        color: var(--color-white);
      }
    }
    &.blue-title {
      h2 {
        color: var(--color-blue);
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
  }

  @media (max-width: $tablet) {
    .section-title-wrapper {
      h2 {
        font-size: 45px;
        line-height: 50px;
      }
    }
  }

  @media (max-width: $mobile) {

    .description-container {
      .video-wrapper {
        iframe {
          border: 10px solid var(--color-white);
        }
      }
    }

    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }
  }

</style>
