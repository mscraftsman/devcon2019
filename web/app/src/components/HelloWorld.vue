<template>
  <div class="hello">
    <div class="announcement">
      <img src="@/assets/not-text.png" alt="Developers Conference 2019 - Mauritius - 11. - 13. April 2019">
    </div>
    <div class="btnCont">
      <a href="https://github.com/mscraftsman/devcon2019/raw/master/assets/DevCon2019-SponsorshipProposal.pdf"
        download class="sponsor-button"><img src="@/assets/btn_download-brochure.png"
          alt=""></a>
      <a href="https://sessionize.com/devcon-mauritius-2019/" download class="cfp-button"><img
          src="@/assets/btn_callforpaper.png" alt=""></a>
    </div>
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
.btnCont {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 9vh;
}
.sponsor-button,
.cfp-button {
  padding: 20px 30px;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  color: black;
  text-decoration: none;
  display: inline-block;
  margin: 20px 50px;
  p {
    font-size: 10px;
  }

  &:hover {
    box-shadow: 0 0 30px #fff;
    transition: all 0.2s ease-out;
  }
}

@media screen and (max-width: 728px) {
  .sponsor-button,
  .cfp-button {
    left: 50%;
    padding: 15px;
    font-size: 15px;
    width: calc(100% - 60px);
    margin: 20px 15px;

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
@media only screen and (max-device-width: 812px) and (orientation: landscape) {
  .announcement img {
    max-width: 55%;
    padding-top: 5vh;
  }
  .btnCont {
    bottom: 5vh;
    a {
      margin: 20px;
      padding: 10px 20px;
    }
    img {
      max-width: 75%;
      height: auto;
    }
  }
}
</style>
