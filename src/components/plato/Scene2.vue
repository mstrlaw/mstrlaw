<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue'
import { TresCanvas } from '@tresjs/core'
import gsap from 'gsap'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

let deck: Reveal.Api | null = null

import {
  Box,
  Edges,
  Plane,
  useVideoTexture,
  Grid,
  OrbitControls,
} from '@tresjs/cientos'

// Section setup
const startSection = {
  id: 1,
  text: 'one',
  minPos: 0,
  maxPos: 9.9999,
  hasAnimated: false,
  coordinates: [0, 1, -10],
  controls: {
    x: 0,
    y: 1,
    z: 0,
  },
  camera: {
    x: 0,
    y: 1.5,
    z: 0,
  },
}

const activeSection = shallowRef({ ...startSection })
const sections = [
  {
    ...startSection,
  },
]

// Shapes
const cameraRef = shallowRef()
const groupRef = shallowRef()
const platformRef = shallowRef()
const algoRef = shallowRef()

// Algo Boxes

const algos = [
  {
    id: 1,
    args: [1.5, 1.5, 1.5],
    position: [1.5, 1.5, -1.5],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 2,
    args: [1.5, 1.5, 2.5],
    position: [1.5, -0.5, -1],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 3,
    args: [2, 1.5, 2.5],
    position: [-0.6, -1, -1.3],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 4,
    args: [1, 2.3, 1],
    position: [0.5, -1.5, -1],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 5,
    args: [2, 1.5, 1.5],
    position: [0.5, -1.8, 0.5],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 6,
    args: [1, 1.2, 3],
    position: [-1.2, -1.5, -0.2],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 7,
    args: [2, 2, 2],
    position: [1.5, 1.5, 1.5],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 8,
    args: [1.5, 2, 1.5],
    position: [-0.5, -0.5, 2],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 9,
    args: [1.5, 2, 1.5],
    position: [-0.5, -0.5, 2],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 10,
    args: [1.3, 1.5, 1.5],
    position: [1.8, -0.5, 1.8],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 11,
    args: [1.3, 1.5, 1.5],
    position: [1.8, -0.5, 1.8],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 12,
    args: [1.8, 2, 1.5],
    position: [-0.8, 2, -0.3],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 13,
    args: [1.5, 1.5, 1.5],
    position: [-1, 1.5, 1.7],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 14,
    args: [2, 2, 2],
    position: [-1.5, 0.5, 0.5],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 15,
    args: [2, 1, 3],
    position: [-2, -1.2, 0],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 16,
    args: [2, 2, 1],
    position: [-1.2, 1.2, -1.8],
    startScale: 0,
    endScale: 1,
  },
  {
    id: 17,
    args: [2, 2, 1],
    position: [-1.2, 1.2, -1.8],
    startScale: 0,
    endScale: 1,
  },
]

// Colors
const grayColor = '#99a1af'

// const controlsState = reactive({
//   minDistance: 0,
//   maxDistance: 100,
// })

const animProperties = {
  ease: 'power1.linear',
  duration: 1,
  stagger: {
    each: 0.25,
    repeat: 0,
    // yoyo: true,
  },
}

// Utility function to move scene camera
const positionCamera = ({ x = 0, y = 0, z = 0 }) => {
  gsap.to(cameraRef.value.position, {
    x,
    y,
    z,
    ...animProperties,
  })
  gsap.to(cameraRef.value.rotation, {
    x: 0,
    y: 0,
    z: 0,
    ...animProperties,
  })
}

onMounted(() => {
  //   Initialize slideshow
  const section = sections[0]
  activeSection.value = section

  positionCamera({
    x: activeSection.value.camera.x,
    y: activeSection.value.camera.y,
    z: activeSection.value.camera.z,
  })

  deck = new Reveal({
    embedded: false,
    hash: true,
    overview: false,
    touch: false,
    // autoSlide: 5000,
  })

  deck.initialize()

  //  Get scales of algorithm boxes to later animate them
  const scales = Array.from(algoRef.value.children).map((child) => child.scale)

  deck.on('slidechanged', (event) => {
    console.log(event.currentSlide.id)

    if (event.currentSlide.id === '1') {
      positionCamera({ x: 0, y: 1.5, z: 0 })
    }

    if (event.currentSlide.id === '2') {
      positionCamera({ x: -1, y: 1.5, z: 0 })

      gsap.to(scales, {
        x: 1,
        y: 1,
        z: 1,
        ease: 'power1.inOut',
        duration: 1,
        stagger: {
          each: 0.05,
          repeat: 0,
          yoyo: false,
        },
      })
    }
    if (event.currentSlide.id === '3') {
      // // Start algo scale animation
      setTimeout(() => {
        gsap.to(scales, {
          x: 1.05,
          y: 1.05,
          z: 1.05,
          ease: 'power1.inOut',
          duration: 3,
          stagger: {
            each: 0.25,
            repeat: -1,
            yoyo: true,
          },
        })
      }, 1000)

      //  Rotate 3d platform
      gsap.to(platformRef.value.rotation, {
        y: 180,
        ease: 'none',
        duration: 1900,
        stagger: {
          each: 0.25,
          repeat: -1,
          yoyo: false,
        },
      })
    }
  })
})

// const videoPath =
//   'https://videos.pexels.com/video-files/5201209/5201209-hd_1920_1080_30fps.mp4'
// const texture = ref()
// texture.value = await useVideoTexture(videoPath, { loop: true })
</script>

<template>
  <div id="app">
    <!-- <section v-for="section in sections" :key="section.id">
    <div class="section-content">
      {{ section.text }}
    </div>
  </section> -->
    <div class="reveal">
      <div class="slides">
        <section>
          <section id="1">
            <h1>Slide 1.1</h1>
            <p>This is the second slide</p>
          </section>
          <section id="2" data-transition="slide">
            <h1>Slide 1.2</h1>
            <p>This is the second slide</p>
          </section>
          <section id="3">
            <h1>Slide 1.3</h1>
            <p>This is the second slide</p>
          </section>
        </section>
      </div>
    </div>
    <TresCanvas window-size clear-color="#FFF" class="important-absolute">
      <TresPerspectiveCamera
        ref="cameraRef"
        :position="[
          startSection.camera.x,
          startSection.camera.y,
          startSection.camera.z,
        ]"
      />

      <TresGroup ref="groupRef" :position="sections[0].coordinates">
        <TresGroup ref="platformRef">
          <Box :args="[4, 4, 4]" :position="[0, 1, 0]">
            <TresMeshBasicMaterial color="#FFF" />
            <Edges color="#FFF" />
            <Edges>
              <TresMeshBasicMaterial color="#000" />
            </Edges>
          </Box>

          <TresGroup ref="algoRef" :position="[0, 1, 0]">
            <Box
              v-for="(algo, i) in algos"
              :key="i"
              :args="algo.args"
              :position="algo.position"
              :scale="algo.startScale"
            >
              <TresMeshBasicMaterial :color="grayColor" />
              <Edges color="#000" />
              <Edges>
                <TresMeshBasicMaterial color="#000" />
              </Edges>
            </Box>
          </TresGroup>
        </TresGroup>
      </TresGroup>
    </TresCanvas>
    <!-- Video -->
    <!-- <Plane :args="[16, 9]" :position="[0, 2, -15]" :rotation="[0, 0, 0]">
  <TresMeshBasicMaterial :map="texture" />
</Plane> -->
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
}
body {
  padding: 0;
  margin: 0;
}
.reveal {
  width: 100%;
  height: 100%;
}
.text {
  position: fixed;
  top: 0;
  left: 0;
  background: #b6b6b6b6;
  color: #000;
  padding: 10px;
  z-index: 10;
}
.reveal h1,
.reveal p {
  color: #000;
}
</style>
