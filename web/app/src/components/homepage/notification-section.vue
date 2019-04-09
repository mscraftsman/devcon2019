<template>
  <div class="notification-wrapper" v-if="getNotifications.length != 0">
    <div class="notification clear" @click="NOTIFICATION_CLEAR_ALL()">
      <div class="message">
        Clear All
      </div>
      <div class="dismiss">
        <div class="svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      </div>
    </div>
    <transition-group name="slide-fade">
      <div class="notification" v-for="notif in getNotifications" :key="notif.date">
        <div class="message">
          {{ notif.message }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      intervalid1: null,
    }
  },
  mounted() {
    this.expireNotif()
  },
  computed: {
    ...mapGetters(['getNotifications'])
  },
  methods: {
    ...mapActions(['NOTIFICATION_ADD', 'NOTIFICATION_REMOVE', 'NOTIFICATION_EXPIRE', 'NOTIFICATION_CLEAR_ALL']),
    addNotif() {
      // let payload = new Date()
      this.NOTIFICATION_ADD('this is my message');
    },
    expireNotif() {
      this.intervalid1 = setInterval(() => {
        if (this.getNotifications.length === 0) {
          return false;
        }
        this.NOTIFICATION_EXPIRE()
      }, 10000);
    }
  }
}
</script>


<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  bottom: 20px;
  width: 500px;
  max-width: 90%;
  right: 20px;
  // margin: 0 auto;

  .notification {
    position: relative;
    bottom: 0;
    color: black;
    background: white;
    border-radius: 4px;
    margin: 10px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 0 auto 10px;

    .message {
      padding: 10px;
    }

    .svgicon {
      padding-top: 6px;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        transform: scale(1.1);
        transform-origin: center center;
        transition: all 0.2s linear;
      }
    }

    &.clear {
      width: 150px;
      border-radius: 40px;
      margin-right: 0px;
      .message {
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
