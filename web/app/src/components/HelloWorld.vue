<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Package name: {{ name }}</p>
    <p>Package version: {{ version }}</p>
  </div>
</template>

<script>
import { FETCH_HOME_TEXT_CONTENT } from "@/constants/action-types";

export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data() {
    return {
      name: "",
      version: ""
    };
  },

  created() {
    this.$store.dispatch(FETCH_HOME_TEXT_CONTENT).then(() => {
      this.name = this.$store.state.homeTextContent.name;
      this.version = this.$store.state.homeTextContent.version;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
