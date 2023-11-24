<template>
  <nav class="">
    <div class="max-w-full px-20 mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <nuxt-link class="flex-shrink-0" to="/"
            ><nuxt-img
              class="w-8 h-8 duration-200 hover:scale-75 active:scale-50"
              src="/logo.svg"
              alt="Home"
          /></nuxt-link>
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <nuxt-link
                class="px-3 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-800 hover:underline dark:hover:text-white"
                to="#Blogs"
                >Blogs</nuxt-link
              >
              <nuxt-link
                class="left-0 px-3 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-800 hover:underline dark:hover:text-white"
                to="#whoAreWe"
                >Who are we</nuxt-link
              >
              <nuxt-link
                class="px-3 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-800 hover:underline dark:hover:text-white"
                to="#whatWeOffer"
                >What we offer</nuxt-link
              >
              <nuxt-link
                class="px-3 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-800 hover:underline dark:hover:text-white"
                to="#partners"
                >Partners</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="relative ml-3">
              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border rounded-md dark:text-gray-50 hover:bg-gray-100 hover:outline-1 dark:hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-700"
                    @click="openOptionsMenu"
                  >
                    Inquiry Now
                  </button>
                </div>
                <div
                  class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 md:hidden"
                >
                  <div
                    class="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="optionsMenu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span class="flex flex-col">
                        <span> Settings </span>
                      </span>
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span class="flex flex-col">
                        <span> Account </span>
                      </span>
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    >
                      <span class="flex flex-col">
                        <span> Logout </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="w-8 h-8"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
          href="/#"
        >
          Home
        </a>
        <a
          class="block px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white"
          href="/#"
        >
          Gallery
        </a>
        <a
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
          href="/#"
        >
          Content
        </a>
        <a
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
          href="/#"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const name = ref("Vue.js");
function openOptionsMenu(event) {
  // displayoptionsMenu = ref(true);
  alert(`Current value is ${name.value}!`);
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName);
  }
}
//how to write a scroll to function in nuxt3 vue
// const scrollTo = (element) => {
//   window.scroll({
//     behavior: "smooth",
//     left: 0,
//     duration: 1000,
//     top: element.offsetTop,
//   });
// };
</script>

<style scoped></style>
