<template>
  <div class="session-card">
    <div class="session-title">{{ session.title | truncate(80, '...') }}</div>
    <div class="session-description">{{ session.description | truncate(120, '...') }}</div>
    <div class="session-author">
      <div class="name">{{ session.speakers[0].name }}</div>
      <div class="alias">{{ session.speakers[0].name }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["session"],
  methods: {

  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length);
      // return text.substring(0, length) + suffix;
    }
  },
}
</script>


<style lang="scss" scoped>
.session-card {
  display: grid;
  background: white;
  color: black;
  border-radius: 20px;
  padding: 20px;
  text-decoration: none;
  // grid-template-rows: 50px 100px 50px;
  transition: all 0.1s ease-in;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.2);
    transition: all 0.1s ease-out;
  }
}

.session-title {
  color: var(--color-main);
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
  grid-row: 1/2;
}

.session-description {
  grid-row: 2/3;
  font-size: 14px;
}

.session-author {
  grid-row: 3/4;
  align-self: end;

  .name {
    color: #ff6a45;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .alias {
    color: grey;
    text-transform: uppercase;
    font-size: 10px;
    padding-top: 3px;
  }
}
</style>
