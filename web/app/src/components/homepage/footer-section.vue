<template>
  <div class="home-component footer-section-wrapper">
    <div class="container footer-section-container">
      <div class="link-wrapper">
        <router-link class="link" :to="{name: 'pastevents'}">past events</router-link>

        <router-link class="link" :to="{name: 'sponsors'}">sponsors</router-link>

        <a class="link" href="#">become a sponsor</a>
        
        <a class="link external" target="_blank" href="#">mcb inovapp challenge</a>

        <router-link class="link" :to="{name: 'press'}">press material</router-link>

        <router-link class="link" :to="{name: 'speakers'}">speakers</router-link>

        <a class="link" href="#">become a speaker</a>

        <router-link class="link" :to="{name: 'contact'}">contact us</router-link>

        <router-link class="link" :to="{name: 'coc'}">code of conduct</router-link>

        <router-link class="link" :to="{name: 'jobs'}">jobs</router-link>

        <router-link class="link" :to="{name: 'vote'}">vote</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.link-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
  margin-top: $gutter;
  margin-bottom: $gutter * 3;
}

.link {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $color-blue-light;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: $gutter / 2;

  &:visited {
    color: $color-blue-light;
  }
}

@media screen and (max-width: $tablet) {
  .link-wrapper {
    margin-left: 0px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-row-gap: 10px;
    text-align: center;
  }

  .footer-stripe-wrapper {
    padding: 50px 0;
  }
  .footer-section-container {
    display: flex;
    align-items: center;
  }
}
</style>