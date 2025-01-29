<script setup>
// import { ref } from 'vue';

// let visibility = ref(false);

// const toggleVisibility = () => {
//   visibility.value = !visibility.value;
// };
</script>

<template>
  hello
  <!-- <vue-horizontal>
    <div class="item">
      <h3>HTML Tag</h3>
      <p>As you can see these are just html elements.</p>
    </div>
    <section>
      <h4>Don't have to be the same tag</h4>
      <p>I used a h4 instead of a h3</p>
    </section>
    <section>
      <h3>Navigation Button</h3>
      <p>The navigation button will appear if there is an overflow.</p>
    </section>
    <section>
      <h3>Scroll</h3>
      <p>You can just trackpad to scroll still!</p>
    </section>
    <section>
      <h3>Touch screen</h3>
      <p>Touch screen works too!</p>
    </section>
    <section v-for="item in items" :key="item.i">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
    <section>
      <h3>Last item?</h3>
      <p>Maybe you want to display something different at the end?</p>
    </section>
  </vue-horizontal> -->
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2"
      >
        <img
          alt=""
          loading="lazy"
          width="3744"
          height="5616"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 640px) 18rem, 11rem"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=16&amp;q=75     16w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=32&amp;q=75     32w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=48&amp;q=75     48w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=64&amp;q=75     64w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=96&amp;q=75     96w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=128&amp;q=75   128w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=256&amp;q=75   256w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=384&amp;q=75   384w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=640&amp;q=75   640w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=750&amp;q=75   750w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=828&amp;q=75   828w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1080&amp;q=75 1080w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1200&amp;q=75 1200w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1920&amp;q=75 1920w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=2048&amp;q=75 2048w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=3840&amp;q=75 3840w
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
      <div
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2"
      >
        <img
          alt=""
          loading="lazy"
          width="3936"
          height="2624"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 640px) 18rem, 11rem"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=16&amp;q=75     16w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=32&amp;q=75     32w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=48&amp;q=75     48w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=64&amp;q=75     64w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=96&amp;q=75     96w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=128&amp;q=75   128w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=256&amp;q=75   256w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=384&amp;q=75   384w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=640&amp;q=75   640w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=750&amp;q=75   750w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=828&amp;q=75   828w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1080&amp;q=75 1080w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1200&amp;q=75 1200w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1920&amp;q=75 1920w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=2048&amp;q=75 2048w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75 3840w
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
      <div
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2"
      >
        <img
          alt=""
          loading="lazy"
          width="5760"
          height="3840"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 640px) 18rem, 11rem"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=16&amp;q=75     16w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=32&amp;q=75     32w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=48&amp;q=75     48w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=64&amp;q=75     64w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=96&amp;q=75     96w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=128&amp;q=75   128w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=256&amp;q=75   256w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=384&amp;q=75   384w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=640&amp;q=75   640w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=750&amp;q=75   750w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=828&amp;q=75   828w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1080&amp;q=75 1080w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1200&amp;q=75 1200w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1920&amp;q=75 1920w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=2048&amp;q=75 2048w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75 3840w
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
      <div
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2"
      >
        <img
          alt=""
          loading="lazy"
          width="2400"
          height="3000"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 640px) 18rem, 11rem"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=16&amp;q=75     16w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=32&amp;q=75     32w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=48&amp;q=75     48w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=64&amp;q=75     64w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=96&amp;q=75     96w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=128&amp;q=75   128w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=256&amp;q=75   256w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=384&amp;q=75   384w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=640&amp;q=75   640w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=750&amp;q=75   750w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=828&amp;q=75   828w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1080&amp;q=75 1080w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1200&amp;q=75 1200w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1920&amp;q=75 1920w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=2048&amp;q=75 2048w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=3840&amp;q=75 3840w
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
      <div
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2"
      >
        <img
          alt=""
          loading="lazy"
          width="4240"
          height="2384"
          decoding="async"
          data-nimg="1"
          class="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 640px) 18rem, 11rem"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=16&amp;q=75     16w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=32&amp;q=75     32w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=48&amp;q=75     48w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=64&amp;q=75     64w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=96&amp;q=75     96w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=128&amp;q=75   128w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=256&amp;q=75   256w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=384&amp;q=75   384w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=640&amp;q=75   640w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=750&amp;q=75   750w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=828&amp;q=75   828w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1080&amp;q=75 1080w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1200&amp;q=75 1200w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1920&amp;q=75 1920w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=2048&amp;q=75 2048w,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=3840&amp;q=75 3840w
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
</template>
