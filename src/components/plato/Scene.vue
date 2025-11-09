<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue'
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import gsap from 'gsap'

import {
  Stars,
  Line2,
  Sphere,
  Box,
  Edges,
  ScrollControls,
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
  {
    id: 2,
    text: 'two',
    minPos: 10,
    maxPos: 19.9999,
    hasAnimated: false,
    coordinates: [0, 1, 0],
    controls: {
      x: 0,
      y: 3,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
  {
    id: 3,
    text: 'three',
    minPos: 20,
    maxPos: 29.9999,
    hasAnimated: false,
    coordinates: [0, 1, 10],
    controls: {
      x: 0,
      y: 5,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 20,
    },
  },
  {
    id: 4,
    text: 'four',
    minPos: 30,
    maxPos: 39.9999,
    hasAnimated: false,
    coordinates: [0, 1, 20],
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 30,
    },
  },
  {
    id: 5,
    text: 'five',
    minPos: 40,
    maxPos: 49.9999,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: -10,
    },
  },
  {
    id: 6,
    text: 'six',
    minPos: 50,
    maxPos: 59.9999,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: -20,
    },
  },
  {
    id: 7,
    text: 'seven',
    minPos: 60,
    maxPos: 69.9999,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
  {
    id: 8,
    text: 'eight',
    minPos: 70,
    maxPos: 79.9999,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
  {
    id: 9,
    text: 'nine',
    minPos: 80,
    maxPos: 89.9999,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
  {
    id: 10,
    text: 'ten',
    minPos: 90,
    maxPos: 101,
    hasAnimated: false,
    controls: {
      x: 0,
      y: 7,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
]

const canNavigate = ref(false)
const progress = shallowRef(0)

// Shapes
const cameraRef = shallowRef()
const groupRef = shallowRef()
const platformRef = shallowRef()
const algoRef = shallowRef()

// Algo Boxes

const algos = [
  {
    args: [1.5, 1.5, 1.5],
    position: [1.5, 1.5, -1.5],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.5, 1.5, 2.5],
    position: [1.5, -0.5, -1],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [2, 1.5, 2.5],
    position: [-0.6, -1, -1.3],
    startScale: 0,
    endScale: 1,
  },
  { args: [1, 2.3, 1], position: [0.5, -1.5, -1], startScale: 0, endScale: 1 },
  {
    args: [2, 1.5, 1.5],
    position: [0.5, -1.8, 0.5],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1, 1.2, 3],
    position: [-1.2, -1.5, -0.2],
    startScale: 0,
    endScale: 1,
  },
  { args: [2, 2, 2], position: [1.5, 1.5, 1.5], startScale: 0, endScale: 1 },
  {
    args: [1.5, 2, 1.5],
    position: [-0.5, -0.5, 2],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.5, 2, 1.5],
    position: [-0.5, -0.5, 2],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.3, 1.5, 1.5],
    position: [1.8, -0.5, 1.8],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.3, 1.5, 1.5],
    position: [1.8, -0.5, 1.8],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.8, 2, 1.5],
    position: [-0.8, 2, -0.3],
    startScale: 0,
    endScale: 1,
  },
  {
    args: [1.5, 1.5, 1.5],
    position: [-1, 1.5, 1.7],
    startScale: 0,
    endScale: 1,
  },
  { args: [2, 2, 2], position: [-1.5, 0.5, 0.5], startScale: 0, endScale: 1 },
  { args: [2, 1, 3], position: [-2, -1.2, 0], startScale: 0, endScale: 1 },
  { args: [2, 2, 1], position: [-1.2, 1.2, -1.8], startScale: 0, endScale: 1 },
  { args: [2, 2, 1], position: [-1.2, 1.2, -1.8], startScale: 0, endScale: 1 },
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

watch(progress, () => {
  const scrollPos = progress.value
  const sectionIndex = sections.findIndex(
    (a) => scrollPos >= a.minPos && scrollPos <= a.maxPos
  )
  const section = sections[sectionIndex]
  activeSection.value = section

  /**
   * Move scene
   */
  // gsap.to(groupRef.value.position, {
  //   y: activeSection.value.controls.y,
  //   ...animProperties,
  // });

  /**
   * Move camera
   */
  positionCamera({
    x: activeSection.value.camera.x,
    y: activeSection.value.camera.y,
    z: activeSection.value.camera.z,
  })
  switch (section.id) {
    case 2:
      if (section.hasAnimated) {
        break
      }
      sections[sectionIndex].hasAnimated = true

      // -- Rotate group --
      // gsap.to(platformRef.value.rotation, {
      //   y: 180,
      //   ease: 'none',
      //   duration: 900,
      //   stagger: {
      //     each: 0.25,
      //     repeat: -1,
      //     yoyo: false,
      //   },
      // });
      break
    case 3:
      if (section.hasAnimated) {
        break
      }
      sections[sectionIndex].hasAnimated = true
      // console.log(algoRef.value.position);

      const scales = Array.from(algoRef.value.children).map(
        (child) => child.scale
      )

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

      // // Start scale animation
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

      break
  }
})

function toggleCamera() {
  canNavigate.value = !canNavigate.value

  if (canNavigate.value === false) {
    positionCamera({
      x: activeSection.value.camera.x,
      y: activeSection.value.camera.y,
      z: activeSection.value.camera.z,
    })
    positionCamera({
      x: activeSection.value.camera.x,
      y: activeSection.value.camera.y,
      z: activeSection.value.camera.z,
    })
  }
}

// boxRef.value.instance.rotation.x = progress.value * 10;
// boxRef.value.instance.rotation.y = progress.value * 2;

onMounted(() => {
  window.scrollTo(0, 0)
  window.addEventListener('scroll', () => {
    const position = document.documentElement.scrollTop
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollValue = (position * 100) / calcHeight
    progress.value = scrollValue
  })
})

const videoPath =
  'https://videos.pexels.com/video-files/5201209/5201209-hd_1920_1080_30fps.mp4'
const texture = ref()
texture.value = await useVideoTexture(videoPath, { loop: true })
</script>

<template>
  <div class="text">
    Section: {{ activeSection.id }}
    <button @click="toggleCamera">Toggle cam</button> Free nav:
    {{ canNavigate }}
    <small>({{ Math.round(progress) }})</small>
  </div>
  <section v-for="section in sections" :key="section.id">
    <div class="section-content">
      {{ section.text }}
    </div>
  </section>
  <div class="content">stuff</div>
  <TresCanvas window-size clear-color="#FFF" class="important-absolute">
    <TresPerspectiveCamera
      ref="cameraRef"
      :position="[
        startSection.camera.x,
        startSection.camera.y,
        startSection.camera.z,
      ]"
    />
    <OrbitControls v-if="canNavigate" />

    <TresGroup ref="groupRef" :position="[0, 1, 0]">
      <Box :args="[4, 4, 4]" :position="sections[0].coordinates"> </Box>
      <Box :args="[4, 4, 4]" :position="sections[1].coordinates"> </Box>
      <Box :args="[4, 4, 4]" :position="sections[2].coordinates"> </Box>
      <Box :args="[4, 4, 4]" :position="sections[3].coordinates"> </Box>

      <!-- <Plane :args="[16, 9]" :position="[0, 2, -15]" :rotation="[0, 0, 0]">
        <TresMeshBasicMaterial :map="texture" />
      </Plane> -->
      <!-- <TresGroup ref="newspaperRef" :position="[0, 0, -10]">
        <Box ref="newsBg" :args="[4, 4, 0.5]" :position="[0, 1, 0]">
          <TresMeshBasicMaterial color="#FFF" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box ref="newsImg" :args="[2, 1.5, 0.5]" :position="[-0.7, 1.9, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.3, 0.2, 0.5]" :position="[1.1, 2.5, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.2, 0.2, 0.5]" :position="[1.05, 2.2, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.3, 0.2, 0.5]" :position="[1.1, 1.9, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>

        <Box :args="[1.3, 0.1, 0.5]" :position="[1.1, 1.6, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.3, 0.1, 0.5]" :position="[1.1, 1.4, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1, 0.1, 0.5]" :position="[0.95, 1.2, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>

        <Box :args="[1.5, 0.2, 0.5]" :position="[-0.95, 0.85, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.7, 0.2, 0.5]" :position="[-0.85, 0.55, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>

        <Box :args="[1.3, 0.6, 0.5]" :position="[1.1, 0.65, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>

        <Box :args="[1, 0.1, 0.5]" :position="[0.95, 0, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.3, 0.1, 0.5]" :position="[1.1, 0.2, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1.3, 0.1, 0.5]" :position="[1.1, -0.2, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
        <Box :args="[1, 0.1, 0.5]" :position="[0.95, -0.4, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>

        <Box ref="newsImg" :args="[2, 1, 0.5]" :position="[-0.7, -0.2, 0.1]">
          <TresMeshBasicMaterial :color="grayColor" />
          <Edges color="#000" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
      </TresGroup> -->

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

    <!-- <Sphere :scale="0.5" :position="[1, 1, 0]" />
    <Sphere :scale="0.5" :position="[1, 1, 0]" /> -->

    <!-- <Stars :radius="120" /> -->
    <Grid
      :position="[0, -1, 0]"
      :args="[2, 2]"
      cell-color="#000"
      :cell-size="0"
      :cell-thickness="0.5"
      section-color="#000"
      :section-size="2"
      :section-thickness="1.3"
      :infinite-grid="true"
      :fade-from="0"
      :fade-distance="80"
      :fade-strength="1"
    />
  </TresCanvas>
</template>

<style>
body {
  padding: 0;
  margin: 0;
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

section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  /* background: red; */
  opacity: 0.3;
}
</style>
