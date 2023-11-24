<template>
  <div
    class="justify-center w-full overflow-hidden text-center rounded-lg h-90 hover:shadow-lg dark:bg-gray-900 dark:text-white min-h-[24rem]"
  >
    <NuxtImg
      placeholder="https://fakeimg.pl/600x400"
      alt="Service Icon"
      :src="serviceIcon"
      class="mx-auto rounded-full max-w-40 max-h-40"
    />
    <div class="w-full p-4 dark:bg-gray-800">
      <p class="mb-2 text-2xl font-medium text-gray-800 dark:text-white">
        {{ title }}
      </p>
      <p class="font-light text-gray-400 dark:text-gray-300 text-md">
        <span v-html="description"></span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  serviceIcon: String,
});
</script>

<style scoped></style>
