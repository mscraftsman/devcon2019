<template>
  <div class="hello">
    <a href="https://github.com/mscraftsman/devcon2019/raw/master/assets/DevCon2019-SponsorshipProposal.pdf"
      download class="sponsor-button">Sponsorship Proposal <p>click to
        download</p></a>
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
.sponsor-button {
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
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
