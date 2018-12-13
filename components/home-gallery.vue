<template>
  <div class="full-section-container" id="gallery">
    <div class="section-description-wrapper">
      <div class="gallery-container">
          <masonry
            :cols="{default: 4, 1000: 3, 700: 2}"
            :gutter="5"
            >
            <div class="photo" v-for="(item, index) in photos" :key="index">
              <img :src="image(item)" alt="">
            </div>
          </masonry>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      photos: [
        'DSC_0108.jpg',
        'DSC_0134.jpg',
        'DSC_0044 (1).jpg',
        'DSC_0016.jpg',
        'DSC_0023.jpg',
        'DSC_0066.jpg',
        'DSC_0067.jpg',
        'DSC_0145.jpg',
        'DSC_0047 (1).jpg',
        'DSC_0072.jpg'
      ]
    }
  },
  computed: {

  },
  methods: {
    image (image) {
      if (image !== null) {
        return '/images/gallery/' + image
      } else {
        return '/images/gallery/default.jpg'
      }
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
    background: transparent;
    background-size: cover, cover;
    padding: calc(var(--gutter) / 4);
    padding-bottom: 0;
  }

  * {
    box-sizing: border-box;
  }

  .section-description-wrapper {
    grid-column: full;
    line-height: 0;

    .gallery-container {
      .photo {
        margin-bottom: 5px;
        img {
          width: 100%;
        }
      }
    }

  }

  @media (max-width: $tablet) {

  }

  @media (max-width: $tablet-portrait) {

  }

  @media (max-width: $mobile) {

  }
</style>

