<template>
  <div class="home-component featured-speakers-wrapper">
    <div class="container">
      <h2 class="mega-rainbow">Featured Speakers</h2>
      <div class="featured-speakers-container">
        <SpeakerBox v-for="speaker in getFeaturedSpeakers" :key="speaker.id"
          :speaker="speaker" />
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/shared/speaker-box.vue";
import { mapGetters } from "vuex";

export default {
  created() {
    this.speakers = [
      {
        id: "56985eb6-8db1-4657-bc0d-3e925cdf4e60",
        firstName: "Akshay",
        lastName: "Gopaul",
        fullName: "Akshay Gopaul",
        bio:
          "Name : Akshay Gopaul\r\nSoftware Developer at ASTEK Mauritius\r\nAddress: Riviere du rempart\r\nNickname: Wolf Of Ebene\r\nAge: 25\r\nSkills: Creativity and Ideation \r\nPreferred technology and Programming language: Unity, Construct2 and Visual Studio \r\n\r\n\r\n",
        tagLine: "ASTEK MAURITIUS",
        profilePicture:
          "https://sessionize.com/image?f=d00626b306bc2d1ccf1747608451b7de,400,400,True,False,b6-8db1-4657-bc0d-3e925cdf4e60.549afc75-b816-4241-88ca-6763dc13bc40.jpg",
        sessions: [
          {
            id: 40381,
            name: "Game Development with construct 2 (game engine)"
          },
          { id: 40386, name: "Augmented Reality with Unity 3D (Game Engine)" }
        ],
        isTopSpeaker: false,
        links: [
          {
            title: "Blog",
            url: "https://game-development.talentscloud.net/",
            linkType: "Blog"
          }
        ]
      },
      {
        id: "dd1aaf3b-c86a-4758-aa38-aaad2d7dd9e8",
        firstName: "Alexandre",
        lastName: "Bazile",
        fullName: "Alexandre Bazile",
        bio:
          "Alexandre Bazile is an hyperactive technology enthusiast who always like to feed his technology adventure thrills. From mobile apps to desktop apps to cloud scale apps, he never misses an opportunity to breathe into a new technology. MVVM, design patterns and app architecture are his hot topic, but when he is not talking about coding, he's wondering what would be the next great SaaS solution.",
        tagLine: "Technology Enthusiast",
        profilePicture:
          "https://sessionize.com/image?f=cd02345041c3a631023c5187a42482ab,400,400,True,False,cb-7ae8-4b4d-9ddf-11c19a02b813.fe775c05-bf65-456c-a879-935b7bbe2a99.png",
        sessions: [
          { id: 39499, name: "Building Enterprise APIs using .NET Web API 2" }
        ],
        isTopSpeaker: false,
        links: []
      },
      {
        id: "ab15357e-3099-4822-8476-ba522cf5ae86",
        firstName: "Cedric",
        lastName: "Poilly",
        fullName: "Cedric Poilly",
        bio:
          "Freelance Front-End Developer: working with private companies, NGOs as well as contributing open-source work |\r\nExpert Mentor at CodeMentor.io: hire me for a 1:1 online session for help with Front-end development: Angular, Vue.js or other technologies",
        tagLine:
          "Freelance Front-End Developer | Expert Mentor at CodeMentor.io",
        profilePicture:
          "https://sessionize.com/image?f=fa830efbe76fcb996550804bb36985d3,400,400,True,False,3dbeeea3-6711-4da5-bec0-515bb5ff621e.jpg",
        sessions: [
          { id: 38354, name: "Web Workers: Multithreading in the Browser" },
          { id: 43249, name: "Angular: Struggles and Advice" }
        ],
        isTopSpeaker: false,
        links: [
          {
            title: "Twitter",
            url: "https://twitter.com/cedpoilly",
            linkType: "Twitter"
          },
          {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/cedric-poilly/",
            linkType: "LinkedIn"
          }
        ]
      }
    ];
  },
  computed: {
    ...mapGetters(["getFeaturedSpeakers"])
  },
  components: {
    SpeakerBox
  }
};
</script>

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
  // --size: 215px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 100px;
  padding-top: $gutter * 2;
  padding-bottom: $gutter * 2;
}
</style>