<script setup>
import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

// Variants are generated at build time by FeaturedMedia.astro; this component
// only picks between them. Each entry: { alt, avif, webp, jpg, width, height }.
const props = defineProps({
  images: { type: Array, required: true },
})

const carousel = ref(null)

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
}

/**
 * Slides to `index` taking the shortest way around the loop.
 *
 * The carousel's `slideTo` accepts out-of-range indexes and normalizes them
 * once the transition ends, so passing `current - 1` from the first slide
 * wraps to the last one seamlessly, instead of scrolling all the way back.
 */
const goToSlide = (index) => {
  if (!carousel.value) return

  const count = props.images.length
  const current = carousel.value.currentSlide
  const normalized = ((current % count) + count) % count

  let offset = index - normalized
  if (offset > count / 2) {
    offset -= count
  } else if (offset < -count / 2) {
    offset += count
  }

  carousel.value.slideTo(current + offset)
}
</script>

<template>
  <div class="w-full md:max-w-7xl mx-auto my-16">
    <Carousel ref="carousel" v-bind="carouselConfig">
      <Slide
        v-for="(image, index) in props.images"
        :key="index"
        @click="goToSlide(index)"
      >
        <div
          class="relative aspect-9/10 w-64 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 my-4 hover:cursor-grab active:cursor-grabbing rotate-2"
          @contextmenu.prevent
        >
          <picture>
            <source :srcset="image.avif" type="image/avif" />
            <source :srcset="image.webp" type="image/webp" />
            <img
              :src="image.jpg"
              :width="image.width"
              :height="image.height"
              :alt="image.alt"
              loading="lazy"
              decoding="async"
              draggable="false"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style>
.carousel__viewport img {
  /* Blocks the iOS long-press "Save Image" callout */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  /* Blocks the WebKit/Blink native image drag-out */
  -webkit-user-drag: none;
  /* Retargets clicks and right-clicks to the wrapper, so the browser never
     sees an <img> as the event target. Slide clicks still bubble up. */
  pointer-events: none;
}

.carousel__viewport:before,
.carousel__viewport:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50px;
  z-index: 1;
  @media screen and (max-width: 1150px) {
    display: none;
  }
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
