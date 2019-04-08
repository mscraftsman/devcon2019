<template>
  <div class="notification-wrapper">
    <div class="notification" v-for="(notif, index) in notifications" :key="index">
      <div class="message">
        {{ notif.message }}
      </div>
      <div class="dismiss" @click="addNotif()">
        <div class="svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalid1: null,
      notifications: [
        {
          message: 'Oops! that didnt work!'
        }
      ]
    }
  },
  mounted() {
    // this.expireNotif()
  },
  methods: {
    addNotif() {
      this.notifications.push({
        message: new Date()
      })
    },
    expireNotif() {
      this.intervalid1 = setInterval(function () {
        this.notifications.pop()
      }, 3000);
    }
  }
}
</script>


<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  bottom: 20px;
  width: 100%;

  .notification {
    position: relative;
    bottom: 0;
    color: black;
    background: white;
    border-radius: 4px;
    margin: 10px;
    width: 500px;
    max-width: 90%;
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
  }
}
</style>
