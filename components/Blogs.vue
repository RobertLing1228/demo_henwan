<template>
  <div class="flex items-end justify-between flex-auto mb-12 header">
    <div class="title">
      <p id="Blogs" class="mb-4 text-4xl font-bold text-gray-800">
        Latest Articles
      </p>
      <p class="text-xl font-light text-gray-500">
        All related about Henwan Sdn. Bhd. will be blogged here.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
    <!-- blogs section -->
    <Blog></Blog>
    <Blog></Blog>
    <Blog></Blog>
  </div>
  <div class="text-center">
    <NuxtLink
      to="#top"
      class="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-md hover:bg-gray-900"
      >Read More From Us</NuxtLink
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
