<template>
  <div>
    <h1 class="mega-rainbow">Past Events</h1>
    <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block" v-for="(event, index) in past_events" :key="index">
        <div class="cd-timeline-img cd-picture">
          <img src="../assets/logo.png">
        </div>
        <div class="cd-timeline-content">
          <h2>{{ event.title }}</h2>
          <div class="image-container">
            <img src="https://2018.mscc.mu/images/past-events/gwab2015.jpeg">
          </div>
          <p>{{ event.description }}</p>
          <a :href="event.link" class="cd-read-more">More Information</a>
          <span class="cd-date">{{ event.year }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      past_events: [
        {
          title: "global azure bootcamps",
          year: "25 April 2015",
          image: "",
          logo: "",
          link: "http://gwabmauritius.azurewebsites.net/",
          description:
            "In April of 2013 we held the first Global Windows Azure Bootcamp at more than 90 locations around the globe! In March 2014 we topped that with 136 locations! This year we are again doing a one day deep dive class to help thousands of people get up to speed on developing Cloud Computing Applications for Azure. In addition to this great learning opportunity we will have another set of hands on labs."
        },
        {
          title: "Developers Conference 2015",
          year: "23 - 25 April 2015",
          image: "",
          logo: "",
          link: "https://2015.mscc.mu/#/",
          description:
            'The Developers Conference 2015 is the first event in Mauritius, maybe even in the Indian Ocean which is organised as a "classic" conference. Yes, there have been various vendor-specific bootcamps in the past but never anything like this.'
        },
        {
          title: "global azure bootcamps",
          year: "16 April 2016",
          image: "",
          logo: "",
          link:
            "https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/226532196/",
          description:
            "Microsoft Azure provides key benefits for your business. Similar to previous years the MSCC would like to invite you to a full-day event of information on cloud technology provided by Microsoft."
        },
        {
          title: "Developers Conference 2016",
          year: "20 - 22 May 2016",
          image: "",
          logo: "",
          link: "https://2016.mscc.mu/",
          description:
            "After last year's success the Mauritius Software Craftsmanship Community (MSCC) is organising the next annual event in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        },
        {
          title: "Xamarin Dev Days",
          year: "29 October 2016",
          image: "",
          logo: "",
          link:
            "https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/233937043/",
          description:
            "Xamarin Dev Days provide attendees with an intense, hands-on learning experience. Spend the morning exploring mobile development with sessions from Xamarin, our technology partners, and members of your local developer community, then roll up your sleeves for an afternoon dedicated to diving into code."
        },
        {
          title: "DEVELOPERS CONFERENCE 2017",
          year: "30 MARCH - 1 APRIL 2017",
          image: "",
          logo: "",
          link: "https://2017.mscc.mu/",
          description:
            "After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the third edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        },
        {
          title: "DEVELOPERS CONFERENCE 2018",
          year: "17 - 19 May 2018",
          image: "",
          logo: "",
          link: "https://2018.mscc.mu/",
          description:
            "After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the fourth edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  color: #acb7c0;
  text-decoration: none;
  cursor: pointer;
}

img {
  max-width: 100%;
}

h1,
h2 {
  font-weight: bold;
}

.cd-container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}

.cd-container::after {
  content: "";
  display: table;
  clear: both;
}

header {
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #303e49;
}

header h1 {
  color: #fff;
  font-size: 18px;
  font-size: 1.125rem;
}

.cd-date {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
}

.cd-timeline-content {
  h2 {
    text-align: left;
  }
}

@media only screen and (min-width: 1170px) {
  header {
    height: 300px;
    line-height: 300px;
  }
  header h1 {
    font-size: 24px;
    font-size: 1.5rem;
  }
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}
#cd-timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #ff5f38;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}
.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block::after {
  clear: both;
  content: "";
  display: table;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}
.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
.cd-timeline-img img {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.cd-timeline-img.cd-picture {
  background: black;
}
.cd-timeline-img.cd-movie {
  background-color: #c03b44;
  background: black;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
  background: black;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}
@-webkit-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -moz-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -moz-transform: scale(1.2);
  }
  100% {
    -moz-transform: scale(1);
  }
}
@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  /*background: #fff;*/
  border-radius: 0.25em;
  padding: 1px 0;
  box-shadow: 0 3px 0 #ff5f38;
  background: #f4f4f4;
}
.cd-timeline-content::after {
  clear: both;
  content: "";
  display: table;
}
.cd-timeline-content h2 {
  color: #303e49;
  padding: 0 1em;
  margin: 10px 0 10px 0;
}
.cd-timeline-content .image-container {
  margin: 0px;
}
.cd-timeline-content .image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
  padding: 0 1em;
}
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
  padding: 0 1em;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
  padding: 0 1em;
}
.cd-timeline-content .cd-read-more {
  float: right;
  padding: 0.8em 1em;
  margin: 0 1em 1em 1em;
  background: #ffffff;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  border-radius: 0.25em;
  transition: all 0.08s ease-in-out;

  &:hover {
    background: var(--color-main);
    color: #ffffff;
    text-decoration: none;
  }
}
.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;
}
.cd-timeline-content .cd-date {
  float: left;
  padding: 0.8em 0;
  opacity: 0.7;
  padding: 0 1em;
}
.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #fff;
}
@media only screen and (max-width: 480px) {
  .cd-timeline-content h2 {
    font-size: 14px;
    font-size: 1rem !important;
  }
}
@media only screen and (max-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 25px !important;
  }
}
@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #fff;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #fff;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}
@media only screen and (min-width: 1170px) {
  .cssanimations
    .cd-timeline-block:nth-child(even)
    .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
@-webkit-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -moz-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(-20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
