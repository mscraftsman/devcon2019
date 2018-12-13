<template>
<ul class="vue-countdown">
    <li>
        <p class="digit">{{ days | twoDigits }}</p>
        <p class="text">days</p>
    </li>

    <li>
        <p class="digit">{{ hours | twoDigits }}</p>
        <p class="text">hours</p>
    </li>

    <li>
        <p class="digit">{{ minutes | twoDigits }}</p>
        <p class="text">Min</p>
    </li>

    <li>
        <p class="digit">{{ seconds | twoDigits }}</p>
        <p class="text">Sec</p>
    </li>
</ul>
</template>

<script>
export default {
    props: ['deadline'],

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null
        }
    },

    mounted() {
        this.date = Math.trunc(Date.parse(this.deadline) / 1000)

        setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000)
        }, 1000)
    },

    computed: {
        seconds() {
            return Math.trunc(this.date - this.now) % 60
        },

        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60
        },

        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24
        },

        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24)
        }
    },
    filters: {
      twoDigits (value) {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
          return value.toString()
      }
    }
}
</script>
<style lang="scss">

$tablet: 1024px;
$tablet-portrait: 768px;
$mobile: 540px;

.vue-countdown {
  padding: 0;
  margin: 0;
}
.vue-countdown li {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  position: relative;
}
.vue-countdown li p {
    margin: 0;
}
.vue-countdown li:after {
  content: ":";
  position: absolute;
  top: 15px;
  right: -13px;
  font-size: 32px;
}
.vue-countdown li:first-of-type {
  margin-left: 0;
}
.vue-countdown li:last-of-type {
  margin-right: 0;
}
.vue-countdown li:last-of-type:after {
  content: "";
}
.vue-countdown .digit {
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 0;
  font-family: var(--font-shentox);
}
.vue-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 18px;
  font-family: var(--font-shentox);
}

@media (max-width: $tablet) {
  .vue-countdown .digit {
    font-size: 60px;
  }
}

@media (max-width: $mobile) {
  .vue-countdown .digit {
    font-size: 40px;
  }
}
</style>
