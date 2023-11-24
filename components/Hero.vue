<template>
  <!-- 
    Design size
    width: 1440px
    height: 650px
  -->
  <!-- <div class="hero-banner">
    <div class="hero-body">
      <h1 class="text-heading">
        Get your dream body with us at
        <span class="text-gradient-primary">Fitness</span>
        <p class="text-body">
          Fitness help you to create an environment that supports <br />
          your program to live a healthy life, and get a beautiful <br />
          body shape
        </p>
      </h1>
    </div>
    <div class="flex gap-4 my-10">
      <a href="#" class="button-primary">Get Started</a>
      <a href="#" class="link-primary">
        <img :src="PlayButtonGradient" class="w-8" alt="" />
        <span class="font-semibold underline">How It Works?</span>
      </a>
    </div>
    <img
        src="https://fakeimg.pl/600x400"
        class="top-0 bottom-0 z-20 xl:absolute xl:right-0"
        alt=""
      /> -->
  <!-- <div class="right-section">
      
    </div> -->
  <section class="bg-transparent dark:bg-gray-900">
    <div class="hero-banner">
      <div class="hero-body">
        <div class="left-section">
          <h2 class="text-intro-heading">
            Elevate Your Snacking Experience with <br />
          </h2>
          <h1 class="text-heading">
            <span class="text-gradient-primary">Henwan Sdn Bhd.</span>
          </h1>
          <p class="mt-8 text-xl font-light text-gray-500">
            Savor Extraordinary Flavors with Henwan! <br />
            Every bite is a celebration! Join us in the art of flavor.
          </p>
          <div class="flex gap-4 my-10">
            <a href="#" class="button-primary">Contact Us Now</a>
            <a href="#" class="link-primary">
              <!-- <img :src="PlayButtonGradient" class="w-8" alt="" /> -->
              <span class="font-semibold underline"
                >What Are Our Services?</span
              >
            </a>
          </div>
        </div>
        <nuxt-img
          class="absolute md:w-3/4 -z-20 xl:top-0 right-32 opacity-40"
          src="/hero-2.png"
          alt="candy rain"
        />
        <div class="right-section">
          <nuxt-img
            class="absolute bottom-0 scale-50 -top-[30%] rotate-12 -z-10 md:right-[15%] md:w-1/2"
            src="/hero.svg"
            alt="lollipop"
          />
          <div
            class="absolute px-3 py-3 text-black rounded-lg bottom-[18%] md:right-[8%] w-72 border bg-white/50"
          >
            <span class="font-bold">Subscribe to our Newsletter</span>
            <div>
              <label for="heroNewsletter" class="flex text-sm font-thin"
                >Email Address</label
              >
              <input
                id="heroNewsletter"
                class="w-full"
                placeholder="email"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style>
.hero-banner {
  @apply xl:min-h-[650px] -mt-20 pt-20 px-5 xl:px-0 bg-transparent relative;
}
.hero-banner .hero-body {
  @apply grid xl:grid-cols-2;
}
.hero-banner .left-section {
  @apply xl:px-[120px] xl:py-20 container z-10;
}
.hero-banner .text-heading {
  @apply font-semibold text-6xl lg:text-7xl text-gray-800 lg:leading-[80px];
}
.hero-banner .text-intro-heading {
  @apply font-semibold text-2xl lg:text-3xl text-gray-800 lg:leading-[80px];
}
.text-gradient-primary {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-500;
}
.hero-banner .text-body {
  @apply pt-10 text-gray-800 text-base;
}
.button-primary {
  @apply duration-300 border rounded px-12 py-3 text-white border-transparent bg-gradient-to-tr from-orange-300 to-red-500 cursor-pointer hover:scale-110;
}
.link-primary {
  @apply rounded px-5 text-gray-800 flex items-center gap-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-orange-300 hover:to-red-500 hover:scale-110 duration-300;
}
.hero-banner .right-section {
  @apply xl:relative hidden xl:inline;
}
.icon-container {
  @apply flex p-1 rounded-lg w-10 h-10 absolute z-20 bg-gradient-to-tl;
}

.hero-banner .youtube-container {
  @apply p-1 rounded-lg w-44 h-20 absolute z-20 bg-gradient-to-r  text-white from-red-400/50 to-red-700/75 border-[#f7f7f7] flex justify-center align-middle items-center gap-5 bottom-20 left-0;
}

.hero-banner .customer-container {
  @apply p-3 rounded-lg w-44 h-20 absolute z-20 bg-gradient-to-r text-white from-red-400/50 to-red-700/75 border-[#f7f7f7] flex-col justify-center align-middle items-center content-center gap-5 bottom-20 left-[30%] -space-x-2;
}
</style>
