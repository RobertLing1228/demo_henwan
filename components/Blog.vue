<template>
  <div class="m-auto rounded-lg shadow-lg h-90 md:w-full">
    <a href="#" class="block w-full h-full">
      <NuxtImg
        placeholder="https://fakeimg.pl/600x400"
        alt="blog photo"
        src="./blogs/4.jpg"
        class="object-cover w-full max-h-40"
      />
    </a>
    <div class="w-full p-4 bg-white dark:bg-gray-800">
      <p class="font-medium text-indigo-500 text-md">Article</p>
      <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
        Supercharged !
      </p>
      <p class="font-light text-gray-400 dark:text-gray-300 text-md">
        The new supercar is here, 543 cv and 140 000$. This is best racing GT
        about 7 years on...
      </p>
      <div class="flex items-center mt-4">
        <a href="#" class="relative block">
          <img
            alt="profile"
            src="/user/aiony-haust.png"
            class="object-cover w-10 h-10 mx-auto rounded-full"
          />
        </a>
        <div class="flex flex-col justify-between ml-4 text-sm">
          <p class="text-gray-800 dark:text-white">Aiony Haust</p>
          <p class="text-gray-400 dark:text-gray-300">
            20 mars 2029 - 6 min read
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
