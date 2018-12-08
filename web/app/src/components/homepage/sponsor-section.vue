<template>
  <div class="home-component sponsor-section-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Sponsors</h2>
      <h3 class="subtitle">Platinum</h3>
      <div class="sponsors-wrapper platinum-wrapper">
        <a href="#" class="sponsor-logo">
          <img src="../../assets/sample-sponsors/mcb.png" alt>
        </a>
        <a href="#" class="sponsor-logo">
          <img src="../../assets/sample-sponsors/sdworx.png" alt>
        </a>
      </div>

      <a href="#" class="view-more">View all sponsors</a>

      <div
        class="tribute-text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea itaque magni, omnis cum reprehenderit possimus laudantium, doloribus veritatis dolorem repellat explicabo odio quas architecto nobis error nisi. Molestiae, sunt.</div>
    </div>

    <div class="button button-blue button-center">
      <a href="#">Become a Sponsor</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-component {
  padding: $section-spacer 0;
}
.sponsors-wrapper {
  display: grid;
  padding: 50px 0;
  border-bottom: 1px solid rgba(#fff, 0.3);

  .sponsor-logo {
    img {
      display: block;
      width: 250px;
      height: auto;
      margin: 0 auto;
    }
  }
}
.platinum-wrapper {
  grid-template-columns: repeat(2, 1fr);
}

.view-more {
  padding: $gutter * 2 0;
}

.button {
  width: 300px;
  margin: $gutter auto;
}
</style>
