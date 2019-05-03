<template>
  <div class="banner-area">
    <div :class="{'src': isSrc, 'alt': isAlt}">
      <img :src="img.src" :alt="img.alt">
    </div>
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
    img: {
      type: Object,
      default: () => ({ src: "/img/banner/banner-80.jpg", alt: "banner" }),
        validator: val => Object.keys(val).includes('src') && Object.keys(val).includes('alt')
    },
  },
  computed: {
    isSrc() {
      return this.orientation == "src";
    },
    isAlt() {
      return this.orientation == "alt";
    }
  }
};
</script>
