<template>
  <header class="bg-dark" data-block-type="headers" data-id="1">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          DevCon2019
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav13">
          <ul class="navbar-nav mr-auto">
            <li>
              <router-link class="nav-link" :to="{name: 'PageHome'}">Home</router-link>
            </li>

            <li>
              <router-link class="nav-link" :to="{name: 'PageExtra'}">Extra</router-link>
            </li>
            <li>
              <router-link class="nav-link" :to="{name: 'PageSessions'}">Sessions</router-link>
            </li>
            <li>
              <router-link class="nav-link" :to="{name: 'PageSpeakers'}">Speakers</router-link>
            </li>
          </ul>



          <ul class="navbar-nav justify-content-end ml-auto">
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://github.com/mscraftsman/devcon2019/blob/master/CONTRIBUTING.md">Contribute</a>
            </li>
            <li>
              <router-link class="nav-link" :to="{name: 'PageContact'}">Contact</router-link>
            </li>
          </ul>

          <a class="btn btn-white ml-md-3" href="#">Sessions</a>
        </div>
      </nav>
    </div>
  </header>
</template>


  