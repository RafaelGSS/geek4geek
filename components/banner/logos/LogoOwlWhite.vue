<template>
  <div>
    <img src="/img/logo/icon-geek4geek-white.png" :width="width" :height="height" :alt="alt">
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 250
    },
    height: {
      type: Number,
      default: 60
    },
    alt: {
      type: String,
      default: "Logo do Geek4Geek"
    }
  }
};
</script>

<style scoped>
</style>

