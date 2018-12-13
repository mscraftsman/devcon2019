<template>
  <div class="full-section-container">
    <div class="section-title-wrapper">
      <small>2015 to Present</small>
      <h2>Past events</h2>
    </div>
    <div class="past-events-container">
      <div class="event-wrapper" v-for="(event, index) in getEvents" :key="index" >
        <a class="past-event" target="_blank" rel="noopener noreferrer" :href="event.url" :style="getBackground(event)">
          <h4>{{event.name}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash'

  export default {
    data () {
      return {
        events: [
          {
            name: 'Developers Conference 2015',
            url: 'https://2015.mscc.mu/',
            image: 'devcon_2015.jpg',
            weight: 1
          },
          {
            name: 'Global Azure Bootcamp 2015',
            url: 'http://gwabmauritius.azurewebsites.net/',
            image: 'gwab2015.jpeg',
            weight: 0
          },
          {
            name: 'Developers Conference 2016',
            url: 'https://2016.mscc.mu/',
            image: 'devcon_2016.jpg',
            weight: 3
          },
          {
            name: 'Global Azure Bootcamp 2016',
            url: 'https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/226532196/',
            image: 'gwab2016.jpeg',
            weight: 2
          },
          {
            name: 'Xamarin Dev Days 2016',
            url: 'https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/233937043/',
            image: 'xamarin-2016.jpeg',
            weight: 4
          },
          {
            name: 'Developers Conference 2017',
            url: 'https://2017.mscc.mu',
            image: 'devcon_2017.jpg',
            weight: 5
          }
	  {
	    name: 'Developers Conference 2018',
            url: 'https://2018.mscc.mu',
            image: 'devcon_2018.jpg',
            weight: 6
	  }
        ]
      }
    },
    computed: {
      getEvents () {
        return _.orderBy(this.events, 'weight', 'desc')
      }
    },
    methods: {
      getBackground (event) {
        let returnval = null

        if (event && event.image && event.image !== null) {
          returnval = '/images/past-events/' + event.image
        } else {
          returnval = '/images/sponsors/default.jpg'
        }

        return 'background: url(' + returnval + ')'
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
    background: rgba(0,0,0,.05);
    padding: calc(var(--gutter) * 3) 0 0 0;
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


  .past-events-container {
    grid-column: full;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    width: 100%;
    overflow: hidden;

    .event-wrapper {
      width: 100%;
      overflow: hidden;
    }

    .past-event {
      height: 100%;
      text-decoration: none;
      font-family: var(--font-shentox);
      font-weight: 500;
      text-align: center;
      padding: calc(var(--gutter) * 5) calc(var(--gutter) * 2);
      background: var(--color-blue);
      color: var(--color-white);
      text-transform: uppercase;
      font-size: 22px;
      background-size: cover !important;
      background-position: center 40% !important;
      position: relative;
      transition: all 0.3s ease-in-out;
      display: block;

      &:hover {
        transform: scale(1.2);

        h4 {
          transform: scale(0.8);
        }
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(40,71,217, 0.5);
        height: 100%;
        z-index: 1;
      }

      h4 {
        z-index: 10;
        position: relative;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  @media (max-width: $tablet-portrait) {
    .past-events-container {
      grid-template-columns: 1fr;
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
    .section-title-wrapper {
      h2 {
        font-size: 35px;
        line-height: 40px;
      }
    }
  }
</style>
