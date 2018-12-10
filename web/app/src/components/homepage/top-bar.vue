<template>
  <div class="home-component top-bar-wrapper">
    <div class="container">
      <div class="top-bar-container">
        <div class="rendez-vous-wrapper">14th of june at Voila Bagatelle</div>
        <div class="links-wrapper">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.top-bar-wrapper {
  height: 40px;
  background:linear-gradient(
    to right,
    rgb(252, 218, 159) 0%,
    rgb(255, 95, 56) 52%,
    rgb(192, 37, 51) 100%
  )
  bottom
  transparent    
  no-repeat; 

  background-size:100% 1px ;
  box-sizing: border-box;
  line-height: 40px;

  text-transform: uppercase;
  font-size: 12px;
}

.top-bar-container {
  display: flex;
  width: 100%;
  .rendez-vous-wrapper {
    justify-content: flex-start;
    flex-grow: 1;
    font-weight: 900;
  }
  .links-wrapper {
    justify-content: flex-end;
    font-weight: 500;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      li {
        list-style-type: none;

        a {
          color: white;
          text-decoration: none;
          padding-left: $gutter;

          &:visited {
            color: white;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $tablet-portrait) {
  .rendez-vous-wrapper {
    text-align: center;
  }

  .links-wrapper {
    display: none;
  }
}
</style>
