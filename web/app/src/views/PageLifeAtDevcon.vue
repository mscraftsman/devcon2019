<template>
  <div>
    <h1 class="mega-rainbow">Life at DevCon</h1>

    <div class="container content-area">
      <Scene ambient="#ff0000" :gravity="[0,1,0]">
        <Camera type="arcRotate" :radius="10" :beta="Math.PI / 4"></Camera>
        <!-- <HemisphericLight diffuse="#0000FF"></HemisphericLight> -->
        <Ground :options="{ width: 10, height: 10 }">
          <!--  <Physics></Physics> -->
        </Ground>
        <Entity :position="[0, 5, 0]">
          <!-- <Physics :mass="1"></Physics> -->
          <Animation property="rotation.x" :duration="5">
            <Key frame="0%" :value="0"></Key>
            <Key frame="100%" :value="Math.PI * 2"></Key>
          </Animation>
          <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation>
          <PointLight diffuse="#181844"></PointLight>
          <Box v-for="position in boxes" :position="position">
            <Material emissive="#ff4932"></Material>
          </Box>
        </Entity>
      </Scene>
    </div>
  </div>
</template>


<script>
import { Entity, Scene, Box, Animation, PointLight, Camera, HemisphericLight, Key, Physics, Ground, Material } from 'vue-babylonjs';

export default {
  computed: {

  },
  data() {
    return {
      boxes: [
        [0, 0, 0],
        [0, 0, 4],
        [0, 0, -4],
        [0, 4, 0],
        [0, -4, 0],
        [0, 4, 4],
        [0, 4, -4],
        [0, -4, 4],
        [0, -4, -4],
        [4, 0, 0],
        [-4, 0, 0],
        [4, 0, 4],
        [4, 0, -4],
        [-4, 0, 4],
        [-4, 0, -4],
        [4, 4, 0],
        [4, -4, 0],
        [-4, 4, 0],
        [-4, -4, 0],
        [4, 4, 4],
        [4, 4, -4],
        [4, -4, 4],
        [4, -4, -4],
        [-4, 4, 4],
        [-4, 4, -4],
        [-4, -4, 4],
        [-4, -4, -4],
      ]
    }
  },
  components: { Scene, Box, Physics, Animation, Entity, PointLight, Camera, HemisphericLight, Key, Ground, Material },
};
</script>
