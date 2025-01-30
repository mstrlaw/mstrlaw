<script setup>
import { ref } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { Image } from '@unpic/vue';

const activeSlide = ref(0);

const images = [
  {
    name: 'j',
    alt: 'A man standing on top of a snowy mountain peak holding an ice axe.',
  },
  {
    name: 'c',
    alt: 'A white truck in an orange tinted desert.',
  },
  {
    name: 'l',
    alt: 'A man in a wetsuit holding a surfboard and laughing at the beach.',
  },
  {
    name: 'b',
    alt: 'A group of people marching on snow with tall white mountains in the background.',
  },
  {
    name: 'd',
    alt: 'A palm tree and an egyptian obelisc in front of a blue and pink sky.',
  },
  {
    name: 'f',
    alt: 'A girl looking back while skating on a longboard surrounded by palm trees.',
  },
  {
    name: 'e',
    alt: 'Walking down a wooden pathway with a surfboard towards the ocean.',
  },
  {
    name: 'a',
    alt: 'Two roped men climbing up a steeped bank of snow.',
  },
  {
    name: 'g',
    alt: 'A girl riding a colorful Google bike while laughing at the camera.',
  },
  {
    name: 'h',
    alt: 'The Atkas statue in Rockefeller Center in New York.',
  },
  {
    name: 'k',
    alt: 'A man looking facing the sun set horizon with a dark orange rock wall behind him.',
  },
  {
    name: 'i',
    alt: 'A woman flying a Cesna plane with a man as the passenger looking out the window.',
  },
];

const carouselConfig = {
  itemsToShow: 2,
  wrapAround: true,
  gap: 150,
  snapAlign: 'center',
  breakpointMode: 'carousel',
  breakpoints: {
    768: {
      itemsToShow: 3,
      gap: 200,
    },
    992: {
      itemsToShow: 5,
      snapAlign: 'center',
      gap: 300,
    },
    1100: {
      itemsToShow: 5,
      snapAlign: 'center',
      gap: 300,
    },
    1400: {
      itemsToShow: 5,
      snapAlign: 'center',
      gap: 300,
    },
  },
};

const goToSlide = (index) => {
  activeSlide.value = index;
};
</script>

<template>
  <div class="w-full md:max-w-7xl mx-auto my-16">
    <Carousel v-model="activeSlide" v-bind="carouselConfig">
      <Slide
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
      >
        <div
          class="relative aspect-9/10 w-64 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 my-4 hover:cursor-grab active:cursor-grabbing rotate-2"
        >
          <Image
            :src="`/photos/${image.name}.jpeg`"
            layout="constrained"
            loading="lazy"
            background="auto"
            width="800"
            height="1066"
            :alt="image.alt"
            decoding="async"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style>
.carousel__viewport {
  --gradient-color: var(--color-zinc-50);
}
.carousel__viewport:before,
.carousel__viewport:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50px;
  z-index: 1;
}
.carousel__viewport:before {
  left: 0;
  background: linear-gradient(
    90deg,
    var(--gradient-color) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.carousel__viewport:after {
  right: 0;
  background: linear-gradient(
    -90deg,
    var(--gradient-color) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
