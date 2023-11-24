<template>
  <div class="relative z-10">
    <client-only>
      <Vue3Spline
        class=""
        :scene="{
          url: 'https://prod.spline.design/72fVlt4obyPLuCF0/scene.splinecode',
          eventsTarget: 'global',
        }"
      />
    </client-only>
    <div
      class="absolute z-20 flex justify-center gap-8 inset-1 place-items-end h-[670px]"
    >
      <div class="h-[150px] w-[100px] text-center">
        <nuxt-img
          class=""
          src="assets/img/cheetos.png"
          width="1000"
          alt="Cheetos"
        />
        <span>adsasda</span>
      </div>
      <div class="h-[150px] w-[100px] text-center bg-slate-500">item1</div>
      <div class="h-[150px] w-[100px] text-center bg-slate-500">item1</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
