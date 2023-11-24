<template>
  <!-- TODO: complete this  -->
  <!-- overflow-y-hidden overflow-x-hidden flex-wrap flex-col -->
  <div
    class="flex bg-transparent py-[24px] px-[64px] h-screen w-screen min-h-screen gap-[24px] justify-center"
  >
    <div class="relative z-0 w-full h-24">
      <nav
        class="flex w-full h-16 text-lg font-semibold align-middle place-content-between place-items-center"
      >
        <ul class="flex-none">
          <li>
            <nuxt-link to="/"
            
              ><nuxt-img
                class="duration-200 hover:scale-75 active:scale-50"
                src="/logo.svg"
                width="64"
                alt="Home"
            /></nuxt-link>
          </li>
        </ul>
        <!-- TODO: ADD GSAP FOR SCROLL EFFECT TO SECTION -->
        <ul class="flex flex-auto gap-12">
          <li class="w-[1000px] px-5">
            HenWan Sdn. Bhd.
          </li>
          <li class="duration-200 hover:scale-75 active:scale-50">
            <nuxt-link to="/#whoAreWe">Who are we</nuxt-link>
          </li>
          <li class="duration-200 hover:scale-75 active:scale-50">
            <nuxt-link to="/#blogs">Blogs</nuxt-link>
          </li>
          <li class="duration-200 hover:scale-75 active:scale-50">
            <nuxt-link to="/#whatWeOffer">What we offer</nuxt-link>
          </li>
          <li class="duration-200 hover:scale-75 active:scale-50">
            <nuxt-link to="/#partners">Partners</nuxt-link>
          </li>
        </ul>
        <ul class="flex-none">
          <li
            class="rounded-md border-solid border border-spacing-1 border-gray-800 hover:bg-[#F8D377] hover:text-[#FBFFFE] duration-200 hover:scale-75 active:scale-50 p-[10px]"
          >
            <nuxt-link to="/#contactUs">Inquiry now</nuxt-link>
          </li>
        </ul>
      </nav>
      <slot />
    </div>
  </div>
</template>

<script setup></script>
