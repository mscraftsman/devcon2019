<template>
  <div class="home-component footer-section-wrapper">
   <div class="container footer-section-container">
    <div class="link-wrapper">
    <div class="link"><a href="#">past events</a></div>
    <div class="link"><a href="#">sponsors</a></div>
    <div class="link"><a href="#">become a sponsor</a></div>
    <div class="link"><a href="#">mcs inoapp challenge</a></div>
    <div class="link"><a href="#">press material</a></div>
    <div class="link"><a href="#">speakers</a></div>
    <div class="link"><a href="#">become a speaker</a></div>
    <div class="link"><a href="#">contact us</a></div>
    <div class="link"><a href="#">code of conduct</a></div>
    <div class="link"><a href="#">jobs</a></div>
    <div class="link"><a href="#">vote</a></div>
   </div>
   </div>
  </div>
</template>

<style lang="scss">

.link-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
  margin-bottom: 15%;
 
}

.link {
  text-transform:uppercase;
  letter-spacing: 1px;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 70%;
  
}

@media screen and (max-width: $tablet) {

  .link-wrapper{
   margin-left:0px;
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