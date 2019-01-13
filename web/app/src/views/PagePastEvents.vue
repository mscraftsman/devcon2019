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
          title: "global azure bootcamps ",
          year: "2015 in Mauritius",
          image: "lexp.jpg",
          logo: "logo-lexp.png",
          link: "http://gwabmauritius.azurewebsites.net/",
          description:
            "In April of 2013 we held the first Global Windows Azure Bootcamp at more than 90 locations around the globe! In March 2014 we topped that with 136 locations! This year we are again doing a one day deep dive class to help thousands of people get up to speed on developing Cloud Computing Applications for Azure. In addition to this great learning opportunity we will have another set of hands on labs."
        },
        {
          id: 2,
          title: "Essentielle Subscription ",
          year: "2011 - 2013",
          image: "essentielle10.jpg",
          logo: "logo-essentielle.png",
          link: "",
          description:
            "My first employer. All the stuff Ive learned and projects Ive been working on."
        },
        {
          id: 3,
          title: "Objectif santé",
          year: "2013 - present",
          image: "objsante.jpg",
          logo: "logo-obj.png",
          link: "http://www.objectifsante.mu/",
          description:
            "Lexpress is a French-language daily newspaper, published in Mauritius since 1963 and owned by La Sentinelle, Ltd. Lexpress endeavours to cover Mauritian news in an independent and impartial manner, as described in its Code of Conduct for Journalists. It is the most widely read daily of Mauritius and constantly changes to keep up with the latest trends in journalism and newspaper business. The Sunday version of Lexpress is called Lexpress Dimanche."
        },
        {
          title: "id.lasentinelle.mu",
          year: "2007 - 2008",
          image: "id.jpg",
          logo: "logo-id.png",
          link: "https://id.lasentinelle.mu/",
          description:
            "We are a family. A group of people with a common goal : advance tommorrow. Whilst the world around us is changing, and as we adapt to serve it. One thing remains : our commitment to innovation and editorial independance."
        },
        {
          title: "media.lasentinelle.mu",
          year: "2005 - 2007",
          image: "media.jpg",
          logo: "logo-media.png",
          link: "http://media.lasentinelle.mu/",
          description:
            "We are a family. A group of people with a common goal : advance tommorrow. Whilst the world around us is changing, and as we adapt to serve it. One thing remains : our commitment to innovation and editorial independance."
        },
        {
          title: "Lexpress Turf",
          year: "2005 - 2007",
          image: "lexpress-turf.png",
          logo: "logo-turf.png",
          link: "",
          description:
            "L’express Turf is the leading equestrian weekly magazine of la Sentinelle group, since its inception in the late 90's. It is definitely the punter’s best ally throughout the whole racing season, Turf is a must if you want to be close to your target."
        },
        {
          title: "The artist",
          year: "2005 - 2007",
          image: "theartist.jpg",
          logo: "logo-theartist.png",
          link: "",
          description:
            "We are a family. A group of people with a common goal : advance tommorrow. Whilst the world around us is changing, and as we adapt to serve it. One thing remains : our commitment to innovation and editorial independance."
        },
        {
          title: "5-plus",
          year: "2005 - 2007",
          image: "5Plus.png",
          logo: "logo-5plus.png",
          link: "http://www.5plus.mu/",
          description:
            "We are a family. A group of people with a common goal : advance tommorrow. Whilst the world around us is changing, and as we adapt to serve it. One thing remains : our commitment to innovation and editorial independance."
        },
        {
          title: "La Sentinelle",
          year: "2005 - 2007",
          image: "sentinelle.png",
          logo: "sentinelle.png",
          link: "http://www.lasentinelle.mu/",
          description:
            "La Sentinelle is the first media group in Mauritius. Created in 1963, it employs 635 people grouped around four areas of activity: print, online (La Sentinelle EXPRESSIONS), printing and prepress (La Sentinelle PRINT), publishing and distribution (La Sentinelle EDITION ), and the advertising network (La Sentinelle COMMUNICATION). Located in Madagascar, it is also present in Reunion and Rodrigues. The editorial independence of the group is its strength, the innovation its motto."
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
  box-shadow: 0 3px 0 #004a8f;
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
  color: #004a8f;
  border: 1px solid;
  border-radius: 0.25em;

  &:hover {
    background: #004a8f;
    color: #ffffff;
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
    float: right;
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
