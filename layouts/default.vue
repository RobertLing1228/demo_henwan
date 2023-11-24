<template>
  <div class="fixed top-0 z-50 w-screen overflow-hidden bg-transparent h-36">
    <HeaderCom />
  </div>
  <div class="bg-transparent mt-44 overflow-clip">
    <slot />
  </div>
  <!-- <div class="w-screen mt-10 overflow-hidden bg-transparent">
    footer
  </div> -->
</template>
<script setup></script>
