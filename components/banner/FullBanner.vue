<template>
  <div class="banner-area">
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
.banner-area > img {
  width: 100%;
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "/img/banner/banner-80.jpg"
    },
    alt: {
      type: String,
      default: "Banner completo"
    }
  }
};
</script>
