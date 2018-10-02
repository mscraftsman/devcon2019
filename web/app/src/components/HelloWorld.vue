<template>
  <div class="hello">
    <div class="announcement">
      <img src="@/assets/not-text.png" alt="">
    </div>
      <a href="https://github.com/mscraftsman/devcon2019/raw/master/assets/DevCon2019-SponsorshipProposal.pdf"
        download class="sponsor-button"><img src="@/assets/btn_download-brochure.png" alt=""></a>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.announcement {
  img {
    display: block;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    padding-top: 10vh;
  }
}
.sponsor-button {
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 30px;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.2s ease-in;

  color: black;
  text-decoration: none;
  p {
    font-size: 10px;
  }

  &:hover {
    box-shadow: 0 0 30px #fff;
    transition: all 0.2s ease-out;
  }
}

@media screen and (max-width: 728px) {
  .sponsor-button {
    bottom: 10vh;
    padding: 15px;
    font-size: 15px;

    p {
      padding-top: 10px;
      font-size: 9px;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
