<template>
  <div class="full-section-container" id="community">
    <div class="section-title-wrapper">
      <small>Communication and Exchange with Others</small>
      <h2>Networking & Community</h2>
    </div>
    <div class="section-description-wrapper">
        <p>Communication with your environment is an essential part of everyone's life. And it doesn't matter whether you are actually living in a rural area in the middle of nowhere, within the pulsating heart of a big city, or in my case on a wonderful island in the Indian Ocean. The ability to exchange your thoughts, your experience and your worries with another person helps you to get different points of view and new ideas on how to resolve an issue you might be confronted with.</p>
        <p>Take the chance to exchange with other attendees in the reception area or on the balcony. Have some interesting conversations about software development, latest information gained during one of the presentations and let others know about your ups & downs in your projects.</p>
        <p>Also, join the Mauritius Software Craftsmanship Community and be part of the local IT community.</p>
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
  }

  @media (max-width: $tablet) {
    .section-title-wrapper {
      h2 {
        font-size: 45px;
        line-height: 50px;
      }
    }

    .section-description-wrapper {
    }
  }

  @media (max-width: $tablet-portrait) {
    .section-description-wrapper {
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
    }
  }
</style>
