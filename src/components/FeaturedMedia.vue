<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { Image } from '@unpic/vue';

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
        <Slide v-for="slide in 10" :key="slide">
          <!-- <div class="carousel__item">{{ slide }}</div> -->
          <div
            class="relative aspect-9/10 w-64 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2 my-4 hover:cursor-grab active:cursor-grabbing"
          >
            <Image
              src="/photos/a.jpeg"
              layout="constrained"
              loading="lazy"
              background="auto"
              width="800"
              height="1066"
              alt="A lovely bath"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover"
              fallback="netlify"
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
