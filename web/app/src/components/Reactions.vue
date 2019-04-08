<template>
  <!-- <div class="reaction-container" v-if="type === ''yesno''">
        <div class="emoji  emoji--sad">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__eyes"></div>
                <div class="emoji__mouth"></div>
            </div>
        </div>

  </div>-->
  <div class="reaction-container">
    <div class="emoji emoji--angry" v-if="value === '-2'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__eyes"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
    <div class="emoji emoji--sad" v-else-if="value === 'no'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__eyes"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
    <div class="emoji emoji--sad" v-else-if="value === '1'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__eyes"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
    <div class="emoji emoji--like" v-else-if="value === '2'">
      <div class="emoji__hand">
        <div class="emoji__thumb"></div>
      </div>
    </div>
    <div class="emoji emoji--yay" v-else-if="value === '3'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
    <div class="emoji emoji--yay" v-else-if="value === 'yes'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
    <div class="emoji emoji--love" v-else-if="value === '4'">
      <div class="emoji__heart"></div>
    </div>
    <!-- <div class="emoji  emoji--yay">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__mouth"></div>
            </div>
    </div>-->
    <div class="emoji emoji--wow" v-else-if="value === '5'">
      <div class="emoji__face">
        <div class="emoji__eyebrows"></div>
        <div class="emoji__eyes"></div>
        <div class="emoji__mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "value"],
};
</script>


<style lang="scss" scoped>
$emoji-base-color: #ffda6a;
$emoji-like-color: #548dff;
$emoji-love-color: #f55064;
$emoji-angry-color: #d5234c;
$emoji-white-color: #ffffff;
$emoji-black-color: #000000;
$emoji-text-color: #8a8a8a;

$size: 120px;

.emoji {
  width: $size;
  height: $size;
  // margin: 15px 15px 40px;
  background: $emoji-base-color;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  // transform: scale(0.5);
  transition: 0.2s ease-in-out;

  &:after {
    position: absolute;
    top: 130px;
    font-size: 24px;
    width: 100px;
    left: calc(50% - 50px);
    color: $emoji-text-color;
  }
}

.emoji__face,
.emoji__eyebrows,
.emoji__eyes,
.emoji__mouth,
.emoji__tongue,
.emoji__heart,
.emoji__hand,
.emoji__thumb {
  position: absolute;

  &:before,
  &:after {
    position: absolute;
    content: "";
  }
}

.emoji__face {
  width: inherit;
  height: inherit;
}

.emoji--like {
  background: $emoji-like-color;

  &:after {
    content: "Liked";
  }

  .emoji__hand {
    left: 25px;
    bottom: 30px;
    width: 20px;
    height: 40px;
    background: $emoji-white-color;
    border-radius: 5px;
    z-index: 0;
    animation: hands-up 2s linear infinite;

    &:before {
      left: 25px;
      bottom: 5px;
      width: 40px;
      background: inherit;
      height: 10px;
      border-radius: 2px 10px 10px 2px;
      box-shadow: 1px -9px 0 1px $emoji-white-color, 2px -19px 0 2px $emoji-white-color, 3px -29px 0 3px $emoji-white-color;
    }
  }

  .emoji__thumb {
    border-bottom: 20px solid $emoji-white-color;
    border-left: 20px solid transparent;
    top: -25px;
    right: -25px;
    z-index: 2;
    transform: rotate(5deg);
    transform-origin: 0% 100%;
    animation: thumbs-up 2s linear infinite;

    &:before {
      border-radius: 50% 50% 0 0;
      background: $emoji-white-color;
      width: 10px;
      height: 12px;
      left: -10px;
      top: -8px;
      transform: rotate(-15deg);
      transform-origin: 100% 100%;
      box-shadow: -1px 4px 0 -1px $emoji-white-color;
    }
  }
}

.emoji--love {
  background: $emoji-love-color;

  &:after {
    content: "Loved!";
  }

  .emoji__heart {
    left: calc(50% - 40px);
    top: calc(50% - 40px);
    width: 80px;
    height: 80px;
    animation: heart-beat 1s linear infinite alternate;

    &:before,
    &:after {
      left: calc(50% - 20px);
      top: calc(50% - 32px);
      width: 40px;
      height: 64px;
      background: $emoji-white-color;
      border-radius: 20px 20px 0 0;
    }

    &:before {
      transform: translate(20px) rotate(-45deg);
      transform-origin: 0 100%;
    }

    &:after {
      transform: translate(-20px) rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
}

.emoji--yay {
  &:after {
    content: "Oh yeah!";
    animation: yay-reverse 1s linear infinite;
  }

  .emoji__face {
    animation: yay 1s linear infinite alternate;
  }

  .emoji__eyebrows {
    left: calc(50% - 3px);
    top: 30px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;
    box-shadow: -6px 0 0 0 $emoji-black-color, -36px 0 0 0px $emoji-black-color, 6px 0 0 0 $emoji-black-color, 36px 0 0 0px $emoji-black-color;

    &:before,
    &:after {
      width: 36px;
      height: 18px;
      border-radius: 60px 60px 0 0;
      background: transparent;
      border: 6px solid black;
      box-sizing: border-box;
      border-bottom: 0;
      bottom: 3px;
      left: calc(50% - 18px);
    }

    &:before {
      margin-left: -21px;
    }

    &:after {
      margin-left: 21px;
    }
  }

  .emoji__mouth {
    top: 60px;
    background: transparent;
    left: 50%;

    &:after {
      width: 80px;
      height: 80px;
      left: calc(50% - 40px);
      top: -75px;
      border-radius: 50%;
      background: transparent;
      border: 6px solid $emoji-black-color;
      box-sizing: border-box;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      z-index: 1;
    }

    &:before {
      width: 6px;
      height: 6px;
      background: transparent;
      border-radius: 50%;
      bottom: 5px;
      left: calc(50% - 3px);
      box-shadow: -25px 0 0 0 $emoji-black-color, 25px 0 0 0 $emoji-black-color, -35px -2px 30px 10px $emoji-angry-color, 35px -2px 30px 10px $emoji-angry-color;
    }
  }
}

.emoji--wow {
  &:after {
    content: "Wow";
  }
  .emoji__face {
    animation: wow-face 3s linear infinite;
  }

  .emoji__eyebrows {
    left: calc(50% - 3px);
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;
    box-shadow: -18px 0 0 0 $emoji-black-color, -33px 0 0 0 $emoji-black-color, 18px 0 0 0 $emoji-black-color, 33px 0 0 0 $emoji-black-color;
    animation: wow-brow 3s linear infinite;

    &:before,
    &:after {
      width: 24px;
      height: 20px;
      border: 6px solid $emoji-black-color;
      box-sizing: border-box;
      border-radius: 50%;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -3px;
      left: calc(50% - 12px);
    }

    &:before {
      margin-left: -25px;
    }

    &:after {
      margin-left: 25px;
    }
  }

  .emoji__eyes {
    width: 16px;
    height: 24px;
    left: calc(50% - 8px);
    top: 35px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 25px 0 0 0 $emoji-black-color, -25px 0 0 0 $emoji-black-color;
  }

  .emoji__mouth {
    width: 30px;
    height: 45px;
    left: calc(50% - 15px);
    top: 50%;
    border-radius: 50%;
    background: $emoji-black-color;
    animation: wow-mouth 3s linear infinite;
  }
}

.emoji--sad {
  &:after {
    content: "meh";
  }

  .emoji__face {
    animation: sad-face 2s ease-in infinite;
  }

  .emoji__eyebrows {
    left: calc(50% - 3px);
    top: 35px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;
    box-shadow: -40px 9px 0 0 $emoji-black-color, -25px 0 0 0 $emoji-black-color, 25px 0 0 0 $emoji-black-color, 40px 9px 0 0 $emoji-black-color;

    &:before,
    &:after {
      width: 30px;
      height: 20px;
      border: 6px solid $emoji-black-color;
      box-sizing: border-box;
      border-radius: 50%;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: 2px;
      left: calc(50% - 15px);
    }

    &:before {
      margin-left: -30px;
      transform: rotate(-30deg);
    }

    &:after {
      margin-left: 30px;
      transform: rotate(30deg);
    }
  }

  .emoji__eyes {
    width: 14px;
    height: 16px;
    left: calc(50% - 7px);
    top: 50px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 25px 0 0 0 $emoji-black-color, -25px 0 0 0 $emoji-black-color;

    &:after {
      background: $emoji-like-color;
      width: 12px;
      height: 12px;
      margin-left: 6px;
      border-radius: 0 100% 40% 50% / 0 50% 40% 100%;
      transform-origin: 0% 0%;
      animation: tear-drop 2s ease-in infinite;
    }
  }

  .emoji__mouth {
    width: 60px;
    height: 80px;
    left: calc(50% - 30px);
    top: 80px;
    box-sizing: border-box;
    border: 6px solid $emoji-black-color;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    background: transparent;
    animation: sad-mouth 2s ease-in infinite;

    &:after {
      width: 6px;
      height: 6px;
      background: transparent;
      border-radius: 50%;
      top: 4px;
      left: calc(50% - 3px);
      box-shadow: -18px 0 0 0 $emoji-black-color, 18px 0 0 0 $emoji-black-color;
    }
  }
}

.emoji--angry {
  background: linear-gradient($emoji-angry-color -10%, $emoji-base-color);
  background-size: 100%;
  animation: angry-color 2s ease-in infinite;

  &:after {
    content: "hmmpf!";
  }

  .emoji__face {
    animation: angry-face 2s ease-in infinite;
  }

  .emoji__eyebrows {
    left: calc(50% - 3px);
    top: 55px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;
    box-shadow: -44px 5px 0 0 $emoji-black-color, -7px 16px 0 0 $emoji-black-color, 7px 16px 0 0 $emoji-black-color, 44px 5px 0 0 $emoji-black-color;

    &:before,
    &:after {
      width: 50px;
      height: 20px;
      border: 6px solid $emoji-black-color;
      box-sizing: border-box;
      border-radius: 50%;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: 0;
      left: calc(50% - 25px);
    }

    &:before {
      margin-left: -25px;
      transform: rotate(15deg);
    }

    &:after {
      margin-left: 25px;
      transform: rotate(-15deg);
    }
  }

  .emoji__eyes {
    width: 12px;
    height: 12px;
    left: calc(50% - 6px);
    top: 70px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 25px 0 0 0 $emoji-black-color, -25px 0 0 0 $emoji-black-color;
  }

  .emoji__mouth {
    width: 36px;
    height: 18px;
    left: calc(50% - 18px);
    bottom: 15px;
    background: $emoji-black-color;
    border-radius: 50%;
    animation: angry-mouth 2s ease-in infinite;
  }
}

@keyframes heart-beat {
  25% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.6);
  }
}

@keyframes haha-face {
  10%,
  30%,
  50% {
    transform: translateY(25px);
  }
  20%,
  40% {
    transform: translateY(15px);
  }
  60%,
  80% {
    transform: translateY(0);
  }
  70%,
  90% {
    transform: translateY(-10px);
  }
}

@keyframes haha-mouth {
  10%,
  30%,
  50% {
    transform: scale(0.6);
    top: 45%;
  }
  20%,
  40% {
    transform: scale(0.8);
    top: 45%;
  }
  60%,
  80% {
    transform: scale(1);
    top: 50%;
  }
  70% {
    transform: scale(1.2);
    top: 50%;
  }
  90% {
    transform: scale(1.1);
    top: 50%;
  }
}

@keyframes yay {
  25% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
}

@keyframes wow-face {
  15%,
  25% {
    transform: rotate(20deg) translateX(-25px);
  }
  45%,
  65% {
    transform: rotate(-20deg) translateX(25px);
  }
  75%,
  100% {
    transform: rotate(0deg) translateX(0);
  }
}

@keyframes wow-brow {
  15%,
  65% {
    top: 25px;
  }
  75%,
  100%,
  0% {
    top: 15px;
  }
}

@keyframes wow-mouth {
  10%,
  30% {
    width: 20px;
    height: 20px;
    left: calc(50% - 10px);
  }
  50%,
  70% {
    width: 30px;
    height: 40px;
    left: calc(50% - 15px);
  }
  75%,
  100% {
    height: 50px;
  }
}

@keyframes sad-face {
  25%,
  35% {
    top: -15px;
  }
  55%,
  95% {
    top: 10px;
  }
  100%,
  0% {
    top: 0;
  }
}

@keyframes sad-mouth {
  25%,
  35% {
    transform: scale(0.85);
    top: 70px;
  }
  55%,
  100%,
  0% {
    transform: scale(1);
    top: 80px;
  }
}

@keyframes tear-drop {
  0%,
  100% {
    display: block;
    left: 35px;
    top: 15px;
    transform: rotate(45deg) scale(0);
  }
  25% {
    display: block;
    left: 35px;
    transform: rotate(45deg) scale(2);
  }
  49.9% {
    display: block;
    left: 35px;
    top: 65px;
    transform: rotate(45deg) scale(0);
  }
  50% {
    display: block;
    left: -35px;
    top: 15px;
    transform: rotate(45deg) scale(0);
  }
  75% {
    display: block;
    left: -35px;
    transform: rotate(45deg) scale(2);
  }
  99.9% {
    display: block;
    left: -35px;
    top: 65px;
    transform: rotate(45deg) scale(0);
  }
}

@keyframes hands-up {
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg) translateY(-10px);
  }
  75%,
  100% {
    transform: rotate(0deg);
  }
}

@keyframes thumbs-up {
  25% {
    transform: rotate(20deg);
  }
  50%,
  100% {
    transform: rotate(5deg);
  }
}

@keyframes angry-color {
  45%,
  60% {
    background-size: 250%;
  }
  85%,
  100%,
  0% {
    background-size: 100%;
  }
}

@keyframes angry-face {
  35%,
  60% {
    transform: translateX(0) translateY(10px) scale(0.9);
  }
  40%,
  50% {
    transform: translateX(-5px) translateY(10px) scale(0.9);
  }
  45%,
  55% {
    transform: translateX(5px) translateY(10px) scale(0.9);
  }
}

@keyframes angry-mouth {
  25%,
  50% {
    height: 6px;
    bottom: 25px;
  }
}

// [class^="emoji__"] {
//   animation-play-state: paused !important;
// }

// .emoji:not(.active) {
//   filter: saturate(1%);
// }

// .emoji.active,
// .emoji:hover {
//   // transform: scale(0.7);
//   filter: saturate(100%);
//   transition: 0.2s ease-in-out;

//   [class^="emoji__"] {
//     animation-play-state: running !important;
//   }
// }
</style>