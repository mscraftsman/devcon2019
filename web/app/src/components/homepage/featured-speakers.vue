<template>
  <div class="home-component featured-speakers-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Featured Speakers</h2>
      <div class="featured-speakers-container">
        <div class="speaker-box">
          <div class="speaker-image">
            <img src="../../assets/sample-speakers/cedric.jpg"
                 alt>
          </div>
          <div class="bizin-trouv-bien"></div>
          <div class="speaker-meta">
            <div class="name">Cedric Poily</div>
            <div class="occupation">Cheif Freelance Egineer</div>
            <div class="alias">Gotta code them all</div>
            <a href="#"
               class="talk-count">2 Talks</a>
            <div class="social-media-wrapper"></div>
          </div>
        </div>
        <div class="speaker-box">
          <div class="speaker-image">
            <img src="../../assets/sample-speakers/jochen.jpg"
                 alt>
          </div>
          <div class="bizin-trouv-bien"></div>
          <div class="speaker-meta">
            <div class="name">Jochen Kickstarter</div>
            <div class="occupation">Cheif Freelance Egineer</div>
            <div class="alias">Gotta code them all</div>
            <div class="talk-count">2 Talks</div>
            <div class="social-media-wrapper"></div>
          </div>
        </div>
        <div class="speaker-box">
          <div class="speaker-image">
            <img src="../../assets/sample-speakers/sandeep.jpg"
                 alt>
          </div>
          <div class="bizin-trouv-bien"></div>
          <div class="speaker-meta">
            <div class="name">Sandeep Ramgolam</div>
            <div class="occupation">Cheif Freelance Egineer</div>
            <div class="alias">Gotta code them all</div>
            <div class="talk-count">2 Talks</div>
            <div class="social-media-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
h2 {
  text-align: center;
}

.home-component {
  padding: $section-spacer 0;
}

.featured-speakers-wrapper {
  overflow: hidden;
}
.featured-speakers-container {
  --size: 215px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 100px;

  .speaker-box {
    width: 300px;
    z-index: 10;
    height: 485px;
    position: relative;

    .speaker-image {
      height: 100%;
      position: absolute;
      &:after {
        content: " ";
      }

      transform-origin: left bottom;
      transform: skew(-18deg);
      border-radius: 30px;
      overflow: hidden;
      width: var(--size);
      left: 0;

      img {
        display: block;
        width: auto;
        height: 100%;
        transform: skew(18deg);
        margin-left: calc(var(--size) * -1 / 2);
      }
    }

    .bizin-trouv-bien {
      position: absolute;
      background: linear-gradient(transparent, transparent, #000);

      width: var(--size);
      height: 100%;
      border-radius: 30px;

      transform-origin: left bottom;
      transform: skew(-18deg);
    }
    .speaker-meta {
      --spacing: 10px;
      letter-spacing: 2px;
      text-shadow: 0 1px 2px #000;
      position: absolute;
      bottom: 5%;
      left: 20%;

      .name {
        font-size: 36px;
        font-weight: 800;
        padding-bottom: var(--spacing);
        text-align: right;
      }
      .occupation {
        font-size: 16px;
        padding-bottom: var(--spacing);
      }
      .alias {
        font-size: 16px;
        text-transform: uppercase;
        padding-bottom: var(--spacing);
        font-weight: 500;
      }
      .talk-count {
        display: inline-block;
        padding: 10px 13px 5px;
        font-size: 12px;
        border-radius: 7px;
        text-shadow: none;
        padding-bottom: var(--spacing);
        text-transform: uppercase;
        background: linear-gradient(
          to right,
          rgb(252, 218, 159) 0%,
          rgb(255, 95, 56) 0%,
          rgb(192, 37, 51) 100%
        );
      }
      .social-media-wrapper {
      }
    }

    &:before {
      --width: 200px;
      content: " ";
      width: var(--width);
      height: 500px;
      // left: 50%;
      top: 0px;
      left: 0;
      margin-left: -calc(var(--width) / 2);

      position: absolute;
      background-image: url("../../assets/menu-hover.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      transform: translate(0px, 10px);
      opacity: 0.5;
      transition: all 0.5s ease-out;
    }
    &:after {
      content: " ";
      z-index: -1;
      --width: 200px;
      width: var(--width);
      height: 150px;
      left: calc(var(--width) * 1.2);
      top: 0px;
      // left: 0;
      // margin-left: -calc(var(--width) / 2);

      position: absolute;
      background-image: url("../../assets/menu-hover.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      transform: translate(0px, 10px);
      opacity: 0.5;
      transition: all 0.5s ease-out;
    }
  }
}
</style>
