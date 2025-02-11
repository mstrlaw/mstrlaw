<script setup>
import { ref } from 'vue';

let visibility = ref(false);

const toggleVisibility = () => {
  visibility.value = !visibility.value;
};
</script>

<template>
  <header class="pointer-events-none relative z-50 flex flex-none flex-col">
    <div class="top-0 z-10 h-16 pt-6">
      <div class="sm:px-8 top-(--header-top,--spacing(6)) w-full">
        <div class="mx-auto w-full max-w-7xl lg:px-4">
          <div class="relative px-8 lg:px-0">
            <div class="mx-auto max-w-5xl">
              <div class="relative flex items-center gap-4">
                <!-- <div class="flex flex-1"></div> -->
                <div class="pointer-events-auto h-card">
                  <a
                    href="/"
                    class="dark:text-zinc-200 font-semibold p-nickname"
                    >mstrlaw
                  </a>
                </div>
                <div class="flex flex-1 justify-end md:justify-center">
                  <div class="pointer-events-auto md:hidden">
                    <button
                      class="group flex items-center h-full rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                      @click="toggleVisibility"
                    >
                      Menu
                      <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                      >
                        <path
                          d="M1.75 1.75 4 4.25l2.25-2.5"
                          fill="none"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      v-if="visibility"
                      class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
                      id="headlessui-popover-backdrop-:Rjmiqja:"
                      aria-hidden="true"
                      style=""
                    ></div>
                    <div
                      v-if="visibility"
                      class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
                      id="headlessui-popover-panel-:Rrmiqja:"
                      tabindex="-1"
                    >
                      <div
                        v-if="visibility"
                        class="flex flex-row-reverse items-center justify-between"
                      >
                        <button
                          aria-label="Close menu"
                          class="-m-1 p-1"
                          type="button"
                          data-headlessui-state="open active"
                          data-open=""
                          data-active=""
                          @click="toggleVisibility"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                          >
                            <path
                              d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <h2
                          class="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                        >
                          mstrlaw
                        </h2>
                      </div>
                      <nav class="mt-6">
                        <ul
                          class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
                        >
                          <li>
                            <a
                              class="block py-2"
                              data-open=""
                              data-active=""
                              href="/posts"
                              >Garden</a
                            >
                          </li>
                          <li>
                            <a
                              class="block py-2"
                              data-open=""
                              data-active=""
                              href="/projects"
                              >Projects</a
                            >
                          </li>
                          <li>
                            <a
                              class="block py-2"
                              data-open=""
                              data-active=""
                              href="/library"
                              >Library</a
                            >
                          </li>
                          <!-- <li>
                            <a
                              class="block py-2"
                              data-open=""
                              data-active=""
                              href="/uses"
                              >Uses</a
                            >
                          </li> -->
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <nav class="pointer-events-auto hidden md:block">
                    <ul
                      class="flex items-center rounded-full h-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                    >
                      <li>
                        <a
                          class="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-300"
                          href="/posts"
                          >Garden</a
                        >
                      </li>
                      <li>
                        <a
                          class="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-300"
                          href="/projects"
                          >Projects</a
                        >
                      </li>
                      <li>
                        <a
                          class="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-300"
                          href="/library"
                          >Library</a
                        >
                      </li>
                      <!-- <li>
                        <a
                          class="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-300"
                          href="/values"
                          >Values</a
                        >
                      </li>
                      <li>
                        <a
                          class="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-300"
                          href="/uses"
                          >Uses</a
                        >
                      </li> -->
                    </ul>
                  </nav>
                </div>
                <div v-if="false" class="flex justify-end md:flex-1">
                  <div class="pointer-events-auto">
                    <button
                      type="button"
                      aria-label="Switch to light theme"
                      class="group rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-indigo-50 [@media(prefers-color-scheme:dark)]:stroke-indigo-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-indigo-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-indigo-600"
                      >
                        <path
                          d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                        ></path>
                        <path
                          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                          fill="none"
                        ></path></svg
                      ><svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-indigo-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-indigo-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
                      >
                        <path
                          d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
