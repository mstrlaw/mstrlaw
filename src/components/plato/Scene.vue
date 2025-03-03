<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import gsap from 'gsap';

import {
  Stars,
  Line2,
  Sphere,
  Box,
  Edges,
  ScrollControls,
  Text3D,
  Grid,
  OrbitControls,
} from '@tresjs/cientos';

// Section setup
const startSection = {
  id: 1,
  text: 'one',
  minPos: 0,
  maxPos: 9.9999,
  hasAnimated: false,
  controls: {
    x: 0,
    y: 1,
    z: 0,
  },
  camera: {
    x: 0,
    y: 1.5,
    z: 10,
  },
};
const activeSection = shallowRef({ ...startSection });
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
    controls: {
      x: 0,
      y: 5,
      z: 0,
    },
    camera: {
      x: 0,
      y: 1.5,
      z: 10,
    },
  },
  {
    id: 4,
    text: 'four',
    minPos: 30,
    maxPos: 39.9999,
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
      z: 10,
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
      z: 10,
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
];

const animating = ref(false);
const progress = shallowRef(0);

// Shapes
const cameraRef = shallowRef();
const groupRef = shallowRef();
const algoRef = shallowRef();

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
];

// Colors
const algoColor = '#90a1b9';

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
};

watch(progress, () => {
  const scrollPos = progress.value;
  const sectionIndex = sections.findIndex(
    (a) => scrollPos >= a.minPos && scrollPos <= a.maxPos
  );
  const section = sections[sectionIndex];
  activeSection.value = section;

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
  gsap.to(cameraRef.value.position, {
    y: activeSection.value.camera.y,
    ...animProperties,
  });

  switch (section.id) {
    case 2:
      if (section.hasAnimated) {
        break;
      }
      // console.log(algoRef.value.position);

      const scales = Array.from(algoRef.value.children).map(
        (child) => child.scale
      );

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
      });

      // Start scale animation
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
        });
      }, 1000);

      sections[sectionIndex].hasAnimated = true;

      // -- Rotate group --
      gsap.to(groupRef.value.rotation, {
        y: 180,
        ease: 'none',
        duration: 900,
        stagger: {
          each: 0.25,
          repeat: -1,
          yoyo: false,
        },
      });

      break;
  }

  if (progress.value > 2) {
    if (!animating.value) {
      animating.value = true;

      // gsap.to(groupRef.value.position, {
      //   z: 2.5,
      //   ...animProperties,
      // });
      // gsap.to(groupRef.value.rotation, {
      //   y: 0.5,
      //   ...animProperties,
      // });
    }
  } else {
    animating.value = false;
  }
});

// boxRef.value.instance.rotation.x = progress.value * 10;
// boxRef.value.instance.rotation.y = progress.value * 2;

onMounted(() => {
  window.scrollTo(0, 0);
  window.addEventListener('scroll', () => {
    const position = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = (position * 100) / calcHeight;
    progress.value = scrollValue;
  });
});
</script>

<template>
  <div class="text">
    {{ animating }} {{ activeSection.text }} {{ progress }}
  </div>
  <section v-for="section in sections" :key="section.id">
    <div class="section-content">
      {{ section.text }}
    </div>
    <div class="section-content" />
  </section>
  <div class="content">stuff</div>
  <TresCanvas window-size clear-color="#FFF" class="important-absolute">
    <TresPerspectiveCamera ref="cameraRef" :position="[0, 1.5, 10]" />

    <TresGroup ref="groupRef" :position="[0, 1, 0]">
      <Box ref="platform" :args="[4, 4, 4]" :position="[0, 0, 0]">
        <TresMeshBasicMaterial color="#FFF" />
        <Edges color="#FFF" />
        <Edges>
          <TresMeshBasicMaterial color="#000" />
        </Edges>
      </Box>

      <TresGroup ref="algoRef">
        <Box
          v-for="(algo, i) in algos"
          :key="i"
          :args="algo.args"
          :position="algo.position"
          :scale="algo.startScale"
        >
          <TresMeshBasicMaterial :color="algoColor" />
          <Edges color="#FFF" />
          <Edges>
            <TresMeshBasicMaterial color="#000" />
          </Edges>
        </Box>
      </TresGroup>
    </TresGroup>
    <!-- <TresGroup ref="groupRef" :position="[0, 0, 0]">
      <Line2
        :points="[
          [4, -1, 0],
          [-4, -1, 0],
          [-4, -10, 0],
          [-2, -10, 0],
          [-2, -6, 0],
          [0, -6, 0],
          [0, -4, 0],

          [4, -4, 0],

          [4, -1, 0],
        ]"
        :position="[-2, 4, 0]"
        :line-width="5"
        :scale="0.5"
        color="#FEFEFE"
      />

      <Line2
        :points="[
          [4, 0, 0],
          [-4, 0, 0],
          [-4, -5, 0],

          [1, -5, 0],
          [1, -7, 0],
          [4, -7, 0],
          [4, 0, 0],
        ]"
        :position="[2.75, 3.5, 0]"
        :line-width="5"
        :scale="0.5"
        color="#FEFEFE"
      />

      <Line2
        :points="[
          [3, 0, 0],
          [3, -4, 0],
          [8, -4, 0],
          [8, -2, 0],
          [6, -2, 0],
          [6, 0, 0],
          [3, 0, 0],
        ]"
        :position="[-4, 0, 0]"
        :line-width="5"
        :scale="0.5"
        color="#FEFEFE"
      />

      <Line2
        :points="[
          [4, 0.5, 0],
          [1.5, 0.5, 0],
          [1.5, -5.5, 0],
          [-1, -5.5, 0],
          [-1, -8, 0],
          [4, -8, 0],
          [4, 0.5, 0],
        ]"
        :position="[0, 0, 0]"
        :line-width="5"
        :scale="0.5"
        color="#FEFEFE"
      />
    </TresGroup> -->

    <!-- <Sphere :scale="0.5" :position="[1, 1, 0]" />
    <Sphere :scale="0.5" :position="[1, 1, 0]" /> -->

    <!-- <OrbitControls /> -->
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
  background: #fff;
  color: #000;
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
