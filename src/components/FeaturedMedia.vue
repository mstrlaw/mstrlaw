<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { Image } from '@unpic/vue';

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
      snapAlign: 'start',
      gap: 300,
    },
    1100: {
      itemsToShow: 5,
      snapAlign: 'start',
      gap: 300,
    },
    1400: {
      itemsToShow: 5,
      snapAlign: 'start',
      gap: 300,
    },
  },
};
</script>

<template>
  <div class="my-16 w-full md:max-w-7xl mx-auto">
    <div class="overflow-hidden py-4 sm:gap-8">
      <!-- <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"> -->
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(image, index) in images" :key="index">
          <!-- <div class="carousel__item">{{ slide }}</div> -->
          <div
            class="relative aspect-9/10 w-64 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2 my-4 hover:cursor-grab active:cursor-grabbing"
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
            <!-- <img
              alt=""
              loading="lazy"
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              class="absolute inset-0 h-full w-full object-cover"
              src="/assets/photos/1.jpeg"
              style="color: transparent"
            /> -->
          </div>
        </Slide>
        <!-- <template #addons>
          <Navigation />
          <Pagination />
        </template> -->
      </Carousel>
    </div>
  </div>
</template>
